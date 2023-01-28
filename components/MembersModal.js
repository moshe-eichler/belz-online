import { Button, Modal, Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/Home.module.css';
import 'react-toastify/dist/ReactToastify.css';

export default function MembersModal(props) {
    return (
        <>
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
                <form action="https://anash.vercel.app/api/contact?type=members" method="post" encType="multipart/form-data" onSubmit={props.onHide} target="votar">
                    <Modal.Header closeButton className={styles.modalHeader}>
                        <Modal.Title id="contained-modal-title-vcenter">
                            עדכון/הוספת איש קשר
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="show-grid">
                        <Container>
                            <Row>
                                <Col md={6}>
                                    <input placeholder='שם פרטי' name='firstName' className='form-control' required />
                                </Col>
                                <Col md={6}>
                                    <input placeholder='משפחה' name='familyName' className='form-control' required />
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col md={6}>
                                    <input placeholder='רחוב' name='address' className='form-control' required />
                                </Col>
                                <Col md={2}>
                                    <input placeholder='מס׳' name='number' className='form-control' required />
                                </Col>
                                <Col md={4}>
                                    <input placeholder='עיר' name='city' className='form-control' required />
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col md={6}>
                                    <input placeholder='טלפון' name='phone' className='form-control' required />
                                </Col>
                                <Col md={6}>
                                    <input placeholder='טלפון נייד' name='cellphone' className='form-control' required />
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col md={6}>
                                    <input placeholder='בן' name='father' className='form-control' required />
                                </Col>
                                <Col md={6}>
                                    <input placeholder='חתן' name='fatherInLaw' className='form-control' required />
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer className={styles.modalHeader}>
                        <Button onClick={props.onHide} className={styles.modalButton}>סגור</Button>
                        <Button type='submit' className={styles.modalButton}>שלח</Button>
                    </Modal.Footer>
                </form>
            </Modal>
            <iframe name="votar" style={{ display: 'none' }}></iframe> {/* https://stackoverflow.com/questions/2866063/submit-form-without-page-reloading#answer-26380651 */}
        </>
    );
}