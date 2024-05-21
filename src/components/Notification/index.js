import { Button, Select, Space } from 'antd'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NotificationDetails from './NotificationDetails';



const Notifcations = () => {

    const [options, seOptions] = useState([])
    const [foundationOptions, setFoundationOptions] = useState([])

    const [foundation, setfoundation] = useState()
    const [nonProfit, setNonProfit] = useState()
    const [mails, setMails] = useState()
    const [reload, setReload] = useState(false)


    console.log(`Notifcations render`);

    const handleNonProfitChange = (value) => {
        setNonProfit(value)
        console.log("handleNonProfitChange", value);
    };

    const handleFoundationChange = (value) => {
        setfoundation(value)

        console.log("handleFoundationChange", value);
    };

    const onSubmit = () => {
        const reqBody = {
            foundation: foundation,
            nonProfits: nonProfit
        }
        console.log("onSubmit==>", reqBody);

        axios.post('http://127.0.0.1:8081/foundations/sendMail', reqBody)
            .then(function (response) {
                console.log(response);
                window.alert("Success")
                setReload(true)
            })
            .catch(function (error) {
                console.log(error);
            });

    };






    useEffect(() => {
        axios.get('http://127.0.0.1:8081/nonprofits')
            .then(function (response) {
                console.log("response, ", response);
                const optionsTmp = response.data.map(item => { return { label: item.name, value: item.name } })
                seOptions(optionsTmp)
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get('http://127.0.0.1:8081/foundations')
            .then(function (response) {
                console.log("response, ", response);
                const optionsTmp = response.data.map(item => { return { label: item.name, value: item.name } })
                setFoundationOptions(optionsTmp)
            })
            .catch(function (error) {
                console.log(error);
            });


        axios.get('http://127.0.0.1:8081/foundations/fetchMail')
            .then(function (response) {
                console.log("response, ", response);
                const optionsTmp = response.data.map(item => { return { label: item.name, value: item.name } })
                setMails(optionsTmp)
            })
            .catch(function (error) {
                console.log(error);
            });
        fetchMail();
    }, []);

    useEffect(() => {
        if (reload) {
            fetchMail()
        }


    }, [reload]);



    const fetchMail = () => {
        axios.get('http://127.0.0.1:8081/foundations/fetchMail')
            .then(function (response) {
                setMails(response.data)
                setReload(false)
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            // background: "red",
            justifyContent: "center",
            alignItems: "center",
            // alignContent: "center",
            margin: 50,
            width: "100%",
            height: "100%",

            // flex: 1


        }}>
            <Space
                style={{
                    width: '30%',
                    margin: 20

                }}
                direction="vertical"
            >
                <Select
                    // mode="multiple"
                    allowClear
                    style={{
                        width: '100%',
                    }}
                    placeholder="Please select Foundation"
                    defaultValue={[]}
                    onChange={handleFoundationChange}
                    options={foundationOptions}
                />
                <Select
                    mode="multiple"
                    allowClear
                    style={{
                        width: '100%',
                    }}
                    placeholder="Please select Non Profit org"
                    defaultValue={[]}
                    onChange={handleNonProfitChange}
                    options={options}
                />
                <Button type="primary" onClick={onSubmit}>Submit</Button>


            </Space>
            <div style={{ backgroundColor: "black", width: "100%", height: 1, marginRight: 100, marginBottom: 50 }} />

            <NotificationDetails mails={mails} />

        </div>
    )
}

export default Notifcations