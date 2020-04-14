//Library Imports
import React from "react";
import {useSelector} from "react-redux";


//Component Imports
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

//CSS Imports
//import "./LanguageCourseBox.css";
//import "./Home.css"
//import LanguageCourseBox from "./LanguageCourseBox";
//import {Row} from "react-bootstrap";
import {Container} from "reactstrap";

function ContactUs() {
    return (
        <div>
            <Header/>

            <Container className="d-flex flex-column text-white">
                <h1 className="font-weight-bold">FunC</h1>
                <h5 className="font-italic">The fancy way to learn how to code.</h5>
            </Container>

            <br></br>
            <Footer/>
        </div>
    )
}

export default ContactUs;