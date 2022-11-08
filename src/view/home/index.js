import React from 'react';
import User from '../../component/user';
import DeleteUser from '../../component/deleteUser';
import { Tabs, Typography, Col, Row } from 'antd';

const Home = () => {
    const { Title } = Typography;
    return (
        <>
            <Row>
                <Col span={12} offset={6}>
                    <Title>React Task</Title>
                    <Tabs defaultActiveKey="1">
                        <Tabs.TabPane tab="User" key="1">
                            <User />
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Delete User" key="2">
                            <DeleteUser />
                        </Tabs.TabPane>
                    </Tabs>
                </Col>
            </Row>
        </>
    );
};

export default Home;
    