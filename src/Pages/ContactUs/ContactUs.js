//Component Imports
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import React from 'react';
import {
    Col,
    Card,
    CardBody,
    FormGroup,
    Label,
    Input,
    Button, Container,
} from 'reactstrap';
import {MDBIcon} from "mdbreact";
import LocalizedStrings from "react-localization";
import {useSelector} from "react-redux";

let langStrings = new LocalizedStrings({
    en:{
        contact:"Contact Us",
        name : "Name:",
        email:"Email:",
        sub:"Subject:",
        message:"Message:",
        send:"Send"
    },

    gr:{
        contact:"Επικοινωνήστε μαζί μας",
        name : "Όνομα:",
        email:"Email:",
        sub:"Θέμα:",
        message:"Μήνυμα:",
        send:"Αποστολή"
    }

})


function ContactUs() {
    langStrings.setLanguage(useSelector(state => state.language));
    return (
        <div>
            <Header/>
            <br/>
            <div>
                <Container className="d-flex flex-column text-white text-center">
                    <h1>{langStrings.contact}</h1>
                </Container>
                <Container>
                    <Col md={9}>
                        <Card className="bg-transparent text-white">
                            <CardBody>
                                <FormGroup>
                                    <Label for="exampleText" size="lg">
                                        <p className="text">{langStrings.name}</p>
                                    </Label>
                                    <input type="text" name="text" id="exampleText" className="bg-dark text-white"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleText" size="lg">
                                        <p className="text">{langStrings.email}</p>
                                    </Label>
                                    <input type="text" name="text" id="exampleText" className="bg-dark text-white"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleText" size="lg">
                                        <p className="text">{langStrings.sub}</p>
                                    </Label>
                                    <input type="text" name="text" id="exampleText" className="bg-dark text-white"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleText" size="lg">
                                        <p className="text">{langStrings.message}
                                            <MDBIcon far icon="envelope" className="ml-2"/></p>
                                    </Label>
                                    <Input type="textarea" name="text" id="exampleText2" style={{height: 300}}
                                           className="bg-dark text-white"/>
                                </FormGroup>
                                <FormGroup>
                                    <div>
                                        <Button size="lg">
                                            <p className="text" >{langStrings.send}
                                            <MDBIcon far icon="paper-plane" className="ml-2"/>
                                            </p>
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

            <Footer/>
        </div>
    )
}

export default ContactUs;