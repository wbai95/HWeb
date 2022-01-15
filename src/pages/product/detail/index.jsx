import { LeftOutlined } from '@ant-design/icons';
import { Button, Descriptions, Image } from 'antd';
import React from 'react';
import { data as productData } from '../const';
import './index.scss';


const ProductDetail = (props) => {
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
                <div className='title'>{product.title}</div>
                <Descriptions>
                    <Descriptions.Item>{product.description}</Descriptions.Item>
                </Descriptions>
            </div>
            <Button>咨询产品详情</Button>
        </div>
    );
}


export default ProductDetail;