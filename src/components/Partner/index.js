import partner_luzhou from '@/statics/img/Luzhoulaojiao.png';
import partner_img from '@/statics/img/partner.png';
import partner_langjiu from '@/statics/img/Sichuanlangjiu.png';
import { Carousel, Col, Row, Space } from 'antd';
import React from "react";
import './index.css';


const Partner = () => {
    const partners = [
        partner_luzhou,
        partner_langjiu
    ];

    return(
        <div className="partner">
            <Space size="large">    </Space>
            <Row justify="center">
                <Col span={10} style={{ background: "white", textAlign: "center" }}>
                    <img src={partner_img} alt="partner" style={{ width: 400, height: 200 }} />
                </Col>

                <Col span={10} style={{ background: "white"}}>
                    <Carousel autoplay dotPosition="right">
                        {
                            partners.map(partner => (
                                <div>
                                    <img src={partner} alt="partner" style={{ width: 400, height: 200, marginLeft: "auto", marginRight: "auto" }} />
                                </div>
                            ))
                        }
                    </Carousel>
                </Col>
            </Row>
            <Space size="large"> </Space>
        </div>
    );
};

export default Partner;