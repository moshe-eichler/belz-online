import { useState } from 'react'
import { Button, Modal, Container, Row, Col} from 'react-bootstrap';

export default function MyVerticallyCenteredModal(props) {
    const [pName, setPName] = useState('');
    const [fName, setFName] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [father, setFather] = useState('');
    const [fatherInLaw, setFatherInLaw] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Sending')
        let data = {
            pName,
            fName,
            address,
            number,
            city,
            phone,
            cellphone,
            father,
            fatherInLaw
        }

        fetch('https://anash.vercel.app/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
                setPName('');
                setAddress('');
                setNumber('');
                setCity('');
                setPhone('');
                setCellphone('');
                setFather('');
                setFatherInLaw('');
            }
        })
    }

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    עדכון/הוספת איש קשר
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Row>
                        <Col md={6}>
                            <input placeholder='שם פרטי' name='firstName' onChange={(e)=>{setPName(e.target.value)}} class='form-control' required/>
                        </Col>
                        <Col md={6}>
                            <input placeholder='משפחה' name='familyName' onChange={(e)=>{setFName(e.target.value)}} class='form-control' required/>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                    <Col md={6}>
                            <input placeholder='רחוב' name='address' onChange={(e)=>{setAddress(e.target.value)}} class='form-control' required/>
                        </Col>
                        <Col md={2}>
                            <input type='number' placeholder='מספר' name='number' onChange={(e)=>{setNumber(e.target.value)}} class='form-control' required/>
                        </Col>
                        <Col md={4}>
                            <input placeholder='עיר' name='city' onChange={(e)=>{setCity(e.target.value)}} class='form-control' required/>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={6}>
                            <input placeholder='טלפון' name='phone' onChange={(e)=>{setPhone(e.target.value)}} class='form-control' required/>
                        </Col>
                        <Col md={6}>
                            <input placeholder='טלפון נייד' name='cellphone' onChange={(e)=>{setCellphone(e.target.value)}} class='form-control' required/>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={6}>
                            <input placeholder='בן' name='father' onChange={(e)=>{setFather(e.target.value)}} class='form-control' required/>
                        </Col>
                        <Col md={6}>
                            <input placeholder='חתן' name='fatherInLaw' onChange={(e)=>{setFatherInLaw(e.target.value)}} class='form-control' required/>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={props.onHide}>סגור</Button>
            <Button onClick={(e) => {props.onHide(); handleSubmit(e)}}>שלח</Button>
                {/* <Button onClick={() => {props.onSubmit({'first_name': pName, 'family_name': fName, 'address': address, 'phone': phone, 'cellphone': cellphone, 'father': father, 'father_in_law': fatherInLaw})}}>שלח</Button> */}
            </Modal.Footer>
        </Modal>
    );
}