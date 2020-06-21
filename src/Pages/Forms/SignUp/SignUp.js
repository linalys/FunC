//Library Imports
import React from "react";
import {useSelector} from "react-redux";


//Component Imports
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";

import {Container} from "reactstrap";
import SignUpPage from "./SignUpPage";
import Register from "../components/auth/Register";

function SignUp() {
    return (
        <div>
            <Header/>
            <br/>
                <Container>
                    <Register/>
                </Container>

            <Footer/>
        </div>
    )
}

export default SignUp;