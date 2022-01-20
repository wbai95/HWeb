import AMapLoader from '@amap/amap-jsapi-loader';
import React, { useEffect, useRef } from 'react';
import './index.scss';

const MapContainer = (props) => {
    const { height, width } = props;
    const mapRef = useRef({});
    const mapInfo = useRef({
        viewMode: "3D",         //是否为3D地图模式
        zoom: 17,                //初始化地图级别
        center: [123.24133, 41.720842], //初始化地图中心点位置
    });


    useEffect(() => {
        AMapLoader.load({
            key: "c62f38a7a38fea64bad0c936c09c92cd", // 申请好的Web端开发者Key，首次调用 load 时必填
            version: "2.0",                          // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        }).then((AMap) => {
            mapRef.current = new AMap.Map(
                "container", //设置地图容器id
                mapInfo.current
            );
            const hvMarker = new AMap.Marker({
                position: [123.24133, 41.720842], //位置
                icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_r.png',
                offset: new AMap.Pixel(-12, -18),
            })

            mapRef.current.add(hvMarker)
        }).catch(e => {
            console.log(e);
        })
    }, [])


    return (
        <div>
            <div id="container" className="map" style={{ height, width }} />
        </div>
    );
};

export default MapContainer;