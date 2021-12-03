
export default function MemberCard({ business }) {
    return (
        <>
            <li>
            <hr />
                <span>{'שם העסק: ' + business.name}</span>
                <br />
                <span>{'כתובת: ' + business.address }</span>
                <br />
                <span>{business.city + ' - ' + business.country}</span>
                <br />
                <span>{'טלפון: ' + business.phone}</span>
                <br />
                <span>{'קטגוריה: ' + business.category}</span>
            </li>
        </>
    );
}