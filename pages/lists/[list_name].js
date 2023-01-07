import { useState } from "react";
import Head from 'next/head';
import NavBar from '../../components/NavBar';
import VerticallyCenteredModal from '../../components/Modal';
import BusinessModal from '../../components/BusinessModal';
import Content from '../../components/Content';
import { useRouter } from 'next/router';

export default function HomeTest(props) {
    const [query, setQuery] = useState();
    const [modalShow, setModalShow] = useState(false);
    const router = useRouter();
    const { list_name } = router.query

    return (
        <>
            <Head>
                <title>רשימת אנ״ש</title>
            </Head>
            <NavBar queryFunction={setQuery} modalFunction={setModalShow} name={list_name} />
            {list_name == 'members' ? (
                <>
                    <VerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    <div className="content">
                        <Content data={props.members} filters={query} modalFunction={setModalShow} />
                    </div>
                </>
            ) : (
                <>
                    <BusinessModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    <div className="content">
                        <Content data={props.members} filters={query} modalFunction={setModalShow} />
                    </div>
                </>
            )}
        </>
    );
}

export const getStaticProps = async () => {
    const membersURL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/members?limit=40`;
    const membersData = await fetch(membersURL)
        .then((response) => response.json());
    const members = membersData.message;

    const businessURL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/business?limit=40`;
    const businessData = await fetch(businessURL)
        .then((response) => response.json());
    const business = businessData.message;

    return {
        props: { 'members': members, 'business': business }
    };
};

export function getStaticPaths() {
    const paths = ['/lists/members', '/lists/business'];
    return { paths, fallback: false };
}
