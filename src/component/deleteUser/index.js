import React from 'react';
import { Button } from 'antd';
import './index.css';

const ShowDeletedUserLists = (user) => {
    return (
        <>
            <tr>
                <td>{user.data.name}</td>
                <td>{user.data.email}</td>
                <td>{user.data.mobile}</td>
                <td>
                    <Button type="primary">Restore</Button>
                </td>
            </tr>
        </>
    )
};

const DeleteUser = () => {
    const showDeletedUserLists = [
        {
            name: 'manali',
            email: 'manali@gmail.com',
            mobile: '123'
        },
        {
            name: 'kanika',
            email: 'kanika@gmail.com',
            mobile: '456'
        }
    ];
    return (
        <>
            <table className='deleteUserTable'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {showDeletedUserLists.map((item, index) => {
                        return <ShowDeletedUserLists key={index} data={item} />;
                    })}
                </tbody>
            </table>
        </>
    )
};
    
export default DeleteUser;