import { React, useState } from "react";
import Image from 'next/image';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import styles from '../styles/Home.module.css';
import BrandPic from '../public/logo-removebg-preview.png'
import memberPic from '../public/icons8-user-male-30 (2).png'
import briefcasePic from '../public/icons8-business-30 (2).png'
import { useRouter } from 'next/router';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

export default function NavBar({ queryFunction, modalFunction, name }) {
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
    <Navbar bg="light" expand="lg" className={[`shadow mb-5`, styles.navBar]}>
      <Navbar.Brand className={styles.brand} href="/">
        <Image
          src={BrandPic}
          alt="Picture of the author"
          width={50}
          height={50}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Button onClick={() => goToPage('members')} className={styles.navigationButton}>
            {/* <Image
              src={memberPic}
              alt="Picture of the author"
              width={25}
              height={25}
            /> */}
            רשימת אנשים
          </Button>
          <Button onClick={() => goToPage('business')} className={styles.navigationButton}>
            {/* <Image
              src={briefcasePic}
              width={25}
              height={25}
            /> */}
            רשימת עסקים
          </Button>
        </Nav>
      </Navbar.Collapse>
      <Form className={`d-flex ${styles.form}`} onSubmit={onFormSubmit}>
        <FormControl
          type="search"
          placeholder={name == 'business' ? 'חפש לפי: שם/תחום עסק או עיר' : 'חפש לפי: שם/משפחה/עיר/בן/חתן'}
          className="me-2"
          aria-label="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button className={styles.searchButton} variant="outline-success" onClick={() => queryFunction(query)}>חפש</Button>
      </Form>
      <BrowserView>
        <Button variant="primary" onClick={() => modalFunction(true)} className={styles.updateMember}>
          הוספת {name == 'members' ? 'איש קשר' : 'עסק'}
        </Button>
      </BrowserView>
    </Navbar>
  )
}

