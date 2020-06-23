//Library Imports
import React from "react";

//Component Imports
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

import {Container} from "reactstrap";
import SignUpPage1 from "./SignUpPage1";

function SignUpError() {
    return (
        <div>
            <Header/>
            <br/>
            <Container>
                <SignUpPage1/>
            </Container>

            <Footer/>
        </div>
    )
}

export default SignUpError;