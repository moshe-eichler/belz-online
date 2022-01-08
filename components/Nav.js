import styles from '../styles/Nav.module.css';

export default function Nav( { location = {state: 'Israel', func: ''}} ) {
    const israel_countries = ['ירושלים', 'בני ברק', 'אשדוד', 'בית שמש', 'קרית גת', 'גבעת זאב', 'הר יונה', 'תל אביב', 'חיפה', 'צפת', 'קוממיות'];
    const abroad_countries = ['Brooklyn, N.Y.', 'Monsey N.Y.', 'Lakewood, N.J.', 'Montreal', 'TORONTO', 'London', 'Manchester', 'Antwerpen', 'Zurich', 'Wien', 'Melbourne'];
    let countries = []
    if (location.state == 'Israel') {
        countries = israel_countries;
    } else {
        countries = abroad_countries;
    } 
    return (
        <nav className={styles.nav}>
            {countries.map((item, key) => (
                <button key={key} className={styles.item} onClick={() => location.func(item)} > {item} </button>
            ))}
        </nav>
    );
}
