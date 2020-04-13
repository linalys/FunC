import React from "react";
import {Nav, Navbar, Form, FormControl, NavDropdown, Button, Col} from 'react-bootstrap';

import logo from "../Header/logoTransparent.gif"
import LocalizedStrings from "react-localization";
import {useDispatch, useSelector} from "react-redux";
import Row from "react-bootstrap/Row";

const langStrings = new LocalizedStrings({
    en: {
        pricing: "Pricing",
        courses: "Courses",
        DashboardLayout: "Dashboard"
    },
    gr: {
        pricing: "Τιμοκατάλογος",
        courses: "Μαθήματα",
        DashboardLayout: "Ταμπλό"
    }
});

function Sidebar() {
    const lang = useSelector(state => state.language);
    const dispatch = useDispatch();
    langStrings.setLanguage(lang);
    return(
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="/">
                <img src={logo} style={{height: "35px"}} alt="Home Page" fluid/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" text="light">
                    <Nav.Link className="text-white" href="/">Home</Nav.Link>
                    <Nav.Link className="text-white" href="/pricing">Pricing</Nav.Link>
                    <NavDropdown title={<span className="text-white">Courses</span>} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/cplusplus">C++</NavDropdown.Item>
                        <NavDropdown.Item href="/java">Java</NavDropdown.Item>
                        <NavDropdown.Item href="/sql">SQL</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Button>Sign up</Button>
                <Form inline>
                    <Form.Row>
                        <Col>
                    <FormControl type="text" placeholder="Search" className="ml-2" /></Col>
                        <Col><Button><i className="fa fa-search"/></Button></Col>
                    </Form.Row>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )

}

export default Sidebar;