import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import advPic from '../public/advertising/weber.png'
import { Button } from 'react-bootstrap';
import { useState } from 'react';


export default function MemberCard({ member, modalFunction}) {
    const [phone_number, setPhoneNumber] = useState("הצג מספרי טלפון");
    const [mobile_phone, setMobilePhone] = useState("");
    const [more_info, setMoreInfo] = useState("");

    const checkEmptyValues = () => {
        const important_info = [member.family_name, member.street, member.number, member.city, member.country, member.phone_number, member.mobile_phone]
        if (important_info.includes(undefined)) {
            // setMoreInfo('להשלמת פרטים לחץ כאן');
            // document.getElementById(memberId).setAttribute(onclick, modalFunction(true))
            // document.getElementById(memberId).setAttribute('variant', 'warning')
        }
    }

    const changeText = async (memberId) => {
        const url = new URL('https://anash.vercel.app/api/phone-by-memberid');
        //m const url = new URL('http://localhost:3000/api/phone-by-memberid');
        url.searchParams.append('memberid', memberId);

        const response = await fetch(url);
        const phone_numbers = await response.json();
        
        setPhoneNumber('בית: ' + (phone_numbers.message.phone_number || ''));
        setMobilePhone('נייד: ' + (phone_numbers.message.mobile_phone || ''));
        checkEmptyValues();
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
                    <CardTitle>{(member.title || '') + ' ' +  (member.first_name || '') + ' ' + (member.family_name || '')}</CardTitle>
                    <CardText>
                        <span>{(member.street || '')+ ' ' + (member.number || '')}</span>
                        <br />
                        <span>{(member.city || '') + ' - ' + (member.country || '')}</span>
                        <br />
                        <span>{'מיקוד: ' + (member.zip || '')}</span>
                        <br />
                        <br />
                        <Button variant="secondary" id={member.ID} onClick={() => changeText(member.ID)}>
                            {phone_number}
                            <br />
                            {mobile_phone}
                            {more_info}
                        </Button>
                        <br />
                        <br />
                        <span>{'בן: ' + (member.father || '')}</span>
                        <br />
                        <span>{'חתן: ' + (member.father_in_law || '')}</span>
                    </CardText>
                    {/* <CardText>
                        <div id={member.ID} style={{ display: 'none' }}>
                            <Button variant="secondary" onClick={() => modalFunction(true)}>
                                להוספת פרטים לחץ כאן
                            </Button>
                        </div>
                    </CardText> */}
                </CardBody>
            </Card>
        );
    }
}