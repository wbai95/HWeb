import { Menu } from 'antd';
import React, { useRef } from "react";
import '../../statics/css/naviBar.css';
import './index.css';


const { SubMenu } = Menu;

// 目前这些数据先写死，等后来服务端开发后，会从服务端获得数据
const data = {
    items: [
        {
            key: 'Home',
            title: '首页',
        },
        {
            key: 'about',
            title: '关于我们',
        },
        {
            key: 'production',
            title: '产品中心',
        },
        {
            key: 'message',
            title: '在线留言',
        },
        {
            key: 'Connect_us',
            title: '联系我们',
        },
    ],
};

const NaviBar = ({ background='' }) => {

    const barsList = useRef([
        {
            key: 'Home',
            title: '首页',
        },
        {
            key: 'about',
            title: '关于我们',
        },
        {
            key: 'production',
            title: '产品中心',
        },
        {
            key: 'message',
            title: '在线留言',
        },
        {
            key: 'Connect_us',
            title: '联系我们',
        },
    ]);

    // #ffffff
    const rightStyle = { position: 'absolute', top: 0, right: 0 };

    return (
        <div>
            <Menu mode="horizontal" theme="dark" style={{ background }}>
                {barsList.current.map(item => (
                    <Menu.Item key={item.key}>
                        {item.title}
                    </Menu.Item>
                ))}

                {/* {data.items.map(item => (
                    item.items && item.items.length > 0 ? (
                        <SubMenu key={item.key} title={item.title}>
                            <Menu.ItemGroup>
                                {item.items.map(subItem => (
                                    <Menu.Item key={subItem.key}>
                                        {subItem.title}
                                    </Menu.Item>
                                ))}
                            </Menu.ItemGroup>
                        </SubMenu>
                    ) : (
                        <Menu.Item key={item.key}>
                            {item.key == "Register" || item.key == "Login" ?
                                <Button type="primary" size="large" className="naviBar-button">
                                    {item.title}
                                </Button> :
                                <div>
                                    {item.title}
                                </div>}
                        </Menu.Item>
                    )
                ))} */}
            </Menu>
            
            {/*
                <Menu mode="horizontal">
                <Menu.Item> Cookies </Menu.Item>
                <Menu.Item> Cookies2 </Menu.Item>
                <Menu.Item style={rightStyle}> Right </Menu.Item>
                </Menu>
            */}

            <div>
                
            </div>
            
        </div>
    );
}

export default NaviBar;