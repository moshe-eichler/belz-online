import { textAlign } from '@material-ui/system';
import { useState } from 'react'
import { Button, Modal, Container, Row, Col} from 'react-bootstrap';
import styles from '../styles/Home.module.css';

export default function BuisnessModal(props) {
    const [bName, setBName] = useState('');
    const [cName, setCName] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Sending')
        
        let data = {
            bName,
            cName,
            address,
            number,
            city,
            phone,
            cellphone,
            contact,
            email
        }
        
        // const url = 'https://anash.vercel.app/api/contact'
        const url = 'http://localhost:3000/api/contact'
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'type': 'business', 'data': data })
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
                setBName('');
                setCName('');
                setAddress('');
                setNumber('');
                setCity('');
                setPhone('');
                setCellphone('');
                setContact('');
                setEmail('');
                setPic('');
            }
        })
    }

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton className={styles.modalHeader}>
                <Modal.Title id="contained-modal-title-vcenter">
                    עדכון/הוספת עסק
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Row>
                        <Col md={6}>
                            <input placeholder='שם העסק' name='businessName' onChange={(e)=>{setBName(e.target.value)}} className='form-control' required/>
                        </Col>
                        <Col md={6}>
                        <select defaultValue='תחום העסק' name='categoryName' onChange={(e)=>{setCName(e.target.value)}} class="form-select" aria-label="Default select example">
                        {/* <select placeholder='תחום העסק' name='categoryName' onChange={(e)=>{setCName(e.target.value)}} className='form-control'> */}
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
                            <input placeholder='רחוב' name='address' onChange={(e)=>{setAddress(e.target.value)}} className='form-control' required/>
                        </Col>
                        <Col md={2}>
                            <input placeholder='מס׳' name='number' onChange={(e)=>{setNumber(e.target.value)}} className='form-control' required/>
                        </Col>
                        <Col md={4}>
                            <input placeholder='עיר' name='city' onChange={(e)=>{setCity(e.target.value)}} className='form-control' required/>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={6}>
                            <input placeholder='טלפון' name='phone' onChange={(e)=>{setPhone(e.target.value)}} className='form-control' required/>
                        </Col>
                        <Col md={6}>
                            <input placeholder='טלפון נייד' name='cellphone' onChange={(e)=>{setCellphone(e.target.value)}} className='form-control' required/>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={6}>
                            <input placeholder='שם איש קשר' name='contact' onChange={(e)=>{setContact(e.target.value)}} className='form-control'/>
                        </Col>
                        <Col md={6}>
                            <input placeholder='אימייל' name='email' onChange={(e)=>{setEmail(e.target.value)}} className='form-control'/>
                        </Col>
                    </Row>
                    {/* <Row>
                        <h4 style={{textAlign: 'center'}}>
                            העלאת לוגו של העסק
                        </h4>
                    </Row>
                    <Row>
                    <Col md={2}>
                    </Col>
                    <Col md={8}>
                        <div class="input-group mb-3"> */}
                        {/* <input type="file" onChange={(e)=>{setPic(URL.createObjectURL(e.target.files[0]))}} class="form-control"/> */}
                        {/* <input onChange={(e)=>{setPic(e.target.files)}} type="file" />
                        </div>
                    </Col>
                    <Col md={2}>
                    </Col>
                    </Row> */}
                </Container>
            </Modal.Body>
            <Modal.Footer className={styles.modalHeader}>
                <Button onClick={props.onHide} className={styles.modalButton}>סגור</Button>
                <Button onClick={(e) => {props.onHide(); handleSubmit(e)}} className={styles.modalButton}>שלח</Button>
            </Modal.Footer>
        </Modal>
    );
}