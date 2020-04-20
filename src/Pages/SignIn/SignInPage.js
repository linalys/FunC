import React from "react";
import { MDBInput } from 'mdbreact';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const SignInPage = () => {
    return (
        <Container style={{color: "white"}}>
            <Row>
                <Col md="12">
                    <form>
                        <h1 className="text-center mb-4">Sign in</h1>
                        <div className="grey-text">
                            <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
                                      success="right" className="bg-dark text-white" size="lg"/>
                            <MDBInput label="Type your password" icon="lock" group type="password" validate
                                      className="bg-dark text-white" size="lg"/>
                        </div>
                        <div className="text-center mb-3">
                            <Button size="lg" className="w-100 outlinedText" variant="success">Login</Button>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default SignInPage;