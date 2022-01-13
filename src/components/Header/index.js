import hw_logo from '@/statics/img/hw_logo.png';
import { Affix } from 'antd';
import React, { useMemo, useRef } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { naviItems } from '../../constants/index';
import './index.scss';


const CustomeHeader = () => {
    // const background = 'rgb(0, 0, 255)'; // 统一的背景
    const navigate = useNavigate();

    const location = useLocation();
    const currentPath = location.pathname;
    

    const naviItemsList = useRef(naviItems);

    const navibarItems = useMemo(() => {
        const content = naviItemsList.current.map(item => {
            const { path: itemPath, title, key } = item;
            const backgroundColor = currentPath === itemPath ? '#ee4547' : 'transparent';
                return (
                    <div 
                        className='navi-item'
                        style={{ backgroundColor }}
                        key={key}
                        onClick={() => navigate(itemPath)}
                    >
                        {title}
                    </div>
                );
        });
        
        return content;
    }, [currentPath]);

    return (
        <div>
            <div className='top-header'>
                <img src={hw_logo} style={{ width: 320, height: 100,  }} />
            </div>
            <Affix offsetTop={0}>
                <div className='navi-bar'>
                    {navibarItems}
                </div>
            </Affix>
            <div 
                style={{ 
                    height: 3,
                    width: '100%',
                    backgroundColor: '#ee4547'
                }}
            />
            
            {/* <Affix offsetTop={0}>
                <div className="header">
                    <Row justify="center" align="middle" style={{ background }}>
                        <Col flex={3} align="center">
                            <img src={hw_logo} style={{ width: 330, height: 100 }} />
                        </Col>

                        <Col flex={10}> </Col>

                        <Col flex={1}>
                            <NaviBar background={background} />
                        </Col>
                    </Row>
                </div>
            </Affix> */}
        </div>
    );
};

export default CustomeHeader;