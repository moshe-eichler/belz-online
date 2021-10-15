import Head from 'next/head';

import Nav from '../components/Nav';
import MemberCard from '../components/MemberCard';
import styles from '../styles/Home.module.css';

export default function Home({ members }) {
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>

            <Nav />

            <main>
                <div className={styles.container}>
                    {members.length === 0 ? (
                        <h2>No added members</h2>
                    ) : (
                        <ul>
                            {members.map((post, i) => (
                                <MemberCard post={post} key={i} />
                            ))}
                        </ul>
                    )}
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
    let response = await fetch(encodeURI('https://anash-belz.vercel.app/api/members?first_name=משה יוסף'));
    // extract the data
    let data = await response.json();
    console.log(data)

    return {
        props: {
            members: data['message'],
        },
    };
}