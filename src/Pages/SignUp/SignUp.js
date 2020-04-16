//Library Imports
import React from "react";
import {useSelector} from "react-redux";


//Component Imports
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

import {Container} from "reactstrap";
import SignUpPage from "./SignUpPage";

function SignUp() {
    return (
        <div>
            <Header/>
            <br></br>
            <br></br>
            <br></br>
                <Container>
                    <SignUpPage/>
                </Container>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Footer/>
        </div>
    )
}

export default SignUp;