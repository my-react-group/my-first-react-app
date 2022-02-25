import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import React from 'react';
import routesConfig from '../routes/routeConfig';
import { useNavigate } from 'react-router-dom';

const { SubMenu } = Menu;


// export default  class Sider extends React.Component 
function MenuMy() {
    const navigate = useNavigate();
    const  HandleClick = (e) => {
        console.log('click ', e);
        navigate(e.path);
    };

    return (
      <Menu
        onClick={HandleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub4" icon={<SettingOutlined />} title="列表页面">
        {
            routesConfig.map(item => {
                return (<Menu.Item key={item.path}>{item.name}</Menu.Item>)
            })
        }
        </SubMenu>
      </Menu>
    );
}
export default  MenuMy;