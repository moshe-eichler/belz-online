
export default function MemberCard({ business }) {
    return (
        <>
            <li>
            <hr />
                <span>{'שם העסק: ' + business.name}</span>
                <br />
                <span>{'כתובת: ' + (business.street || '')+ ' ' + (business.number || '') }</span>
                <br />
                <span>{business.city + ' - ' + business.country}</span>
                <br />
                <span>{'טלפון: ' + business.phone}</span>
                <br />
                <span>{'אימייל: ' + business.email}</span>
                <br />
                <span>{'אתר: ' + business.site}</span>
            </li>
        </>
    );
}