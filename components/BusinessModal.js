import { Button, Modal, Container, Row, Col} from 'react-bootstrap';
import styles from '../styles/Home.module.css';

export default function BuisnessModal(props) {
    return (
        <>
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
                <form action="https://anash.vercel.app/api/contact?type=business" method="post" enctype="multipart/form-data" onSubmit={props.onHide} target="votar">
                    <Modal.Header closeButton className={styles.modalHeader}>
                        <Modal.Title id="contained-modal-title-vcenter">
                            עדכון/הוספת עסק
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="show-grid">
                        <Container>
                            <Row>
                                <Col md={6}>
                                    <input placeholder='שם העסק' name='businessName' className='form-control' required/>
                                </Col>
                                <Col md={6}>
                                <select defaultValue='תחום העסק' name='categoryName' class="form-select" aria-label="Default select example">
                                    <option disabled hidden>תחום העסק</option>
                                    <option value="finance">פיננסים</option>
                                    <option value="clothing">ביגוד</option>
                                    <option value="furniture">רהיטים</option>
                                    <option value="leisure">פנאי</option>
                                    <option value="advertising">פרסום</option>
                                </select>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                            <Col md={6}>
                                    <input placeholder='רחוב' name='address' className='form-control' required/>
                                </Col>
                                <Col md={2}>
                                    <input placeholder='מס׳' name='number' className='form-control' required/>
                                </Col>
                                <Col md={4}>
                                    <input placeholder='עיר' name='city' className='form-control' required/>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col md={6}>
                                    <input placeholder='טלפון' name='phone' className='form-control' required/>
                                </Col>
                                <Col md={6}>
                                    <input placeholder='טלפון נייד' name='cellphone' className='form-control' required/>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col md={6}>
                                    <input placeholder='שם איש קשר' name='contact' className='form-control'/>
                                </Col>
                                <Col md={6}>
                                    <input placeholder='אימייל' name='email' className='form-control'/>
                                </Col>
                                <br />
                                <br />
                                <br />
                            </Row>
                            <Row>
                                <h4 style={{textAlign: 'center'}}>
                                    העלאת לוגו של העסק
                                </h4>
                            </Row>
                            <Row>
                                <Col md={2}>
                                </Col>
                                <Col md={8}>
                                    <div class="input-group mb-3">
                                        <input name='pic' type="file" />
                                    </div>
                                </Col>
                                <Col md={2}>
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
            <iframe name="votar" style={{display: 'none'}}></iframe> {/* https://stackoverflow.com/questions/2866063/submit-form-without-page-reloading#answer-26380651 */}
        </>
     );
}