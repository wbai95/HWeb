import CustomeHeader from '@/components/Header';
import PageHeader from '@/components/PageHeader';
import countriesPhoneNum from '@/constants/countriesPhoneNum';
import { Button, Form, Input, message, Select } from 'antd';
import React from 'react';
import mailApi from '../../api/mail';


const { Option } = Select;

export default () => {
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        const { email, phoneNumber, type, content } = values;
        if (!email && !phoneNumber) {
            message.warning('请至少提供一个联系方式');
        }
        if (!type && !content) {
            message.warning('麻烦提供一下想咨询的内容');
        }

        await mailApi.postQuerierInfo(values)
            .then(() => message.success('已通知对应负责人, 会尽快给您回复!'))
            .catch(error => message.error("很抱歉, 请尝试其他联系方式"))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const emailValitor = (email) => {
        if (email) {
            return /^[\w\-]+@[a-zA-Z\d\-]+(\.[a-zA-Z]{2,8}){1,2}$/ig.test(email) ?
                Promise.resolve() : Promise.reject(new Error('请提供有效的邮箱'));
        } else {
            return Promise.resolve()
        }
    }

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 120 }} optionLabelProp="label">
                {countriesPhoneNum.map(([country, num]) =>
                    <Option value={num} label={num} key={country}>{country}</Option>
                )}
            </Select>
        </Form.Item>
    );

    return (
        <>
            <CustomeHeader />
            <PageHeader />
            <div style={{ padding: '0 30px 0 30px' }}>
                <Form
                    form={form}
                    name="connectus"
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    style={{ width: 400 }}
                >
                    <Form.Item
                        label="您的姓名"
                        name="username"
                        rules={[{ required: true, message: '请问如何称呼您呢?' }]}
                    >
                        <Input placeholder="请输入您的姓名" />
                    </Form.Item>

                    <Form.Item
                        label="您的邮箱"
                        name="email"
                        rules={[
                            {
                                validator: (_, value) => emailValitor(value),
                            },
                        ]}
                    >
                        <Input
                            placeholder="请输入您的邮箱"
                        />
                    </Form.Item>

                    <Form.Item label="您的电话" name="phoneNumber">
                        <Input addonBefore={prefixSelector} placeholder="请输入您的手机号" />
                    </Form.Item>

                    <Form.Item name="type" label="产品类型">
                        <Select
                            placeholder="请选择想质询的类型"
                            mode="multiple"
                            allowClear
                        >
                            <Option value="gear">齿轮齿圈</Option>
                            <Option value="gearbox">齿轮箱</Option>
                            <Option value="toothedShaft">齿轮轴</Option>
                            <Option value="bearing">轴承</Option>
                            <Option value="other">其他</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="content" label="内容">
                        <Input.TextArea placeholder="请输入您想质询的内容" rows={3} />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            提交留言
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
}