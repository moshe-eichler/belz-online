import { Button, Modal, Container, Row, Col} from 'react-bootstrap';

export default function MyVerticallyCenteredModal(props) {
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
                            <input placeholder='שם פרטי' name='firstName' class='form-control' />
                        </Col>
                        <Col md={6}>
                            <input placeholder='משפחה' name='familyName' class='form-control' />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={12}>
                            <input placeholder='כתובת כולל עיר (לדוגמה: דובר שלום 4 ירושלים)' name='familyName' class='form-control' />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={6}>
                            <input placeholder='טלפון' name='phone' class='form-control' />
                        </Col>
                        <Col md={6}>
                            <input placeholder='טלפון נייד' name='cellphone' class='form-control' />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={6}>
                            <input placeholder='בן' name='father' class='form-control' />
                        </Col>
                        <Col md={6}>
                            <input placeholder='חתן' name='fatherInLaw' class='form-control' />
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>סגור</Button>
                <Button onClick={props.onSubmit}>שלח</Button>
            </Modal.Footer>
        </Modal>
    );
}