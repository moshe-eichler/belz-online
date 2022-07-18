import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 100,
    vertical: true,
    cssEase: "linear"
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
                    <Image key={i} src={image.default.src} layout="responsive" width={100} height={120} />
                )}
            </Slider>
        </>
    );
}