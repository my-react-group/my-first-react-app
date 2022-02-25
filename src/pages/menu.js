import { Menu } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import React from 'react';
import routesConfig from '../routes';
import { useNavigate } from 'react-router-dom';

const { SubMenu } = Menu;


// export default  class Sider extends React.Component 
export default function MenuMy() {
    const navigate = useNavigate();
    const  HandleClick = (path) => {
        navigate(path);
    };

    return (
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub4" icon={<SettingOutlined />} title="列表页面">
        {
            routesConfig[0].children.map(item => {
                return (<Menu.Item key={item.path} onClick={() => HandleClick(item.path)}>{item.name}</Menu.Item>)
            })
        }
        </SubMenu>
      </Menu>
    );
}