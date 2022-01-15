import CustomeHeader from '@/components/Header';
import PageHeader from '@/components/PageHeader';
import { introduction } from '@/constants/introduction';
import { MailOutlined, MobileOutlined, PhoneOutlined, SendOutlined, UserOutlined } from '@ant-design/icons';
import { Space, Tabs, Typography } from 'antd';
import React, { useMemo } from 'react';


const { Paragraph } = Typography;
const { TabPane } = Tabs;

const AboutPage = () => {
    const paragraphStyle = {
        fontSize: 18, textIndent: '2em'
    };

    const leftSidebar = useMemo(() => {
        const circleSytle = {
            color: 'white',
            width: '30px',
            lineHeight: '30px',
            backgroundColor: 'rgb(238,69,7)',
            borderRadius: '10px'
        };


        const infoList = [
            {
                icon: <UserOutlined style={circleSytle} />,
                title: "联系人:",
                content: "王经理",
            },
            {
                icon: <PhoneOutlined style={circleSytle} />,
                title: "电话:",
                content: "+86-024-25175679",
            },
            {
                icon: <MobileOutlined style={circleSytle} />,
                title: "手机:",
                content: "15140133188",
            },
            {
                icon: <MailOutlined style={circleSytle} />,
                title: "邮箱:",
                content: "hanweijx01@163.com",
            },
            {
                icon: <SendOutlined style={circleSytle} />,
                title: "地址:",
                content: "沈阳市铁西区浑河十五街17号汉威机械",
            },
        ]

        const content = (
            <Space direction="vertical" size='large'>
                {infoList.map(info => (
                    <Space key={info.title}>
                        {info.icon}
                        <div style={{ width: '50px' }}>{info.title}</div>
                        <div style={{ wordBreak: 'break-all' }}>{info.content}</div>
                    </Space>
                ))}
            </Space>
        );

        return content;
    }, [])


    return (
        <>
            <CustomeHeader />
            <PageHeader />

            <div style={{ padding: '0 30px 0 30px' }}>
                <div style={{ display: 'flex' }}>
                    <div style={{ width: '240px', flexShrink: 0, marginRight: 30 }}>
                        <div
                            style={{
                                fontSize: 16,
                                fontFamily: 'times',
                                margin: '30px 0 20px 0'
                            }}
                        >
                            <strong>联系我们</strong>
                        </div>
                        {leftSidebar}
                    </div>
                    <div>
                        <Tabs defaultActiveKey="1">
                            {introduction.map(intro => {
                                const { lang, paragraphes } = intro;
                                return (
                                    <TabPane tab={lang} key={lang}>
                                        {paragraphes.map(para =>
                                            <Paragraph key={para} style={paragraphStyle}>{para}</Paragraph>
                                        )}
                                    </TabPane>
                                );
                            })}
                        </Tabs>
                    </div>
                </div>

            </div>
        </>
    )
};

export default AboutPage;