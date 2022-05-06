import Image from 'next/image';

export default function SideAdvertising({ side }) {
    function importAll(r) {
        return r.keys().map(r);
    }
    const images = (side == 'right') ? importAll(require.context('../public/advertising/right', false, /\.(png|jpe?g|svg)$/)) : importAll(require.context('../public/advertising/left', false, /\.(png|jpe?g|svg)$/));


    
    return(
        <>
            {images.map((image, i) => 
                <div key={i} style={{ padding: "10%", border: "1px solid black"}}>
                    <Image key={i} src={image.default.src} layout="responsive" width={100} height={120} />
                </div>
            )}
        </>
    )
}