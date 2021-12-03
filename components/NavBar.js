import { React, useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import styles from '../styles/Home.module.css';
import profilePic from '../public/logo.png'

export default function NavBar( { queryFunction, modalFunction} ) {
  const [query, setQuery] = useState();
  
  const onFormSubmit = e => {
    e.preventDefault();
    queryFunction(query);
  }

  return (
    <Navbar variant="tabs" className={styles.navBar}>
      <Link href="/">
        <Image
          src={profilePic}
          alt="Picture of the author"
          width={50}
          height={50}
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </Link>
      <Nav className={`me-auto`}>
        <NavDropdown title="רשימת אנ״ש" id="basic-nav-dropdown">
            <NavDropdown.Item href="/?city=ירושלים">ירושלים</NavDropdown.Item>
            <NavDropdown.Item href="/?city=בני ברק">בני ברק</NavDropdown.Item>
            <NavDropdown.Item href="/?city=אשדוד">אשדוד</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/?city=ברוקלין">ברוקלין</NavDropdown.Item>
            <NavDropdown.Item href="/?city=מונסי">מונסי</NavDropdown.Item>
            <NavDropdown.Item href="/?city=מונטריאול">מונטריאול</NavDropdown.Item>
        </NavDropdown>
        <Nav.Item>
          <Nav.Link href="/" className={styles.navLink}>רשימת אנ״ש</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" href='/test' className={styles.navLink}>רשימת עסקים</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2"  href='/add-post' className={styles.navLink}>עדכן פרטי איש קשר</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" href='/notice-board' className={styles.navLink}>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Button variant="primary" onClick={() => modalFunction(true)} className={styles.updateMember}>
        עדכון/הוספת איש קשר
      </Button>
      <Form className={`d-flex ${styles.form}`} onSubmit={onFormSubmit}>
        <FormControl
          type="search"
          placeholder="חפש לפי: שם/משפחה/עיר/בן/חתן"
          className="me-2"
          width="2000px"
          aria-label="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="outline-success" onClick={() => queryFunction(query)}>חפש</Button>
      </Form>
    </Navbar>
  )
}