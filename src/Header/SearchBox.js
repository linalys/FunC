//Library Imports
import React from "react";

//CSS Imports
import "./SearchBox.css"
import Button from "react-bootstrap/Button";
import {Col, Form, FormControl} from "react-bootstrap";
import Row from "react-bootstrap/Row";

function SearchBox() {
    return (
        <Form className="w-100 align-self-center align-content-center align-items-center">
            <Row>
                <Col md={11} xs={9}>
                <FormControl type="text" placeholder="Search" className="ml-4"/>
                </Col>
                <Col md={1} xs={1}>
                <Button className=""><i className="fa fa-search"/></Button>
                </Col>
            </Row>
        </Form>
    );
}

export default SearchBox;