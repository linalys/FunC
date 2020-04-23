//Library Imports
import React from "react";
import {useSelector} from "react-redux";


//Component Imports
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import {Container} from "reactstrap";
import {Alert} from "react-bootstrap"
import SignInPage from "./SignInPage";

function SignIn() {
    return (
        <div>
            <Header/>

            <br/>

            <Container>
                <SignInPage/>
            </Container>

            <Container className="p-5">
                <Alert variant="success">
                    <Alert.Heading>Hey, tester!</Alert.Heading>
                    Use <b>Login</b> button to see our profile page!
                </Alert>
            </Container>

            <Footer/>
        </div>
    )
}

export default SignIn;