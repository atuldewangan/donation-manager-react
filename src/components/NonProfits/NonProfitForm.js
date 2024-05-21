import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import axios from 'axios';

const NonProfitForm = ({ setReload }) => {
    const onFinish = (values) => {
        console.log('Success:', values);

        axios.post('http://127.0.0.1:8081/nonprofits', values)
            .then(function (response) {
                console.log(response);
                window.alert("Success")
                setReload(true)
            })
            .catch(function (error) {
                console.log(error);
            });

    };


    return (
        <div style={{
            width: "30%",
            // backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
            // margin: 50


        }}>
            <Form
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={() => { }}
                autoComplete="off"
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Adress"
                    name="address"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Adress!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>



                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>


        </div>
    )
}


export default NonProfitForm