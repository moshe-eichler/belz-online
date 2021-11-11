import { useState, useEffect } from 'react';
import MemberCard from './MemberCard';

export default function List({ filters }) {
  const [listItems, setListItems] = useState([]);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    // let dev = process.env.NODE_ENV !== 'production';
    // let { DEV_URL, PROD_URL } = process.env;
    const PROD_URL= "https://anash.vercel.app";

    filters.limit = '20';
    filters.skip = skip;
    
    const url = new URL(`${PROD_URL}/api/members`);
    url.search = new URLSearchParams(Object.entries(filters).reduce((a,[k,v]) => (v ? (a[k]=v, a) : a), {})).toString();
    
    console.log(url);

    fetch(url)
      .then(response => response.json())
      .then(items => setListItems(prevState => ([...prevState, ...items['message']])))
  }, [skip]);


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    setSkip((skip) => skip + 20);
  }

  return (
    <>
      <ul>
        {listItems.map((member, i) => <MemberCard member={member} key={i} />)}
      </ul>
    </>
  );
};