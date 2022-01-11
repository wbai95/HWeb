// import expo_logo from '@/statics/img/expo_logo.png';
import hw_logo from '@/statics/img/hw_logo.png';
import { Affix } from 'antd';
import React from "react";
// import NaviBar from "../NaviBar";
import './index.scss';


const CustomeHeader = () => {
    // const background = 'rgb(0, 0, 255)'; // 统一的背景
    const background = 'rgb(47, 53, 59)';
    const topHeight = 100;

    return (
        <div>
            <div style={{ background, height: topHeight }}>
                <img src={hw_logo} style={{ width: 330, height: topHeight,  }} />
            </div>
            <Affix offsetTop={0}>
                {/* <NaviBar background={background} /> */}
                <div className='navi-bar'>
                    <div className='navi-item'>
                        Default Button1
                    </div>
                    <div className='navi-item'>
                        Default Button2
                    </div>
                    <div className='navi-item'>
                        Default Button3
                    </div>
                </div>
            </Affix>
            
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