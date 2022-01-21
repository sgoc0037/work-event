import React, { useState } from 'react'
import { Menu, Button } from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useTypeSelector } from '../hooks/useTypeSelector';

const { SubMenu } = Menu;

const Sidebar = () => {

    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { authId} = useTypeSelector(state=> state.login)

    return <div style={{ width: 256 }}>
        <Button type="primary" onClick={() => setCollapsed(!collapsed)} style={{ marginBottom: 16 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
        >
            <Menu.Item key="11" icon={<PieChartOutlined />}>
                Option 1
            </Menu.Item>
            <Menu.Item key="22" icon={<DesktopOutlined />}>
                Option 2
            </Menu.Item>
            <Menu.Item key="33" icon={<ContainerOutlined />}>
                Option 3
            </Menu.Item>
            <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                <Menu.Item key="6"><Link to='Calendar'>Calendar</Link></Menu.Item>
                <Menu.Item key="5"><Link to='Color'>Color</Link></Menu.Item>
                <Menu.Item key="4"><Link to='Login'>Login</Link></Menu.Item>
                <Menu.Item key="3"><Link to={`Profile/${authId}`}>Profile</Link></Menu.Item>
                <Menu.Item key="2"><Link to='Users'>Users</Link></Menu.Item>
                <Menu.Item key="1"><Link to='Settings'>Settings</Link></Menu.Item>
            </SubMenu>
        </Menu>
    </div>
}
export default Sidebar;