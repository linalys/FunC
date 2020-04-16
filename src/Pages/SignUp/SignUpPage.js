import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const SignUpPage = () => {
    return (
        <Container>
            <Row>
                <Col md="12">
                    <form>
                        <p className="h5 text-center mb-4">Sign Up</p>
                        <div className="grey-text">
                            <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
                                      success="right" />
                            <MDBInput label="Type your username" icon="user" group type="user" validate error="wrong"
                                      success="right" />
                            <MDBInput label="Type your password" icon="lock" group type="password" validate />
                        </div>
                        <div className="text-center">
                            <Button>Register</Button>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUpPage;