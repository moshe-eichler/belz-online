import { useState } from "react";
import Head from 'next/head';
import NavBar from '../components/NavBar';
import MyVerticallyCenteredModal from '../components/Modal';
import MemberList from '../components/MemberList';
import styles from '../styles/Home.module.css';

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
            <div className={styles.content}>
                <main>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        onSubmit={() => handleSubmitForm()}
                    />
                    <div className={styles.container}>
                        <MemberList filters={query}/>
                    </div>
                </main>
            </div>
        </>
    );
}