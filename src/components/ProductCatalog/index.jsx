import { Col, Row } from 'antd';
import React, { useMemo, useState } from 'react';
import './index.scss';

const ProductCatalog = (props) => {
    const { defatulStyle = {} } = props;

    const [categioryList, setCategioryList] = useState([
        {
            title: "齿轮箱",
            url: 'url',
        },
        {
            title: "矿山配件",
            url: 'url',
        },
        {
            title: "齿轮",
            url: 'url',
        },
        {
            title: "齿圈",
            url: 'url',
        },
        {
            title: "铸件",
            url: 'url',
        },
        {
            title: "锻件",
            url: 'url',
        },
        {
            title: "齿轮轴",
            url: 'url',
        },
        {
            title: '激振器',
            url: 'url',
        }
    ])

    const categioryCards = useMemo(() => {

        let rowIndex = -1;
        const categioryGrid = categioryList.reduce((acc, cur, index) => {
            if (index % 4 === 0) {
                acc.push([cur]);
                rowIndex += 1;
                return acc;
            } else {
                acc[rowIndex].push(cur);
                return acc;
            }
        }, []);


        const content = categioryGrid.map(row =>
            <Row justify="space-between">
                {row.map(col =>
                    <Col>
                        <div className="catalog-item catalog-item-cover">{col.title}</div>
                    </Col>
                )}
            </Row>
        );
        return content;
    }, [categioryList])

    return (
        <div
            className="product-catalog"
            style={{
                ...defatulStyle
            }}
        >
            <div className="product-catalog-body">
                {categioryCards}
            </div>
        </div>
    )
}

export default ProductCatalog;