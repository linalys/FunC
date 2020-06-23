//Library Imports
import React from "react";

//Component Imports
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import {Container} from "reactstrap";
import SignInPage from "./SignInPage";
import SignInPage1 from "./SignInPage1";

function SignInError() {
    return (
        <div>
            <Header/>

            <br/>

            <Container>
                <SignInPage1/>
            </Container>



            <Footer/>
        </div>
    )
}

export default SignInError;