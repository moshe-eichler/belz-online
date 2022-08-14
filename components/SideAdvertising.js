import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleArrow(props) {
    const { style } = props;
    return (
        <div
            style={{ ...style, display: "none" }}
        />
    );
}
  
const settings = {
    fade: true,
    infinite: true,
    speed: 5000,
    autoplay: true,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />
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
                    <Image key={i} src={image.default.src} layout="responsive" width={100} height={124} />
                )}
            </Slider>
        </>
    );
}
