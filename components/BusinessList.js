import React, { useState } from "react";
import { Button, Modal} from 'react-bootstrap';
import styles from '../styles/Home.module.css';

export default function Business( { modalFunction } ) {

    // const [members, setMembers] = useState(data);
    // const [callNumber, setCallNumber] = useState(0);
    // const [, setMoreResults] = useState(true);
    const [modal, setModal] = useState(true);

    // const getMembers = async () => { 
    //     const url = new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/api/members`);
    //     url.searchParams.append('limit', 40);
    //     url.searchParams.append('skip', members.length);
    //     if (filters) url.searchParams.append('querySearch', filters);

    //     const response = await fetch(url);
    //     const json_response = await response.json();

    //     return json_response;
    // }

    // const infinite = () => {
    //     setCallNumber((callNumber) => callNumber + 1)
    // }

    // useEffect( async () => {
    //     if (!callNumber & !filters) return; // To disable calling in the first render.

    //     setMoreResults(true);
    //     setMembers([]); // This will affect only the next render, The InfiniteScroll component will call the infinite function.
    //     if (members.length <= 40) infinite(); // In this case InfiniteScroll component will not call the infinite function, So we need to call it manuaaly.
    // }, [filters])

    // useEffect( async () => {
    //     if (!callNumber) return; // To disable calling in the first render.

    //     const result = await getMembers();
    //     const newMembers = result['message'];

    //     if (newMembers.length < 40) setMoreResults(false);
    //     setMembers(currentMembers => ([...currentMembers, ...newMembers]))
    // }, [callNumber])

    return (
        <>
            <Modal show={modal} onHide={setModal} centered>
                <Modal.Header className={styles.modalHeader} closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    האתר בשלבי פיתוח מתקדמים ובקרוב נפרסם כאן עסקים מאנ״ש
                    <br />
                    כרגע אתה יכול לפרסם את העסק שלך וזה לגמרי בחינם
                    <br />
                    למילוי פרטי העסק שלך לחץ <Button className={styles.linkForm} variant="link" onClick={() => {setModal(false), modalFunction(true)}}>כאן</Button>
                </Modal.Body>
                <Modal.Footer className={styles.modalHeader}>
                    <Button className={styles.modalButton} onClick={() => setModal(false)}>סגור</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
