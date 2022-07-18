import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';


export default function MemberCard({ member, modalFunction}) {
    const [phone_number, setPhoneNumber] = useState("הצג מספרי טלפון");
    const [new_line, setNewLine] = useState("");
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
        if (new_line) return;

        setPhoneNumber(<div className={styles.loaderSpin}></div>);

        const url = new URL('https://anash.vercel.app/api/phone-by-memberid');
        // const url = new URL('http://localhost:3000/api/phone-by-memberid');
        url.searchParams.append('memberid', memberId);

        const response = await fetch(url);
        const phone_numbers = await response.json();
        
        setPhoneNumber('בית: ' + (phone_numbers.message.phone_number || ''));
        setNewLine(<br />);
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
            <>
                <Card className={`shadow p-3 mb-5 bg-white rounded ${styles.card}`}>
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
                            <Button variant="secondary" id={member.ID} onClick={() => changeText(member.ID)} className={styles.showPhone}>
                                {phone_number}
                                {new_line}
                                {mobile_phone}
                                {more_info}
                            </Button>
                            <br />
                            <br />
                            <span>{'בן: ' + (member.father || '')}</span>
                            <br />
                            <span>{'חתן: ' + (member.father_in_law || '')}</span>
                        </CardText>
                    </CardBody>
                </Card>
            </>
        );
    }
}