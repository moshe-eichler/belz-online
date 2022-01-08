import { useState } from "react";
import Head from 'next/head';
import NavBar from '../components/NavBar';
import MyVerticallyCenteredModal from '../components/Modal';
import SideAdvertising from '../components/SideAdvertising';
import MemberList from '../components/MemberList';
import styles from '../styles/Home.module.css';
import advPic from '../public/advertising/weber.png'

export default function Home() {
    const [query, setQuery] = useState();
    const [modalShow, setModalShow] = useState(false);
    
    function handleSubmitForm() {
        setModalShow(false);
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
                onSubmit={() => handleSubmitForm()}
            />
            {/* <SideAdvertising src={advPic}/> */}
            <MemberList filters={query}/>
        </>
    );
}