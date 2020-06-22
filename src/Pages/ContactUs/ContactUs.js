//Component Imports
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import React from 'react';
import {Col, Card, CardBody, Container,} from 'reactstrap';

import LocalizedStrings from "react-localization";
import {useSelector} from "react-redux";
import MyForm from "./myform";

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

});


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
                            <MyForm/>
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