import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import advPic from '../public/advertising/weber.png'
// import ReCAPTCHA from 'react-google-recaptcha'
import { Button } from 'react-bootstrap';
import { useState } from 'react';


export default function MemberCard({ member }) {
    const [buttonText, setButtonText] = useState("הצג מספר טלפון");

    const changeText = async (memberId) => {
        const url = new URL('anash.vercel.app/api/phone-by-memberid');
        url.searchParams.append('memberid', memberId);

        console.log(url);

        const response = await fetch(url);
        const phone_numbers = await response.json();
        console.log(phone_numbers.message.phone_number);
        console.log(phone_numbers.message.mobile_phone);
        
        setButtonText('טלפון: ' + phone_numbers.message.phone_number + ' טלפון נייד: ' + phone_numbers.message.mobile_phone);
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
                        <span>{'כתובת: ' + member.street + ' ' + member.number}</span>
                        <br />
                        <span>{member.city + ' - ' + member.country}</span>
                        <br />
                        <span>{'מיקוד: ' + member.zip}</span>
                        <br />
                        <br />
                        <Button variant="secondary" className={'demo'} memberId={member.ID} onClick={() => changeText(member.ID)}>
                            {buttonText}
                        </Button>
                        <br />
                        <br />
                        {/* <span>{'טלפון: ' + member.phone_number}</span>
                        <br />
                        <spam>{'טלפון נייד: ' + member.mobile_phone}</spam>
                        <br /> */}
                        <span>{'חתן: ' + member.father_in_law + ' '}</span>
                        <br />
                        <span>{'בן: ' + member.father}</span>
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