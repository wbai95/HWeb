import chemicalProducts from '@/statics/img/chemical_products.jpg';
import clothes from '@/statics/img/clothes.jpg';
import energy from '@/statics/img/energy.jpg';
import food from '@/statics/img/food.jpg';
import hardwareTools from '@/statics/img/hardware_tools.jpg';
import homeAppliances from '@/statics/img/home_appliances.jpg';
import illumination from '@/statics/img/illumination.jpg';
import machine from '@/statics/img/machine.jpg';
import medicalTreatment from '@/statics/img/medicalTreatment.jpg';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
// import { LeftCircleTwoTone, RightCircleTwoTone } from "@ant-design/icons";
import { Carousel, Input, Select, Space, Typography } from 'antd';
import React, { useMemo, useState } from 'react';
import './index.scss';

const { Title, Text } = Typography;
const { Option } = Select;

const ExhibitOverview = (props) => {
    const { defatulStyle = {} } = props;

    const [exhibitInfo, setExhibitInfo] = useState({
        categoryCount: 0,
        exhibitionAreaCount: 0
    });

    const [categioryList, setCategioryList] = useState([
        {
            title: "齿轮箱",
            img: illumination,
            exhibitsCount: 0,
            exhibitorsCount: 0,
            subCategiories: ['减速机', '增塑机'],
        },
        {
            title: "齿轮",
            img: clothes,
            exhibitsCount: 0,
            exhibitorsCount: 0,
            subCategiories: ['风能齿轮', '重型齿轮'],
        },
        {
            title: "齿圈",
            img: machine,
            exhibitsCount: 0,
            exhibitorsCount: 0,
            subCategiories: ['电铲大齿圈', '风能内环齿圈', '定制直齿环齿圈'],
        },
        {
            title: "齿轮轴",
            img: machine,
            exhibitsCount: 0,
            exhibitorsCount: 0,
            subCategiories: ['大型齿轮轴'],
        },
    ]);

    const categioryCards = useMemo(() => {
        const content = (
            <Carousel
                arrows={true}
                prevArrow={<LeftOutlined />}
                nextArrow={<RightOutlined />}
                slidesToShow={3}
            >
                {
                    categioryList.map(item =>
                        <div className="exhibit-item-wrap">
                            <div className="flip-container" >
                                <div class="flipper">
                                    <div class="front"
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {/* 正面内容 */}
                                        <Title level={5}>{item.title}</Title>
                                        <img src={item.img} alt={item.title} style={{ width: 150, height: 150 }} />
                                    </div>
                                    <div class="back">
                                        {/* 背面内容 */}
                                        <Title level={5}>{item.title}</Title>
                                        {item.subCategiories.map(subCategiory => <div>{subCategiory}</div>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </Carousel>
        );

        return content;
    }, [categioryList])


    return (
        <div className="exhibit-bar" style={defatulStyle}>
            <div className="exhibit-bar-title">
                <Space align="center">
                    <div style={{ color: "rgba(0, 0, 0, 0.85)", fontWeight: 600, fontSize: 24 }}>产品</div>
                    {/* <Text>{exhibitInfo.categoryCount}个大类</Text>
                    <Text>{exhibitInfo.exhibitionAreaCount}个展区</Text> */}
                </Space>

                <div style={{ minWidth: 400 }}>
                    <Input.Group compact>
                        {/* <Select defaultValue="exhibit" style={{ width: '20%' }}>
                            <Option value="exhibit">展品</Option>
                            <Option value="exhibitor">展商</Option>
                        </Select> */}
                        <Input.Search
                            style={{ width: '80%' }}
                            placeholder="请输入关键字"
                            enterButton="搜索"
                        />
                    </Input.Group>
                </div>

            </div>

            <div style={{ marginTop: 30, marginBottom: 30, width: '100%' }}>
                {categioryCards}
            </div>

        </div>
    )
}

export default ExhibitOverview;