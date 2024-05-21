import React from 'react'
import PropTypes from 'prop-types'
import { Collapse, Table, Tag } from 'antd';

import { Switch, Typography } from 'antd';
const { Paragraph, Text } = Typography;

const NotificationDetails = ({ mails }) => {

    const columns = [
        {
            title: 'foundation',
            dataIndex: 'foundation',
            key: 'foundation',
        },
        {
            title: 'nonProfits',
            dataIndex: 'nonProfits',
            key: 'nonProfits',
            render: (_, { nonProfits }) => (
                <>
                    {nonProfits?.map((tag) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),

        },
        {
            title: 'mailText',
            dataIndex: 'mailText',
            key: 'mailText',
            render: (_, { mailText }) => (
                <> {console.log('mailText', mailText)}
                    {mailText?.map((tag) => {
                        return (
                            <Text ellipsis={{
                                rows: 1,
                                expandable: true,
                                symbol: 'more',
                            }}>
                                {`${tag}`}
                            </Text>
                        );
                    })}
                </>
            ),

        },

    ];


    return (
        <div style={{
            width: "70%",
            alignItems: "start",
            background: "red"

        }}>

            <Table style={{}} pagination={false} dataSource={mails} columns={columns} />
        </div>
    )
}


export default NotificationDetails