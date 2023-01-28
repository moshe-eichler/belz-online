import React, { useState, useEffect } from "react";
import styles from '../styles/Home.module.css';
import BusinessCard from "./BusinessCard";
import { CardDeck } from "reactstrap";
import InfiniteScroll from "react-infinite-scroll-component";


export default function Business({ data, filters }) {

    const [business, setBusiness] = useState(data);
    const [callNumber, setCallNumber] = useState(0);
    const [moreResults, setMoreResults] = useState(true);
    const [noFound, setNoFound] = useState('');

    const getBusiness = async () => {
        const url = new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/api/business`);

        const response = await fetch(url);
        const json_response = await response.json();

        return json_response;
    }

    const infinite = () => {
        setCallNumber((callNumber) => callNumber + 1)
    }

    useEffect(async () => {
        if (!callNumber & !filters) return; // To disable calling in the first render.

        setMoreResults(true);
        setBusiness([]); // This will affect only the next render, The InfiniteScroll component will call the infinite function.
        if (business.length <= 40) infinite(); // In this case InfiniteScroll component will not call the infinite function, So we need to call it manuaaly.
    }, [filters])

    useEffect(async () => {
        if (!callNumber) return; // To disable calling in the first render.

        setNoFound('');

        const result = await getBusiness();
        const newBusiness = result['message'];

        if (newBusiness.length < 40) setMoreResults(false);
        if (newBusiness.length == 0) setNoFound('לא נמצאו תוצאות!');

        setBusiness(currentBusiness => ([...currentBusiness, ...newBusiness]))
    }, [callNumber])

    return (
        <>
            <InfiniteScroll
                dataLength={business.length}
                next={infinite}
                hasMore={moreResults}
                loader={<div className={styles.loader}><h3>טוען אנשי קשר...</h3></div>}
            >
                <CardDeck className={styles.content}>
                    {business.map((business, i) => <BusinessCard business={business} key={i} />)}
                </CardDeck>
            </InfiniteScroll>
            {<div className={styles.loader}><h3>{noFound}</h3></div>}
        </>
    );
}
