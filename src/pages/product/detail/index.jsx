import React from 'react';
import './index.scss';

import { Image, Descriptions, Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { data as productData } from '../const'; 

export default (props) => {
    const { category, id, setIsDetail } = props;
    if (category === undefined || id === undefined) {
        return null;
    }

    const product = productData[category][id];

    return (
        <div className='wrap'>
            <Button
                icon={<LeftOutlined />}
                style={{ alignSelf: 'start' }}
                onClick={() => setIsDetail(false)}
            >
                返回
            </Button>
            <Image
                src={product.imageUrl}
                placeholder={true}
                preview={false}
                width={300}
                height={300}
            />
            <div className='info'>
                <div className='title'>{ product.title }</div>
                <Descriptions>
                    <Descriptions.Item>{ product.description }</Descriptions.Item>
                </Descriptions>
            </div>
            <Button>咨询产品详情</Button>
        </div>
    );
}

