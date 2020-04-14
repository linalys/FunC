//Component Imports
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import React from 'react';
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Label,
    Input,
    Button, Container,
} from 'reactstrap';
import {MDBIcon} from "mdbreact";

function ContactUs() {
    return (
        <div>
            <Header/>
                <div>
                    <Container className="d-flex flex-column text-white">
                        <h1 className="font-weight-bold">Contact Us</h1>
                    </Container>
                    <Container >
                        <Col md={9}>

                        <Card>
                                <CardBody>
                                    <FormGroup>
                                        <Label for="exampleText">
                                            Name:</Label>
                                        <input type="text" name="text" id="exampleText" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleText">
                                            Email:</Label>
                                        <input type="text" name="text" id="exampleText" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleText">
                                            Subject:</Label>
                                        <input type="text" name="text" id="exampleText" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleText">
                                            <MDBIcon far icon="envelope" className="ml-2" />
                                             Message:</Label>
                                        <Input type="textarea" name="text" id="exampleText2" style={{height: 300}} />
                                    </FormGroup>
                                <FormGroup>
                                    <div>
                                        <Button>
                                            Send
                                            <MDBIcon far icon="paper-plane" className="ml-2" />
                                        </Button>
                                    </div>

                                </FormGroup>
                                </CardBody>
                            </Card>
                        </Col>
                    </Container>
                </div>
            <br></br>
            <Footer/>
        </div>
    )
}

export default ContactUs;