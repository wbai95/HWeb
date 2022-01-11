import { Carousel } from 'antd';
import './index.scss';

const TopCarousel = () => {

    function importAll(r) {
        return r.keys().map(item => r(item)).map(item => item.default);
      }
      
    const images = importAll(require.context('./img/', false, /\.(png|jpe?g|svg)$/));
    const content = [...images];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        pauseOnHover: true
    };

    return (
        <Carousel {...settings}>
            {content.map((src, index) =>
                <div
                    id={'container' + index}
                    className='container'
                >
                    <img
                        className='content'
                        src={ src }
                        alt="context"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            )}
        </Carousel>
    );
};

export { TopCarousel };
