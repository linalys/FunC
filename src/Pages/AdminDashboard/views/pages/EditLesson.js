import React from 'react';
import { NavLink } from 'react-router-dom';
import {Button, Card, CardBody, Col, Container, FormGroup, Input, Label} from "reactstrap";
import {MDBIcon} from "mdbreact";

const EditLesson = () => {
    return (
        <div>
            <Container className="d-flex flex-column text-white text-center">
                <h1>Contact Us</h1>
            </Container>
            <Container>
                <Col md={9}>
                    <Card className="bg-transparent text-white">
                        <CardBody>
                            <FormGroup>
                                <Label for="exampleText" size="lg">
                                    Name:
                                </Label>
                                <input type="text" name="text" id="exampleText" className="bg-dark text-white"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleText" size="lg">
                                    Email:
                                </Label>
                                <input type="text" name="text" id="exampleText" className="bg-dark text-white"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleText" size="lg">
                                    Subject:
                                </Label>
                                <input type="text" name="text" id="exampleText" className="bg-dark text-white"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleText">
                                    <MDBIcon far icon="envelope" className="ml-2"/>
                                    Message :</Label>
                                <Input type="textarea" name="text" id="exampleText2" style={{height: 300}}
                                       className="bg-dark text-white"/>
                            </FormGroup>
                            <FormGroup>
                                <div>
                                    <Button>
                                        Send
                                        <MDBIcon far icon="paper-plane" className="ml-2"/>
                                    </Button>
                                </div>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                            </FormGroup>
                        </CardBody>
                    </Card>
                </Col>
            </Container>
        </div>
    );
};

export default EditLesson;