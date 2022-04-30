import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { CardDeck } from "reactstrap";
import MemberCard from './MemberCard';
import styles from '../styles/Home.module.css';

export default function Content({ data, filters, modalFunction}) {

    const [members, setMembers] = useState(data);
    const [callNumber, setCallNumber] = useState(0);

    const getMembers = async () => { 
        const url = new URL(`https://anash.vercel.app/api/members`);
        // const url = new URL(`http://localhost:3000/api/members`);
        url.searchParams.append('limit', 20);
        url.searchParams.append('skip', members.length);
        if (filters) url.searchParams.append('querySearch', filters);

        const response = await fetch(url);
        const json_response = await response.json();

        return json_response;
    }

    useEffect( async () => {
        if (!callNumber & !filters) return; // To disable calling in the first render.

        setMembers([]); // This will affect only the next render, The InfiniteScroll component will call the infinite function.
        if (members.length == 20) infinite(); // In this case InfiniteScroll component will not call the infinite function, So we need to call it manuaaly.
    }, [filters])

    useEffect( async () => {
        if (!callNumber) return; // To disable calling in the first render.

        const newMembers = await getMembers();
        setMembers(currentMembers => ([...currentMembers, ...newMembers['message']]))
    }, [callNumber])

    const infinite = () => {
        setCallNumber((callNumber) => callNumber + 1)
    }

    return (
        <>
            <InfiniteScroll
                dataLength={members.length}
                next={infinite}
                hasMore={true}
            >
                <CardDeck className={styles.cardDeck}>
                    {members.map((member, i) => <MemberCard member={member} key={i} modalFunction={modalFunction}/>)}
                </CardDeck>
            </InfiniteScroll>
        </>
    );
};
