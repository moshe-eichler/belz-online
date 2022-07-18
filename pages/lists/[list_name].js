import { useState } from "react";
import Head from 'next/head';
import NavBar from '../../components/NavBar';
import VerticallyCenteredModal from '../../components/Modal';
import BusinessModal from '../../components/BusinessModal';
import Content from '../../components/Content';
import Business from '../../components/BusinessList';
import { useRouter } from 'next/router';

export default function HomeTest(props) {
    const [query, setQuery] = useState();
    const [modalShow, setModalShow] = useState(false);
    const [content, setContent] = useState(props.members)
    const router = useRouter();
    const { list_name } = router.query

    return (
        <>
            <Head>
                <title>רשימת אנ״ש</title>
            </Head>
            <NavBar queryFunction={setQuery} modalFunction={setModalShow} name={list_name}/>
            {list_name == 'members' ? (
                <>
                    <VerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    <div className="content">
                        {console.log(router.query.page)}
                        <Content data={content} filters={query} modalFunction={setModalShow}/>
                    </div>
                </>
            ):(
                <>
                    <BusinessModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    <div className="content">
                        <Business />
                    </div>
                </>
            )}
        </>
    );
}

export const getStaticProps = async () => {
    // const url = `https://anash.vercel.app/api/members?limit=40`
    const url = `http://localhost:3000/api/members?limit=40`
    const data = await fetch(url)
        .then((response) => response.json());
    
    const members = data.message;
    
    return {
        props: { members }
    };
};

export function getStaticPaths() {
    const paths = ['/lists/members', '/lists/business'];
    return { paths, fallback: false };
}
  