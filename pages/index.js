import { useState } from "react";
import ReactDOM from "react-dom";
import Head from 'next/head';

import Nav from '../components/Nav';
import Table from '../components/Table';
import styles from '../styles/Home.module.css';

function useInput({ type /*...*/ }) {
    const [value, setValue] = useState("");
    const input = <input value={value} onChange={e => setValue(e.target.value)} type={type} />;
    return [value, input];
}

export default function Home({ members }) {
    // const [username, userInput] = useInput({ type: "text" });
    // const [password, passwordInput] = useInput({ type: "text" });

    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');

    const submitValue = async () => {
        const params = {
            'first_name' : fName,
            'family_name' : lName,
            'city' : city,
            'mobile_phone' : phone
        }

        const url = new URL('https://anash.vercel.app/api/members');
        url.search = new URLSearchParams(Object.entries(params).reduce((a,[k,v]) => (v ? (a[k]=v, a) : a), {})).toString();

        console.log(url)

        let response = await fetch(url)
        let data = await response.json();

        console.log(data['message'])
        console.log(document.getElementById('table'))
        let element = <Table members={data['message']} />
        console.log(element)
        ReactDOM.render(element, document.getElementById('table'));
        
    }
   
    return (
        <div dir="rtl">
            <Head>
                <title>Home</title>
            </Head>

            <Nav />

            <main>
                <div className={styles.search}>
                    <h2>חפש לפי:</h2>
                    <input type="text" placeholder="שם פרטי" onChange={e => setfName(e.target.value)} />
                    <input type="text" placeholder="שם משפחה" onChange={e => setlName(e.target.value)} />
                    <input type="text" placeholder="עיר" onChange={e => setCity(e.target.value)} />
                    <input type="text" placeholder="טלפון" onChange={e => setPhone(e.target.value)} />
                    <button onClick={submitValue}>Submit</button>
                </div>
                <div className={styles.container} id="table">
                    <Table members={members} />
                </div>
            </main>
        </div>
    );
}

export async function getServerSideProps(ctx) {
    // get the current environment
    let dev = process.env.NODE_ENV !== 'production';
    let { DEV_URL, PROD_URL } = process.env;

    // request members from api
    let response = await fetch(encodeURI('https://anash.vercel.app/api/members'));
    // extract the data
    let data = await response.json();

    return {
        props: {
            members: data['message'],
        },
    };
}