// import expo_logo from '@/statics/img/expo_logo.png';
import hw_logo from '@/statics/img/hw_logo.png';
import { Affix, Col, Row, Space } from 'antd';
import React from "react";
import NaviBar from "../NaviBar";
import './index.css';


const CustomeHeader = () => {
    const background = 'rgb(0, 0, 255)'; // 统一的背景

    return (
        <div>
            <Affix offsetTop={0}>
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
            </Affix>
        </div>
    );
};

export default CustomeHeader;