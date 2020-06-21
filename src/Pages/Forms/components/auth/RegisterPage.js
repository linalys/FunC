//Library Imports
import React from "react";

//Component Imports
import {Container} from "reactstrap";
import Register from "./Register";
import Footer from "../../../../Footer/Footer";
import Header from "../../../../Header/Header";
import Navbar from "../../../AdminDashboard/components/layout/NavigationBar";


const RegisterPage = () => (
    <div>
        <Header/>
        <Register/>
        <Footer />

    </div>
    )


export default RegisterPage;