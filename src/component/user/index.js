import React, { useState } from 'react';
import { Button, Modal,  Form, Input } from 'antd';
import './index.css';
import { userAdded,userDeleted } from "../../features/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import EditUser from '../../component/editUser';

const ShowUserLists = (user) => {
    
    return (
        <>
            <tr>
                <td>{user.data.data.name}</td>
                <td>{user.data.data.email}</td>
                <td>{user.data.data.mobile}</td>
                <td>{user.data.data.id}</td>
                <td>
                    <Button type="primary" onClick={() => user.data.showEditModal(user.data.data.id)}>Edit</Button>
                    <Button onClick={() => user.data.handleDelete(user.data.data.id)}>Delete</Button>
                </td>
            </tr>
        </>
    )
};
const User = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile,setMobile] = useState("");
    const [Id,setId] = useState("");

    const usersValue = useSelector((state) => state.users.entities.length);
    const usersValue1 = useSelector((state) => state.users);

    const handleName = (e) => {
        setName(e.target.value)
    };
    
    const handleEmail = (e) => setEmail(e.target.value);

    const handleMobile = (e) => setMobile(e.target.value);


    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    const showEditModal = (user) => {
        setId(user)
        setIsEditModalOpen(true);
    };
    
    const editHandleOk = () => {
        setIsEditModalOpen(false);
    };

    const editHandleCancel = () => {
        setIsEditModalOpen(false);
    };
    const handleDelete = (user) => {
        let id = user
        dispatch(userDeleted({ id }));
      };
    
    const handleClick = () => {
        if (name && email && mobile)  {
            dispatch(
                userAdded({
                  id: usersValue + 1,
                  name,
                  email,
                  mobile,

                })
            );
            setIsModalOpen(false);
        }
    }

    const onFinish = (values) => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
     
    
   
    return (
        <>
            <Button type="primary" onClick={showModal}>Add New User</Button>
            <Modal 
                title="Add New User"
                open={isModalOpen}
                footer={null}
                onOk={handleOk}
                onCancel={handleCancel}
            >
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
                        <Input onChange={handleName} value={name}/>
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input email!' }]}
                    >
                        <Input onChange={handleEmail} value={email} />
                    </Form.Item>

                    <Form.Item
                        label="Mobile"
                        name="mobile"
                        rules={[{ required: true, message: 'Please input mobile!' }]}
                    >
                        <Input onChange={handleMobile} value={mobile}/>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit" onClick={handleClick}>
                            Add
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
            <table className='userTable'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {usersValue1.entities.map((item, index) => {
                        const userList = {
                            data: item,
                            showEditModal: showEditModal,
                            handleDelete: handleDelete
                        }
                        return <ShowUserLists key={index} data={userList} />;
                    })}
                </tbody>
            </table>
            <Modal 
                title="Edit User"
                open={isEditModalOpen}
                footer={null}
                onOk={editHandleOk}
                onCancel={editHandleCancel}

            >
                <EditUser id={Id} onEditCancel={setIsEditModalOpen} />
            </Modal>
        </>
    )
};
    
export default User;