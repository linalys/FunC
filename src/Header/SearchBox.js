//Library Imports
import React from "react";

//CSS Imports
import "./SearchBox.css"
import Button from "react-bootstrap/Button";
import {Col, Form, FormControl} from "react-bootstrap";

function SearchBox() {
    return (
        <Form>
            <Form.Row sm>
                <Col>
                    <FormControl type="text" placeholder="Search" className="ml-2"/></Col>
                <Col><Button><i className="fa fa-search"/></Button></Col>
            </Form.Row>
        </Form>
    );
}

export default SearchBox;