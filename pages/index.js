import { useState } from "react";
import Head from 'next/head';
import List from '../components/List';
import styles from '../styles/Home.module.css';

export default function Home() {
    
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');    

    // function setFilters() {
    //     const filters = {
    //         'first_name' : fName,
    //         'family_name' : lName,
    //         'city' : city,
    //         'mobile_phone' : phone
    //     }
    // }

    const filters = {
        'first_name' : fName,
        'family_name' : lName,
        'city' : city,
        'mobile_phone' : phone
    };

    return (
        <div dir="rtl">
            <Head>
                <title>Home</title>
            </Head>

            {/* <Nav /> */}

            <main>
                <div className={styles.search}>
                    <h2>חפש לפי:</h2>
                    <input type="text" placeholder="שם פרטי" onChange={e => setfName(e.target.value)} />
                    <input type="text" placeholder="שם משפחה" onChange={e => setlName(e.target.value)} />
                    <input type="text" placeholder="עיר" onChange={e => setCity(e.target.value)} />
                    <input type="text" placeholder="טלפון" onChange={e => setPhone(e.target.value)} />
                    <button onClick={() => setFilters()}>Submit</button>
                </div>
                <div className={styles.container} id="table">
                    <List filters={filters}/>
                </div>
            </main>
        </div>
    );
}
// import React from 'react';
// import List from './List';

// export default function Home() {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-12 text-center mt-5">
//             <h1>
//               React Hooks Infinite Scroller
//             </h1>
//           </div>
//           <div className="col-12 text-center mt-3">
//             {/* <button type="button" className="btn btn-primary" onClick={() => window.open('https://upmostly.com/tutorials/', '_blank')}>
//               View Full Tutorial at Upmostly.com
//             </button> */}
//           </div>
//         </div>
//         <div className="row">
//             <div className="col-6 justify-content-center my-5">
//             </div>
//         </div>
//       </div>
//     );
// }
// export async function getServerSideProps(ctx) {
//     // get the current environment
//     const dev = process.env.NODE_ENV !== 'production';
//     const { DEV_URL, PROD_URL } = process.env;
    
//     // request members from api
//     let response = await fetch(encodeURI(`${dev ? DEV_URL : PROD_URL}/api/members`));
//     // extract the data
//     let data = await response.json();

//     return {
//         props: {
//             members: data['message'],
//         },
//     };
// }