import { useState } from "react";
import Head from 'next/head';
import NavBar from '../components/NavBar';
import MembersModal from '../components/MembersModal';
import Content from '../components/Members';
import Business from '../components/Business';
import { useRouter } from 'next/router';

export default function Home(props) {
    const [query, setQuery] = useState();
    const [modalShow, setModalShow] = useState(false);
    // const [content, setContent] = useState(props.members)
    const router = useRouter();

    return (
        <>
            <Head>
                <title>רשימת אנ״ש</title>
            </Head>
            <NavBar queryFunction={setQuery} modalFunction={setModalShow} />
            <MembersModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            {router.query == 'business' ? (
                <div className="content">
                    {console.log(router.query.page)}
                    <Business />
                </div>
            ) : (
                <div className="content">
                    <Content data={props.members} filters={query} modalFunction={setModalShow} />
                </div>
            )}
        </>
    );
}

export const getStaticProps = async () => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/members?limit=40`
    const data = await fetch(url)
        .then((response) => response.json());

    const members = data.message

    return {
        props: { members }
    };
};
