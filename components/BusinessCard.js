// import Avatar from '@mui/material/Avatar';
import Avatar from 'react-avatar';
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import styles from '../styles/Home.module.css';
import Link from 'next/link'

export default function BusinessCard({ business }) {
    return (
        <>
            <Card className={`shadow p-3 mb-5 bg-white rounded ${styles.card}`}>
                <CardBody className='bg-light'>
                    <CardTitle>
                        {/* <Avatar alt="business picture" src={business.picture} /> */}
                        <a href={business.site} target='_blank'>
                            <Avatar name={business.name} src={business.picture} round={true} style={{cursor: 'pointer'}}/>
                        </a>
                    </CardTitle>
                    <CardText>
                        <span>{'שם העסק: ' + business.name}</span>
                        <br />
                        <span>{'כתובת: ' + (business.street || '') + ' ' + (business.number || '')}</span>
                        <br />
                        <span>{business.city + ' - ' + business.stae}</span>
                        <br />
                        <span>{'טלפון: ' + business.phone}</span>
                        <br />
                        <span>{'אימייל: ' + business.email}</span>
                        {/* <br />
                        <span>{'אתר: ' + business.site}</span> */}
                    </CardText>
                </CardBody>
            </Card>
        </>
    );
}