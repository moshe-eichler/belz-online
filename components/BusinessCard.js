// import Avatar from '@mui/material/Avatar';
import Avatar from 'react-avatar';
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import styles from '../styles/Home.module.css';

export default function BusinessCard({ business }) {
    return (
        <>
            <Card className={`shadow p-3 mb-5 bg-white rounded ${styles.card}`}>
                <CardBody className='bg-light'>
                    <br />
                    <CardTitle>
                        <a href={business.site} target='_blank' rel="noreferrer">
                            <Avatar name={business.name} src={business.picture} round={true} style={{ cursor: 'pointer' }} />
                        </a>
                    </CardTitle>
                    <br />
                    <CardText>
                        <span>{'שם העסק: ' + business.name}</span>
                        <br />
                        <span>{'כתובת: ' + (business.street || '') + ' ' + (business.number || '')}</span>
                        <br />
                        <span>{business.city}</span>
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