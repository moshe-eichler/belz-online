import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import styles from '../styles/Home.module.css';
  
export default function MemberCard({ member }) {
    return (
        <>
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
                        <span>{'טלפון: ' + member.phone_number + ' '}</span>
                        <br />
                        <span>{'טלפון נייד: ' + member.mobile_phone}</span>
                        <br />
                        <span>{'חתן: ' + member.father_in_law + ' '}</span>
                        <br />
                        <span>{'בן: ' + member.father}</span>
                        <br />
                    </CardText>
                    <CardText>
                        <small className="text-muted">עדכון אחרון לפני 3 חודשים</small>
                    </CardText>
                </CardBody>
            </Card>
        </>
    );
}