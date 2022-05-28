import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 500,
    vertical: true,
    cssEase: "ease"
};

export default function SideAdvertising({ side }) {
    function importAll(r) {
        return r.keys().map(r);
    }
    const images = (side == 'right') ? importAll(require.context('../public/advertising/right', false, /\.(png|jpe?g|svg)$/)) : importAll(require.context('../public/advertising/left', false, /\.(png|jpe?g|svg)$/));

    return (
        <>
            <Slider {...settings}>
                {images.map((image, i) => 
                    <div key={i} className={`side-ad`}>
                        <Image key={i} src={image.default.src} layout="responsive" width={100} height={120} />
                    </div>
                )}
            </Slider>
        </>
    );
}