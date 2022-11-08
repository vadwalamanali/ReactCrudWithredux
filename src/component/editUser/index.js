import React, { useState } from 'react';
import { Button, Form,Input } from 'antd';
import './index.css';
import { useDispatch, useSelector } from "react-redux";
import { userUpdated } from "../../features/users/usersSlice";

const EditUser = (id) => {
    const userId = id.id;
    const dispatch = useDispatch();
    const user = useSelector((state) =>
        state.users.entities.find((user) => user.id === userId)
    );
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [mobile,setMobile] = useState(user.mobile);
    
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
   
    const handleName = (e) => {
        setName(e.target.value)
    };
    
    const handleEmail = (e) => setEmail(e.target.value);

    const handleMobile = (e) => setMobile(e.target.value);

    const handleClick = () => {
        if (name && email && mobile) {
          dispatch(
            userUpdated({
              id: userId,
              name,
              email,
              mobile
            })
          );
          id.onEditCancel(false);          
        } 

      };

    return (
        <>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input name!' }]}
                >
                    <Input onChange={handleName} value={name} defaultValue={user.name}/>
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input email!' }]}
                >
                    <Input onChange={handleEmail} value={email} defaultValue={user.email}/>
                </Form.Item>

                <Form.Item
                    label="Mobile"
                    name="mobile"
                    rules={[{ required: true, message: 'Please input mobile!' }]}
                >
                    <Input onChange={handleMobile} value={mobile} defaultValue={user.mobile}/>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" onClick={handleClick}>
                        Update User
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
};
    
export default EditUser;