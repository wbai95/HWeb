
const data = [
    [
        {
            imageUrl: 'https://hweb.obs.cn-north-4.myhuaweicloud.com:443/%E5%9B%BE%E7%89%87/%E5%87%8F%E9%80%9F%E6%9C%BA%20%E9%BD%BF%E8%BD%AE%E7%AE%B1/%E4%B8%89%E7%8E%AF%E5%87%8F%E9%80%9F%E6%9C%BA1.jpg?AccessKeyId=BZGP30Q496EJITOUYBU5&Expires=1673147258&Signature=wSYilF%2Bv9ICSHSF0Pe6lpB0NL2k%3D',
            title: '三环减速机',
            price: '1',
        },
        {
            imageUrl: 'https://hweb.obs.cn-north-4.myhuaweicloud.com:443/%E5%9B%BE%E7%89%87/%E5%87%8F%E9%80%9F%E6%9C%BA%20%E9%BD%BF%E8%BD%AE%E7%AE%B1/%E6%96%9C%E9%BD%BF%E8%BD%AE%E8%9C%97%E8%BD%AE%E8%9C%97%E6%9D%86%E5%87%8F%E9%80%9F%E6%9C%BA.jpg?AccessKeyId=BZGP30Q496EJITOUYBU5&Expires=1673147315&Signature=eqLxByaXVwQ/O7AsJSh43eU/3cI%3D',
            title: '斜齿轮蜗轮蜗杆减速机',
            price: '2',
        },
        {
            imageUrl: 'https://hweb.obs.cn-north-4.myhuaweicloud.com:443/%E5%9B%BE%E7%89%87/%E5%87%8F%E9%80%9F%E6%9C%BA%20%E9%BD%BF%E8%BD%AE%E7%AE%B1/%E8%88%B9%E7%94%A8%E9%BD%BF%E8%BD%AE%E7%AE%B1.jpg?AccessKeyId=BZGP30Q496EJITOUYBU5&Expires=1673147522&Signature=Qn7R65r4H%2BsaBCfzFvWL054ij3g%3D',
            title: '船用齿轮箱',
            price: '3',
        },
        {
            imageUrl: 'https://hweb.obs.cn-north-4.myhuaweicloud.com:443/%E5%9B%BE%E7%89%87/%E5%87%8F%E9%80%9F%E6%9C%BA%20%E9%BD%BF%E8%BD%AE%E7%AE%B1/%E9%92%A2%E5%8E%82%E5%AE%9A%E5%88%B6%E9%BD%BF%E8%BD%AE%E7%AE%B1.jpg?AccessKeyId=BZGP30Q496EJITOUYBU5&Expires=1673147579&Signature=1fhtWb5dQCt%2BKNFG4qntmtBcTpU%3D',
            title: '钢厂定制齿轮箱',
            price: '4',
        },
        {
            imageUrl: 'https://hweb.obs.cn-north-4.myhuaweicloud.com:443/%E5%9B%BE%E7%89%87/%E5%87%8F%E9%80%9F%E6%9C%BA%20%E9%BD%BF%E8%BD%AE%E7%AE%B1/%E9%A3%8E%E5%8A%9B%E5%8F%91%E7%94%B5%E6%9C%BA%E7%BB%84.jpg?AccessKeyId=BZGP30Q496EJITOUYBU5&Expires=1673147647&Signature=D2zbRKnf2Xhu56fp7BA7NKcqqnE%3D',
            title: '风力发电机组',
            price: '5',
        },
    ],
    [
        {
            imageUrl: 'https://hweb.obs.cn-north-4.myhuaweicloud.com:443/%E5%9B%BE%E7%89%87/%E7%9F%BF%E5%B1%B1%E9%85%8D%E4%BB%B6/%E4%B8%AD%E7%A9%BA%E8%BD%B4-%E7%AB%AF%E7%9B%96%E5%BA%94%E7%94%A8.jpg?AccessKeyId=BZGP30Q496EJITOUYBU5&Expires=1673161051&Signature=8RtxUNYEWJ8TVtmLhWcUJ/KppjY%3D',
            title: '中空轴-端盖应用',
            price: '1',
        },
        {
            imageUrl: 'https://hweb.obs.cn-north-4.myhuaweicloud.com:443/%E5%9B%BE%E7%89%87/%E7%9F%BF%E5%B1%B1%E9%85%8D%E4%BB%B6/%E6%89%98%E8%BD%AE1.jpg?AccessKeyId=BZGP30Q496EJITOUYBU5&Expires=1673161346&Signature=bAR6kZN217dOmM1GeJeL%2Bx7CxRM%3D',
            title: '托轮',
            price: '2',
        },
        {
            imageUrl: 'https://hweb.obs.cn-north-4.myhuaweicloud.com:443/%E5%9B%BE%E7%89%87/%E7%9F%BF%E5%B1%B1%E9%85%8D%E4%BB%B6/%E7%9F%BF%E5%B1%B1%E9%85%8D%E4%BB%B6-%E5%88%86%E6%B5%81%E7%9B%98-%E9%9B%B7%E8%92%99%E7%A3%A8%E9%A3%8E%E9%81%93.jpg?AccessKeyId=BZGP30Q496EJITOUYBU5&Expires=1673161404&Signature=7RmPqgns9/IA98ycO0xPt8O0Hhk%3D',
            title: '分流盘',
            price: '3',
        },
        {
            imageUrl: 'https://hweb.obs.cn-north-4.myhuaweicloud.com:443/%E5%9B%BE%E7%89%87/%E7%9F%BF%E5%B1%B1%E9%85%8D%E4%BB%B6/%E7%A3%A8%E8%BE%8A2.jpg?AccessKeyId=BZGP30Q496EJITOUYBU5&Expires=1673161467&Signature=jLktFBt13koyi4UyyeaQBUYh/mQ%3D',
            title: '磨辊',
            price: '4',
        },
        {
            imageUrl: 'https://hweb.obs.cn-north-4.myhuaweicloud.com:443/%E5%9B%BE%E7%89%87/%E7%9F%BF%E5%B1%B1%E9%85%8D%E4%BB%B6/%E9%9B%B7%E8%92%99%E7%A3%A81.jpg?AccessKeyId=BZGP30Q496EJITOUYBU5&Expires=1673161514&Signature=KoZrKUlzlZUioCW6T0mN41oaIQk%3D',
            title: '雷蒙磨',
            price: '5',
        },
    ],
    [
        {
            imageUrl: 'https://hweb.obs.cn-north-4.myhuaweicloud.com:443/%E5%9B%BE%E7%89%87/%E9%BD%BF%E8%BD%AE/%E4%BA%A7%E5%93%81-%E4%BA%BA%E5%AD%97%E9%BD%BF%E5%A4%A7%E9%BD%BF%E8%BD%AE.jpg?AccessKeyId=BZGP30Q496EJITOUYBU5&Expires=1673161807&Signature=6VSgP4EfrdJA8OKS00h34%2BqrOoQ%3D',
            title: '人字齿大齿轮',
            price: '1',
        },
        {
            imageUrl: 'https://hweb.obs.cn-north-4.myhuaweicloud.com:443/%E5%9B%BE%E7%89%87/%E9%BD%BF%E8%BD%AE/%E4%BC%A0%E5%8A%A8%E5%A4%A7%E9%93%BE%E8%BD%AE.jpg?AccessKeyId=BZGP30Q496EJITOUYBU5&Expires=1673162116&Signature=bsvyYwf92yhfh69CUSaCUWdAias%3D',
            title: '传动大链轮',
            price: '2',
        },
        {
            imageUrl: 'https://hweb.obs.cn-north-4.myhuaweicloud.com:443/%E5%9B%BE%E7%89%87/%E9%BD%BF%E8%BD%AE/%E5%87%8F%E9%80%9F%E6%9C%BA%E9%BD%BF%E8%BD%AE2.jpg?AccessKeyId=BZGP30Q496EJITOUYBU5&Expires=1673162174&Signature=EPmD3eHoj5KHk24eviP5xh27Oo4%3D',
            title: '减速机齿轮',
            price: '3',
        },
        {
            imageUrl: 'https://hweb.obs.cn-north-4.myhuaweicloud.com:443/%E5%9B%BE%E7%89%87/%E9%BD%BF%E8%BD%AE/%E8%A1%8C%E6%98%9F%E9%BD%BF%E8%BD%AE1.jpg?AccessKeyId=BZGP30Q496EJITOUYBU5&Expires=1673162275&Signature=TVcpOoIDCrZETbfk9l8bh/2OKso%3D',
            title: '行星齿轮',
            price: '4',
        },
        {
            imageUrl: 'https://hweb.obs.cn-north-4.myhuaweicloud.com:443/%E5%9B%BE%E7%89%87/%E9%BD%BF%E8%BD%AE/%E5%8F%8C%E6%8E%92%E9%BD%BF%E8%BD%AE1.jpg?AccessKeyId=BZGP30Q496EJITOUYBU5&Expires=1673162341&Signature=lOM1qjQDksQR2MGtYaDZ4IuLjdc%3D',
            title: '双排齿轮',
            price: '5',
        },
    ],
    [
        {
            imageUrl: 'https://hweb.obs.cn-north-4.myhuaweicloud.com:443/%E5%9B%BE%E7%89%87/%E9%BD%BF%E5%9C%88/%E4%BA%A7%E5%93%81--%E9%AB%98%E7%B2%BE%E5%BA%A6%E5%A4%A7%E9%BD%BF%E5%9C%88.JPG?AccessKeyId=BZGP30Q496EJITOUYBU5&Expires=1673162875&Signature=A6lUO0676o1plu53kjlU/VQlWuU%3D',
            title: '高精度大齿圈',
            price: '1',
        },
        {
            imageUrl: 'https://hweb.obs.cn-north-4.myhuaweicloud.com:443/%E5%9B%BE%E7%89%87/%E9%BD%BF%E5%9C%88/%E5%86%85%E9%BD%BF%E5%9C%881.jpg?AccessKeyId=BZGP30Q496EJITOUYBU5&Expires=1673163044&Signature=hzlgeVz2PWpRIH0vgftnzw1JFcY%3D',
            title: '内齿圈',
            price: '2',
        },
        {
            imageUrl: 'https://hweb.obs.cn-north-4.myhuaweicloud.com:443/%E5%9B%BE%E7%89%87/%E9%BD%BF%E5%9C%88/%E5%A4%A7%E9%BD%BF%E5%9C%881.jpg?AccessKeyId=BZGP30Q496EJITOUYBU5&Expires=1673163215&Signature=NV5a1MNURMmI1wtugrUaVz35A7M%3D',
            title: '大齿圈',
            price: '3',
        },
        {
            imageUrl: 'https://hweb.obs.cn-north-4.myhuaweicloud.com:443/%E5%9B%BE%E7%89%87/%E9%BD%BF%E5%9C%88/%E9%A3%9E%E8%BD%AE%E9%BD%BF%E5%9C%881.jpg?AccessKeyId=BZGP30Q496EJITOUYBU5&Expires=1673163264&Signature=NO/M4cIrVTZZGrf6ca8dZFqIPTE%3D',
            title: '飞轮齿圈',
            price: '4',
        },
    ],
    [
        {
            imageUrl: 'https://hweb.obs.cn-north-4.myhuaweicloud.com:443/%E5%9B%BE%E7%89%87/%E9%93%B8%E4%BB%B6%E7%85%A7%E7%89%87/%E9%93%B8%E9%93%81/%E7%81%B0%E5%8F%A3%E9%93%B8%E9%93%81-5.jpg?AccessKeyId=BZGP30Q496EJITOUYBU5&Expires=1673164579&Signature=FvqVQmLXOzMEELmOGdlsGCJ/e38%3D',
            title: '灰口铸铁',
            price: '1',
        },
        {
            imageUrl: 'https://hweb.obs.cn-north-4.myhuaweicloud.com:443/%E5%9B%BE%E7%89%87/%E9%93%B8%E4%BB%B6%E7%85%A7%E7%89%87/%E9%93%B8%E9%93%81/%E9%93%B8%E9%92%A2%E5%9B%BE%E7%89%87%EF%BC%8D/%E9%93%B8%E9%92%A2%E5%9B%BE%E7%89%87%EF%BC%8D/P1140049.JPG?AccessKeyId=BZGP30Q496EJITOUYBU5&Expires=1673164664&Signature=%2BvC0J3yL%2BPeGxR/QXqNAKUzhtkI%3D',
            title: '铸钢',
            price: '2',
        },
    ],
    [
        {
            imageUrl: 'https://hweb.obs.cn-north-4.myhuaweicloud.com:443/%E5%9B%BE%E7%89%87/%E9%94%BB%E9%80%A0/%E5%85%AD%E6%96%B9%E8%BD%B4.jpg?AccessKeyId=BZGP30Q496EJITOUYBU5&Expires=1673164803&Signature=qLrXuljkbo4wtNr/qau8LMy21ps%3D',
            title: '六方轴',
            price: '1',
        },
        {
            imageUrl: 'https://hweb.obs.cn-north-4.myhuaweicloud.com:443/%E5%9B%BE%E7%89%87/%E9%94%BB%E9%80%A0/%E5%86%B7%E8%BD%A7%E8%BE%8A.jpg?AccessKeyId=BZGP30Q496EJITOUYBU5&Expires=1673164836&Signature=P0l5U6Gu2LO0gK4cG3AOFrIUUUE%3D',
            title: '冷轧辊',
            price: '2',
        },
        {
            imageUrl: 'https://hweb.obs.cn-north-4.myhuaweicloud.com:443/%E5%9B%BE%E7%89%87/%E9%94%BB%E9%80%A0/%E5%8F%B0%E9%98%B6%E8%BD%B4.jpg?AccessKeyId=BZGP30Q496EJITOUYBU5&Expires=1673164876&Signature=o3rF95gGuCFepYtijVFgEAymXaA%3D',
            title: '台阶轴',
            price: '3',
        },
        {
            imageUrl: 'https://hweb.obs.cn-north-4.myhuaweicloud.com:443/%E5%9B%BE%E7%89%87/%E9%94%BB%E9%80%A0/%E5%BC%82%E5%BD%A2%E4%BB%B6.jpg?AccessKeyId=BZGP30Q496EJITOUYBU5&Expires=1673164917&Signature=nBwEvrW3F4Z45PeUrgOe2vG0uzU%3D',
            title: '异形件',
            price: '4',
        },
        {
            imageUrl: 'https://hweb.obs.cn-north-4.myhuaweicloud.com:443/%E5%9B%BE%E7%89%87/%E9%94%BB%E9%80%A0/%E6%96%B9%E8%BD%B4.jpg?AccessKeyId=BZGP30Q496EJITOUYBU5&Expires=1673164995&Signature=rlSYDhjfN%2BrUTAGCVKaeMbHWjZw%3D',
            title: '方轴',
            price: '5',
        },
        {
            imageUrl: 'https://hweb.obs.cn-north-4.myhuaweicloud.com:443/%E5%9B%BE%E7%89%87/%E9%94%BB%E9%80%A0/%E8%BD%B4%E6%89%BF%E5%BA%A7.jpg?AccessKeyId=BZGP30Q496EJITOUYBU5&Expires=1673165053&Signature=6wwldesLNj7xcX0u8MOytufKFKY%3D',
            title: '轴承座',
            price: '6',
        },
    ],
    [
        {
            imageUrl: 'https://hweb.obs.cn-north-4.myhuaweicloud.com:443/%E5%9B%BE%E7%89%87/%E9%BD%BF%E8%BD%AE%E8%BD%B4/%E4%BA%A7%E5%93%81-%E7%A1%AC%E9%BD%BF%E9%9D%A2%E4%BA%BA%E5%AD%97%E9%BD%BF%E9%BD%BF%E8%BD%AE%E8%BD%B4.jpg?AccessKeyId=BZGP30Q496EJITOUYBU5&Expires=1673165533&Signature=z5zN8DrfE1zOv29hzVQvWPyRI6c%3D',
            title: '硬齿面人字齿齿轮轴',
            price: '1',
        },
        {
            imageUrl: 'https://hweb.obs.cn-north-4.myhuaweicloud.com:443/%E5%9B%BE%E7%89%87/%E9%BD%BF%E8%BD%AE%E8%BD%B4/%E7%A0%B4%E7%A2%8E%E6%9C%BA%E8%BD%B41.jpg?AccessKeyId=BZGP30Q496EJITOUYBU5&Expires=1673165608&Signature=jY5fga/RXJ%2BQdwiRHdW5WkfKVYA%3D',
            title: '破碎机轴',
            price: '2',
        },
    ],
    [
        {
            imageUrl: 'https://hweb.obs.cn-north-4.myhuaweicloud.com:443/%E5%9B%BE%E7%89%87/%E6%BF%80%E6%8C%AF%E5%99%A8/%E5%AF%86%E5%B0%81%E5%A5%97.jpg?AccessKeyId=BZGP30Q496EJITOUYBU5&Expires=1673165866&Signature=3JvuKvQKVd30RYiqZvSlleEovT0%3D',
            title: '密封套',
            price: '1',
        },
        {
            imageUrl: 'https://hweb.obs.cn-north-4.myhuaweicloud.com:443/%E5%9B%BE%E7%89%87/%E6%BF%80%E6%8C%AF%E5%99%A8/%E6%8C%A1%E6%B2%B9%E7%9B%98.jpg?AccessKeyId=BZGP30Q496EJITOUYBU5&Expires=1673165919&Signature=O13BoifNF4ipyR168r5HQEfn%2BXs%3D',
            title: '挡油盘',
            price: '2',
        },
    ],
];

export { data };
