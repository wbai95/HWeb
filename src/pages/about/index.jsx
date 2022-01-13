import { PageHeader } from 'antd';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CustomeHeader from '../../components/Header';
import { naviItems } from '../../constants/index';
import { array2clusterFlat } from '../../utils/index';

export default () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const routerPathMap = array2clusterFlat(naviItems, ['path']);
    const currentSubTitle = routerPathMap[currentPath].title;
    const navigate = useNavigate();

    return (
        <>
            <CustomeHeader />
            <PageHeader
                // className="site-page-header"
                onBack={() => null}
                title="首页"
                subTitle={currentSubTitle}
                onBack={() => navigate('/')}
            />
        </>
    )
}