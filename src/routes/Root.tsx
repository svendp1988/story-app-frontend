import { Content, Footer, Header } from 'antd/es/layout/layout';
import { Layout, Menu } from 'antd';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Root = () => {

    const items = [
        {
            label: 'Home',
            link: '/home'
        },
        {
            label: 'Create your own story',
            link: '/create'
        },
        {
            label: 'Contribute on a story',
            link: '/contribute'
        },
        {
            label: 'Read a story',
            link: '/read'
        },
        {
            label: 'Register',
            link: '/register',
            right: true
        },
        {
            label: 'Login',
            link: '/login',
            right: true
        }
    ];

    return (<Layout className="layout">
        <Header>
            <div className="logo"/>
            <Menu
                theme="dark"
                mode="horizontal"
                style={{ display: 'block' }}
            >
                {items.map(item => (
                    <Menu.Item
                        key={item.label}
                        style={item.right ? { float: 'right'} : {}}
                    >
                        <span>{item.label}</span>
                        <Link to={item.link}/>
                    </Menu.Item>
                ))}
            </Menu>
        </Header>
        <Content style={{ padding: '0 50px', textAlign: 'center', width: '70%', margin: 'auto' }}>
            <Outlet/>
        </Content>
        <Footer/>
    </Layout>);
};

export default Root;
