import { useState, useEffect, useRef } from 'react';
import { CardDeck } from "reactstrap";
import MemberCard from './MemberCard';
import styles from '../styles/Home.module.css';

export default function MemberList({ filters }) {
  const [listItems, setListItems] = useState([]);
  const [skip, setSkip] = useState(0);
  const prevFilters = useRef(filters);

  const getMembers = () => {
    // const baseUrl= "https://anash.vercel.app";
    const baseUrl= "http://localhost:3000";
        
    const url = new URL(`${baseUrl}/api/members`);
    url.searchParams.append('limit', 20);
    url.searchParams.append('skip', skip);
    if (filters) url.searchParams.append('querySearch', filters);
    
    fetch(url)
      .then(response => response.json())
      .then(items => setListItems(prevState => ([...prevState, ...items['message']])))

    // for (let i = 0; i < listItems.length; i++) {
    //   console.log('yes');
    //   if (i % 7 == 0) {
    //     listItems.splice(i, 0, {'type': 'adv', 'src': '../public/advertising/weber.png'});
    //   }
    // }
  }

  
  useEffect(() => {
    // To prevent the first call when the page loaded.
    if (prevFilters.current == filters) return;
    
    prevFilters.current = filters;
    setListItems([]);
    
    // To get members when skip variable equals zero (if not scrolled yet) else setSkip to zero and getMembers will call automatically.
    skip == 0 ? getMembers() : setSkip(0);
  }, [filters])

  useEffect(() => {
    getMembers();
  }, [skip]);


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  async function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight) return;
    setSkip((skip) => skip + 20);
  }

  return (
    <CardDeck className={styles.cardDeck}>
      {listItems.map((member, i) => <MemberCard member={member} key={i} />)}
    </CardDeck>
  );
};