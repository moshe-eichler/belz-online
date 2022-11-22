import { React, useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import styles from '../styles/Home.module.css';
import profilePic from '../public/logo-removebg-preview.png'
import memberPic from '../public/icons8-user-male-30 (2).png'
import briefcasePic from '../public/icons8-business-30 (2).png'
import { useRouter } from 'next/router';

export default function NavBar( { queryFunction, modalFunction, name} ) {
  const [query, setQuery] = useState();
  const router = useRouter();

  
  const onFormSubmit = e => {
    e.preventDefault();
    queryFunction(query);
  }

  const goToPage = page => {
    router.push(`/lists/${page}`, undefined, { shallow: true });
  }

  return (
    <Navbar variant="tabs" className={[`shadow p-3 mb-5 bg-white rounded`, styles.navBar]}>
      <Link href="/" passHref>
        <div className={styles.logo}>
          <Image
            src={profilePic}
            alt="Picture of the author"
            width={50}
            height={50}
            margin={10}
          />
        </div>
      </Link>
      <Nav className={`me-auto`}>
      <Nav.Item>
        {/* <Nav.Link href="/" className={styles.navLink}> |  */}
          {/* <Image
            src={memberPic}
            alt="Picture of the author"
            width={25}
            height={25}
          /> */}
        {/* </Nav.Link> */}
        <Button onClick={() => goToPage('members')} className={styles.updateMember}>
          <Image
            src={memberPic}
            alt="Picture of the author"
            width={25}
            height={25}
          />
          רשימת אנשים</Button>
      </Nav.Item>
      {/* <NavItem className={styles.navLink}>
        |
      </NavItem> */}
      <Nav.Item>
        {/* <Nav.Link eventKey="link-1" href='business' className={styles.navLink}> */}
        {/* <Image
          src={briefcasePic}
          width={25}
          height={25}
        /> */}
        <Button onClick={() => goToPage('business')} className={styles.updateMember}>
          <Image
            src={briefcasePic}
            width={25}
            height={25}
          />
          רשימת עסקים</Button>
        {/* </Nav.Link> */}
      </Nav.Item>
        {/* <Nav.Item>
          <Nav.Link eventKey="link-2"  href='simches-board' className={styles.navLink}>לוח שמחות</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2"  href='notice-board' className={styles.navLink}>לוח מודעות</Nav.Link>
        </Nav.Item> */}
       </Nav>
      <Form className={`d-flex ${styles.form}`} onSubmit={onFormSubmit}>
        <FormControl
          type="search"
          placeholder={ name == 'business' ? 'חפש לפי: שם/תחום עסק או עיר' : 'חפש לפי: שם/משפחה/עיר/בן/חתן' }
          className="me-2"
          aria-label="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button className={styles.updateMember} variant="outline-success" onClick={() => queryFunction(query)}>חפש</Button>
      </Form>
      <Button variant="primary" onClick={() => modalFunction(true)} className={styles.updateMember}>
        עדכון/הוספת {name == 'members' ? 'איש קשר' : 'עסק'}
      </Button>
    </Navbar>
  )
}