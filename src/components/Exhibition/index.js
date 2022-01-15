// 国旗
import flag_kh from '@/statics/img/kh.png';
import flag_kr from '@/statics/img/kr.png';
import flag_la from '@/statics/img/la.png';
// 展台图片
import partner_luzhou from '@/statics/img/Luzhoulaojiao.png';
import partner_langjiu from '@/statics/img/Sichuanlangjiu.png';
import flag_th from '@/statics/img/th.png';
import { Col, Row, Space } from 'antd';
import React from "react";
import './index.css';


// 目前这些数据先写死，等后来服务端开发后，会从服务端获得数据
const nations = [
    {
        nation: "俄罗斯",
        flag: flag_th
    },
    {
        nation: "美国",
        flag: flag_kh
    },
    {
        nation: "墨西哥",
        flag: flag_la
    },
    {
        nation: "加拿大",
        flag: flag_kr
    }
];

// const regions = ['泸州展区', '西安展区', '渭南展区', '铜川展区', '咸阳展区', '延安展区', '更多+'];

const partners = [
    {
        name: "北方重工",
        img: partner_luzhou
    },
    {
        name: "沈阳冶金机械",
        img: partner_langjiu
    }
];

const titleSize = 4;

const Exhibition = (props) => {
    const { defatulStyle = {} } = props;

    return (
        <div className="exhibition" style={defatulStyle}>

            <Space size="large">   </Space>

            <Row gutter={[16, 48]}>
                {/* 出口国家 */}
                <Col span={24}>
                    <Row align="middle">
                        <Col span={titleSize}>
                            出口国家
                        </Col>
                        <Col span={12}>
                            <Row>
                                {
                                    nations.map(nation => (
                                        <Col flex={1}>
                                            <Row>
                                                <Col span={24} align="center">
                                                    <img src={nation.flag} alt="flag" style={{ width: 80, height: 50 }} />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col span={24} align="center">
                                                    <span className="exhibition-item exhibition-item-cover"> {nation.nation} </span>
                                                </Col>
                                            </Row>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Col>
                    </Row>
                </Col>

                {/*地方展区*/}
                {/* <Col span={24}>
                    <Row>
                        <Col span={titleSize}>
                            地方展区
                        </Col>
                        <Col span={16}>
                            <Row>
                                {
                                    regions.map(region => (
                                        <Col flex={1} align="center">
                                            <span className="exhibition-item exhibition-item-cover"> {region} </span>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Col>
                    </Row>
                </Col> */}

                {/*热门展台*/}
                <Col span={24}>
                    <Row align="middle" >
                        <Col span={titleSize}>
                            合作公司
                        </Col>
                        <Col span={12}>
                            <Row>
                                {
                                    partners.map(partner => (
                                        <Col flex={1}>
                                            <Row>
                                                <Col span={24} align="center">
                                                    <img src={partner.img} alt="partner" style={{ width: 200, height: 100 }} />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col span={24} align="center">
                                                    <span className="exhibition-item exhibition-item-cover"> {partner.name} </span>
                                                </Col>
                                            </Row>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Col>
                    </Row>
                </Col>

            </Row>
        </div>
    );
}

export default Exhibition;