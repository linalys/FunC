import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import {Container} from "reactstrap";
import {Helmet} from "react-helmet";
import {FormControl, Form, Button} from "react-bootstrap";
import "./AccountSettings.css"
import defaultProfileImage from "../Profile/profileDefault.png"

function AccountSettings() {
    const Title = "Account Settings | FunC";

    const photo = defaultProfileImage;
    const username = "Example User";
    const email = "user@example.com";

    return (
        <>
            <Helmet><title>{Title}</title></Helmet>
            <Header/>
            <br/>
            <h1 className="text-center text-white">Account Settings</h1>
            <br/>
            <Container>
                <Form className="w-75 mb-5">
                    <h2 className="text-white">Change Profile Photo</h2>
                    <img
                        src={photo}
                        className="profileImage"
                        alt="Profile Photo"
                    />
                    <Form.File id="formcheck-api-regular" fluid={false} className="text-white">
                        <Form.File.Input/>
                    </Form.File>
                    <Button className="mt-3" variant="secondary">Change</Button>
                </Form>
                <Form className="w-75 mb-5">
                    <h2 className="text-white">Change Username</h2>
                    <FormControl defaultValue={username} className="bg-dark text-white"/>
                    <Button className="mt-3" variant="secondary">Change</Button>
                </Form>
                <Form className="w-75 mb-5">
                    <h2 className="text-white">Change Email</h2>
                    <FormControl defaultValue={email} className="bg-dark text-white"/>
                    <Button className="mt-3" variant="secondary">Change</Button>
                </Form>
                <Form className="w-75 mb-5">
                    <h2 className="text-white">Change Password</h2>
                    <FormControl type="password" placeholder="New password" className="bg-dark text-white mb-2"/>
                    <FormControl type="password" placeholder="New password again" className="bg-dark text-white mb-2"/>
                    <FormControl type="password" placeholder="Old password" className="bg-dark text-white"/>
                    <Button className="mt-3" variant="secondary">Change</Button>
                </Form>
            </Container>
            <Container>
                <Form className="w-75 mb-5">
                <h2 className="text-white">Delete Your Account</h2>
                <Button variant="danger">
                    Delete
                </Button><h6 className="text-white">You can't undo this option!</h6>
                </Form>
            </Container>
            <Footer/>
        </>
    )


}

export default AccountSettings;