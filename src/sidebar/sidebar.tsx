import React, { useState } from 'react'
import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useTypeSelector } from '../hooks/useTypeSelector';
import Sider from 'antd/lib/layout/Sider';

const { SubMenu } = Menu;

const Sidebar = () => {

    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { authId } = useTypeSelector(state => state.login)

    return <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
    >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="5"><Link to='Color'>Color</Link></Menu.Item>
            <Menu.Item key="4"><Link to='Login'>Login</Link></Menu.Item>
            <Menu.Item key="3"><Link to={`Profile/${authId}`}>Profile</Link></Menu.Item>
            <Menu.Item key="2"><Link to='Users'>Users</Link></Menu.Item>
            <Menu.Item key="1"><Link to='Settings'>Settings</Link></Menu.Item>
        </Menu>
    </Sider>
}
export default Sidebar;


