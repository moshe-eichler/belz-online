import { useState } from "react";
import Head from 'next/head';
import NavBar from '../components/NavBar';
import MyVerticallyCenteredModal from '../components/Modal';
import SideAdvertising from '../components/SideAdvertising';
import Content from '../components/Content';
// import styles from '../styles/globals.css';
import advPicWeber from '../public/advertising/right/weber.png'
// import advPicAvatChesed from '../public/advertising/avat_chesed.png'
// import advPicAlef from '../public/advertising/alef_adv.png'
// import advPicNoimanTours from '../public/advertising/noiman_tours.png'
// import advPicNoimanStam from '../public/advertising/noiman_stam.png'
// import advPicMercez from '../public/advertising/mercez.png'
// import styles from '../styles/Home.module.css';
import css from 'styled-jsx/css'
import Image from 'next/image'


export default function Home(props) {
    const [query, setQuery] = useState();
    const [modalShow, setModalShow] = useState(false);
    const adStyle = {
        width: '15%',
        position: 'fixed',
        margin: '1.5%'
    }
    const contentStyle = {
        width: '70%',
        margin: 'auto'
    }

    const openAdLink = (link) => {
        window.open(link, '_blank')
    }

    return (
        <>
            <Head>
                <title>רשימת אנ״ש</title>
            </Head>
            <NavBar queryFunction={setQuery} modalFunction={setModalShow}/>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            <div className={`sideAdRight`}>
                <SideAdvertising side={'right'} />
            </div>
            <div className={`sideAdLeft`}>
                <SideAdvertising side={'left'} />
            </div>
            {/* <div className={`ad`} onClick={() => openAdLink('mailto:ww50097@gmail.com?subject=%D7%99%D7%99%D7%A2%D7%95%D7%A5%20%D7%9E%D7%A9%D7%A0%D7%AA%D7%90%D7%95%D7%AA&body=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%A8%D7%91!%0D%0A%D7%90%D7%A0%D7%99%20%D7%A4%D7%95%D7%A0%D7%94%20%D7%90%D7%9C%D7%99%D7%9A%20%D7%91%D7%A7%D7%A9%D7%A8%20%D7%9C%D7%99%D7%99%D7%A2%D7%95%D7%A5%20%D7%91%D7%9C%D7%A7%D7%99%D7%97%D7%AA%20%D7%9E%D7%A9%D7%9B%D7%A0%D7%AA%D7%90%0D%0A%D7%90%D7%A0%D7%99%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%99%D7%95%D7%AA%D7%A8%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%91%D7%98%D7%9C%D7%A4%D7%95%D7%9F%3A')}>
                <Image 
                    src={advPicWeber}
                    width={230}
                    height={250}
                    layout={`fixed`}
                />
            </div>
            <div className={`ad1`} onClick={() => openAdLink('https://www.ahavat-chesed.org/')}>
                <Image 
                    src={advPicAvatChesed}
                    width={230}
                    height={250}
                    layout={`fixed`}
                />
            </div>
            <div className={`ad2`} onClick={() => openAdLink('https://alef-adv.com/')}>
                <Image 
                    src={advPicAlef}
                    width={230}
                    height={250}
                    layout={`fixed`}
                />
            </div>
            <div className={`ad3`}  onClick={() => openAdLink('mailto:naftali@lachish.co.il?subject=%D7%98%D7%99%D7%A1%D7%94&body=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%A8%D7%91!%0D%0A%D7%90%D7%A0%D7%99%20%D7%A4%D7%95%D7%A0%D7%94%20%D7%90%D7%9C%D7%99%D7%9A%20%D7%91%D7%A7%D7%A9%D7%A8%20%D7%9C%D7%98%D7%99%D7%A1%D7%94%0D%0A%D7%90%D7%A0%D7%99%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%99%D7%95%D7%AA%D7%A8%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%91%D7%98%D7%9C%D7%A4%D7%95%D7%9F%3A')}>
                <Image 
                    src={advPicNoimanTours}
                    width={230}
                    height={250}
                    layout={`fixed`}
                />
            </div>            
            <div className={`ad4`} onClick={() => openAdLink('mailto:na54388@gmail.com?subject=%D7%A1%D7%95%D7%A4%D7%A8%20%D7%A1%D7%AA%D7%B4%D7%9D&body=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%A8%D7%91!%0D%0A%D7%90%D7%A0%D7%99%20%D7%A4%D7%95%D7%A0%D7%94%20%D7%90%D7%9C%D7%99%D7%9A%20%D7%91%D7%A7%D7%A9%D7%A8%20%D7%9C%D7%A1%D7%AA%D7%B4%D7%9D%0D%0A%D7%90%D7%A0%D7%99%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%99%D7%95%D7%AA%D7%A8%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%91%D7%98%D7%9C%D7%A4%D7%95%D7%9F%3A')}>
                <Image 
                    src={advPicNoimanStam}
                    width={230}
                    height={250}
                    layout={`fixed`}
                />
            </div>            
            <div className={`ad5`} onClick={() => openAdLink('https://belzkupa.org.il/')}>
                <Image 
                    src={advPicMercez}
                    width={230}
                    height={250}
                    layout={`fixed`}
                />
            </div> */}
            <div className="content">
                <Content data={props.members} filters={query} modalFunction={setModalShow}/>
            </div>
        </>
    );
}

export const getStaticProps = async () => {
    // console.log(process.env);
    const url = `https://anash.vercel.app/api/members?limit=40`
    const url = `http://localhost:3000/api/members?limit=40`
    const data = await fetch(url)
        .then((response) => response.json());
    
    const members = data.message
    
    return {
        props: { members }
    };
};
  