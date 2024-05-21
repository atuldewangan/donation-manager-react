// import React from 'react'
// import { Button, Checkbox, Form, Input } from 'antd'
import axios from 'axios';


import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton } from 'antd';
const count = 3;
const fakeDataUrl = `http://127.0.0.1:8081/nonprofits`;

const NonProfitListing = ({ reload, setReload }) => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  console.log("data, ", list);

  useEffect(() => {
    // fetch(fakeDataUrl)
    // //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log("res.results", res.results)


    //     setInitLoading(false);
    //     setData(res.results);
    //     setList(res.results);
    //   });


    fetchData()

  }, []);

  useEffect(() => {
    if (reload) {
      fetchData()
    }
  }, [reload]);

  const fetchData = () => {
    setLoading(true);

    axios.get('http://127.0.0.1:8081/nonprofits')
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
  const onLoadMore = () => {
    // setList(
    //   data.concat(
    //     [...new Array(count)].map(() => ({
    //       loading: true,
    //       name: {},
    //       picture: {},
    //     })),
    //   ),
    // );
    fetchData()

  };
  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;
  return (
    <div style={{ marginInline: 50, maxWidth: 500 }}>

      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        // loadMore={loadMore}
        dataSource={list}
        renderItem={(item) => (
          <List.Item
          // actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                //   avatar={<Avatar src={item.picture.large} 
                //   />
                // }
                title={<div href="https://ant.design">{item.name}</div>

                }
                description={<div href="https://ant.design">{item.email}, {item.address}</div>}
              />
              {/* <div>content</div> */}
            </Skeleton>
          </List.Item>
        )}
      />
    </div>
  );
};

// const old = props => {
//     const onFinish = (values) => {
//         console.log('Success:', values);

//         axios.post('http://127.0.0.1:8081/nonprofits', values)
//           .then(function (response) {
//             console.log(response);
//             window.alert("Success")
//           })
//           .catch(function (error) {
//             console.log(error);
//           });

//       };


//     return (
//         <div>
//             <Form
//                 name="basic"
//                 labelCol={{
//                     span: 8,
//                 }}
//                 wrapperCol={{
//                     span: 16,
//                 }}
//                 style={{
//                     maxWidth: 600,
//                 }}
//                 initialValues={{
//                     remember: true,
//                 }}
//                 onFinish={onFinish}
//                 onFinishFailed={()=>{}}
//                 autoComplete="off"
//             >
//                 <Form.Item
//                     label="Name"
//                     name="name"
//                     rules={[
//                         {
//                             required: true,
//                             message: 'Please input your username!',
//                         },
//                     ]}
//                 >
//                     <Input />
//                 </Form.Item>

//                 <Form.Item
//                     label="Adress"
//                     name="address"
//                     rules={[
//                         {
//                             required: true,
//                             message: 'Please input your username!',
//                         },
//                     ]}
//                 >
//                     <Input />
//                 </Form.Item>


//                 <Form.Item
//                     label="Email"
//                     name="email"
//                     rules={[
//                         {
//                             required: true,
//                             message: 'Please input your username!',
//                         },
//                     ]}
//                 >
//                     <Input />
//                 </Form.Item>



//                 <Form.Item
//                     wrapperCol={{
//                         offset: 8,
//                         span: 16,
//                     }}
//                 >
//                     <Button type="primary" htmlType="submit">
//                         Submit
//                     </Button>
//                 </Form.Item>
//             </Form>


//         </div>
//     )
// }

export default NonProfitListing