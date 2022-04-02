import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { CardDeck } from "reactstrap";
import MemberCard from './MemberCard';
import styles from '../styles/Home.module.css';

export default function Content({ data, filters, modalFunction}) {

    const [members, setMembers] = useState(data);
    const [skip, setSkip] = useState(20);

    const getMembers = async (triger='') => {
        const url = new URL(`https://anash.vercel.app/api/members`);
        url.searchParams.append('limit', 20);
        if (triger != 'filters') url.searchParams.append('skip', skip);
        if (filters) url.searchParams.append('querySearch', filters);

        const response = await fetch(url);
        const newMembers = await response.json();
        setMembers(currentMembers => ([...currentMembers, ...newMembers['message']]));

        setSkip((skip) => skip + 20);
    }

    useEffect(() => {        
        setMembers([]);
        setSkip(0);

        getMembers('filters');
    }, [filters])

    return (
        <>
            <InfiniteScroll
                dataLength={members.length}
                next={getMembers}
                hasMore={true}
            >
                <CardDeck className={styles.cardDeck}>
                    {members.map((member, i) => <MemberCard member={member} key={i} modalFunction={modalFunction}/>)}
                </CardDeck>
            </InfiniteScroll>
        </>
    );
};
