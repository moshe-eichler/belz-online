import { useState } from "react";
import Head from 'next/head';
import NavBar from '../../components/NavBar';
import MembersModal from '../../components/MembersModal';
import BusinessModal from '../../components/BusinessModal';
import Members from '../../components/Members';
import Business from '../../components/Business';
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
                    <MembersModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    <div className="content">
                        <Members data={props.members} filters={query} modalFunction={setModalShow} />
                    </div>
                </>
            ) : (
                <>
                    <BusinessModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    <div className="content">
                        <Business data={props.business} filters={query} />
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

    const businessURL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/members?limit=40`;
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
