import CustomeHeader from '@/components/Header';
import { Descriptions, Image, Menu, Space } from 'antd';
import React, { useState } from 'react';
import { data as productData } from './const';
import Detail from './detail';
import './index.scss';



const ProductPage = () => {
    const [category, setCategory] = useState(0);
    const [productId, setProductId] = useState(0);
    const [isDetail, setIsDetail] = useState(false);

    const productMenu = [
        '齿轮箱',
        '矿山配件',
        '齿轮',
        '齿圈',
        '铸件',
        '锻件',
        '齿轮轴',
        '激振器',
    ];

    const clickMenu = categoryIndex => {
        setCategory(categoryIndex);
        setIsDetail(false);
    }

    const clickProduct = (id) => {
        setProductId(id);
        setIsDetail(true);
    }

    return (
        <div className='container'>
            <CustomeHeader />
            <div className='content'>
                <Menu
                    className='menu'
                    style={{ width: 240 }}
                    mode="inline"
                    selectable={false}
                >
                    {productMenu.map((product, index) =>
                        <div className='item-wrap' onClick={() => clickMenu(index)}>
                            <Menu.Item key={'sub' + index}>
                                <div className='item'>{product}</div>
                            </Menu.Item>
                            {index + 1 !== productMenu.length && <Menu.Divider />}
                        </div>
                    )}
                </Menu>
                {
                    isDetail ? (
                        <Detail category={category} id={productId} setIsDetail={setIsDetail} />
                    ) : (
                        <Space align='start' size='large' wrap style={{ padding: 20, height: '100%' }}>
                            {productData[category]?.map((product, index) =>
                                <div
                                    key={'prodcut' + index}
                                    className='product'
                                    onClick={() => clickProduct(index)}
                                >
                                    <Image
                                        src={product.imageUrl}
                                        placeholder={true}
                                        preview={false}
                                        width={200}
                                        height={200}
                                    />
                                    <div className='info'>
                                        <Descriptions>
                                            <Descriptions.Item>{product.title}</Descriptions.Item>
                                        </Descriptions>
                                    </div>
                                </div>
                            )}
                        </Space>
                    )
                }
            </div>
        </div>
    );
}

export default ProductPage;