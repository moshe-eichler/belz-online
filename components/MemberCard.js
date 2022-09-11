import { Card, CardBody, CardTitle, CardText } from "reactstrap";
// import Image from 'next/image'
import styles from '../styles/Home.module.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
// import { style } from "@material-ui/system";
import Table from 'react-bootstrap/Table';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MemberCard({ member}) {
    // Global Variables
    const [message, setMessage] = useState("הצג מספרי טלפון");
    const [phone_number, setPhoneNumber] = useState("");
    const [mobile_phone, setMobilePhone] = useState("");
    const [clicked, setClicked] = useState(false);

    // Helper Functions
    // const checkEmptyValues = () => {
    //     const important_info = [member.family_name, member.street, member.number, member.city, member.country, member.phone_number, member.mobile_phone]
    //     if (important_info.includes(undefined)) {
    //         setMoreInfo('להשלמת פרטים לחץ כאן');
    //         document.getElementById(memberId).setAttribute(onclick, modalFunction(true))
    //         document.getElementById(memberId).setAttribute('variant', 'warning')
    //     }
    // }

    const copyToClipboard = (text_to_copy) => {
        if (text_to_copy) {
            navigator.clipboard.writeText(text_to_copy);
            toast.success("!מספר הטלפון הועתק בהצלחה", {position: "bottom-right"});    
        }
    }
    

    const changeText = async (memberId) => {
        if (clicked) return;

        setClicked(true);
        setMessage(<div className={styles.loaderSpin}></div>);

        const url = new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/api/phone-by-memberid`);
        url.searchParams.append('memberid', memberId);

        const response = await fetch(url);
        const phone_numbers = await response.json();

        const phone_number = phone_numbers.message.phone_number;
        const mobile_phone = phone_numbers.message.mobile_phone;

        setPhoneNumber(phone_number);
        setMobilePhone(mobile_phone);
        setMessage(undefined);

        if (phone_number) {
            document.getElementById(`phone_${member.ID}`).style.cursor = 'copy';
        }
        if (mobile_phone) {
            document.getElementById(`mobile_${member.ID}`).style.cursor = 'copy';
        }

        document.getElementById(`button_${memberId}`).style.cursor = 'default';
        document.getElementById(`table_${memberId}`).style.display = 'block';
    }
    

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
                        <Button variant="secondary" id={`button_${member.ID}`} onClick={() => changeText(member.ID)} className={styles.showPhone}>
                            {message}
                            <Table borderless id={`table_${member.ID}`} style={{display: 'none'}} className={styles.table}>
                                <tbody>
                                    <tr>
                                        <td className={styles.table}>בית: </td>
                                        <td className={styles.table} id={`phone_${member.ID}`} onClick={e => copyToClipboard(e.target.textContent)}>{phone_number}</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.table}>נייד: </td>
                                        <td className={styles.table} id={`mobile_${member.ID}`} onClick={e => copyToClipboard(e.target.textContent)}>{mobile_phone}</td>
                                    </tr>
                                </tbody>
                            </Table>
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