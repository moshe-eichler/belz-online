
export default function MemberCard({ member }) {
    return (
        <>
            <div dir='rtl'>
                <li>
                <hr />
                    <span>{member.title + ' ' +  member.first_name + ' ' + member.family_name}</span>
                    <br />
                    <span>{'כתובת: ' + member.street + ' ' + member.number}</span>
                    <br />
                    <span>{member.city + ' - ' + member.country}</span>
                    <br />
                    <span>{'מיקוד: ' + member.zip}</span>
                    <br />
                    <span>{'טלפון: ' + member.phone_number + ' '}</span>
                    <span>{'טלפון נייד: ' + member.mobile_phone}</span>
                    <br />
                    <span>{'חתן: ' + member.father_in_law + ' '}</span>
                    <span>{'בן: ' + member.father}</span>
                    <br />
                    {/* <span>{'הערות: ' + member.notes}</span> */}
                </li>
            </div>
        </>
    );
}