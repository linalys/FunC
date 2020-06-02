//Library Imports
import React from "react";

//Component Imports
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import {Container} from "reactstrap";
import SignInPage from "./SignInPage";

function SignIn() {
    return (
        <div>
            <Header/>

            <br/>

            <Container>
                <SignInPage/>
            </Container>



            <Footer/>
        </div>
    )
}

export default SignIn;