import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import advPic from '../public/advertising/weber.png'
// import ReCAPTCHA from 'react-google-recaptcha'
import { Button } from 'react-bootstrap';
import { useState } from 'react';


export default function MemberCard({ member }) {
    const [phone_number, setPhoneNumber] = useState("הצג מספרי טלפון");
    const [mobile_phone, setMobilePhone] = useState("");

    const changeText = async (memberId) => {
        const url = new URL('http://localhost:3000/api/phone-by-memberid');
        url.searchParams.append('memberid', memberId);

        const response = await fetch(url);
        const phone_numbers = await response.json();
        
        setPhoneNumber('בית: ' + phone_numbers.message.phone_number);
        setMobilePhone('נייד: ' + phone_numbers.message.mobile_phone);
    }
    
    if (member.type) {
        return (
            <Image
                height='300px'
                src={advPic}
            />

        );
    } else {
        return (
            <Card className={styles.card}>
                <CardBody className='bg-light'>
                    <CardTitle>{member.title + ' ' +  member.first_name + ' ' + member.family_name}</CardTitle>
                    <CardText>
                        <span>{member.street + ' ' + member.number}</span>
                        <br />
                        <span>{member.city + ' - ' + member.country}</span>
                        <br />
                        <span>{'מיקוד: ' + member.zip}</span>
                        <br />
                        <br />
                        <Button variant="secondary" className={'demo'} memberId={member.ID} onClick={() => changeText(member.ID)}>
                            {phone_number}
                            <br />
                            {mobile_phone}
                        </Button>
                        <br />
                        <br />
                        {/* <span>{'טלפון: ' + member.phone_number}</span>
                        <br />
                        <spam>{'טלפון נייד: ' + member.mobile_phone}</spam>
                        <br /> */}
                        <span>{'בן: ' + member.father}</span>
                        <br />
                        <span>{'חתן: ' + member.father_in_law + ' '}</span>
                        <br />
                        {/* <ReCAPTCHA size="small" sitekey="6LdnQBYfAAAAAO0dCa0DMb6E0wzkUn5ou3mDruAo" /> */}
                    </CardText>
                    {/* <CardText>
                        <small className="text-muted">עדכון אחרון לפני 3 חודשים</small>
                    </CardText> */}
                </CardBody>
            </Card>
        );
    }
}