import { useState, useEffect, useRef } from 'react';
import BusinessCard from './BusinessCard';

export default function MemberList({ filters }) {
  const [listItems, setListItems] = useState([]);
  const [skip, setSkip] = useState(0);
  const prevFilters = useRef(filters);

  const getMembers = () => {
    const baseUrl= "http://localhost:3000";

    const url = new URL(`${baseUrl}/api/business`);
    // url.search = new URLSearchParams(Object.entries(filters).reduce((a,[k,v]) => (v ? (a[k]=v, a) : a), {})).toString();
    // url.searchParams.append('limit', 20);
    // url.searchParams.append('skip', skip);
    
    fetch(url)
      .then(response => response.json())
      .then(items => setListItems(prevState => ([...prevState, ...items['message']])))
  }

  useEffect(() => {
    getMembers()
  }, []);


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  async function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    setSkip((skip) => skip + 20);
  }

  return (
    <>
      <ul>
        {listItems.map((business, i) => <BusinessCard business={business} key={i} />)}
      </ul>
    </>
  );
};