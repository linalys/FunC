import React from "react";
import { MDBInput } from 'mdbreact';
import {Container, Row, Col, Button} from "react-bootstrap";
import {useDispatch} from "react-redux";
import Login from "../components/auth/Login";

const SignInPage = () => {

    return (
        <Container style={{color: "white"}}>
            <Row>
                <Col md="12">
                    <Login/>
                </Col>
            </Row>
        </Container>
    );
};

export default SignInPage;