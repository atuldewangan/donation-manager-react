import { Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const FoundationListingV2 = ({ reload, setReload }) => {
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);
    console.log("data, ", list);

    useEffect(() => {
        fetchData()
    }, []);

    useEffect(() => {
        if (reload) {
            fetchData()
        }
    }, [reload]);

    const fetchData = () => {
        setLoading(true);

        axios.get('http://127.0.0.1:8081/foundations')
            .then(function (response) {
                console.log("response, ", response);

                setInitLoading(false);
                setData(response.data);
                setList(response.data);
                setLoading(false);
                setReload(false)


                //   window.alert("Success")
            })
            .catch(function (error) {
                setLoading(false);
                setReload(false)

                console.log(error);
            });

    }



    const columns = [
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'email',
            dataIndex: 'email',
            key: 'email',
        },

    ];


    return (
        <div style={{
            width: "50%",
            alignItems: "start"

        }}>

            <Table dataSource={data} columns={columns} pagination={false} />
        </div>
    )
}

export default FoundationListingV2