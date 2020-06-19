import React, {useState} from "react";
import {MDBInput} from 'mdbreact';
import {Container, Row, Col, Button, Alert} from "react-bootstrap";
import {changeLoggedIn} from "../../actions";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {Redirect} from "react-router-dom";
import LocalizedStrings from "react-localization";

const langStrings = new LocalizedStrings({
    en: {
        signIn: "Sign in",
        typeEmail: "Type your email",
        typePassword: "Type your password",
        loginButton: "Login",
        oops: "Oops!",
        failedToLogin: "The email or password is incorrect."
    },
    gr: {
        signIn: "Σύνδεση",
        typeEmail: "Εισάγετε το email σας",
        typePassword: "Εισάγετε τον κωδικό σας",
        loginButton: "Σύνδεση",
        oops: "Ουπς!",
        failedToLogin: "Το email ή ο κωδικός είναι λάθος."
    }
});

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [failMessage, setFailMessage] = useState(false);
    const loggedIn = useSelector(state => state.loggedIn);
    const lang = useSelector(state => state.language);
    langStrings.setLanguage(lang);
    const dispatch = useDispatch();
    function onEmailChange(event) {
        setEmail(event.target.value);
    }

    function onPasswordChange(event) {
        setPassword(event.target.value);
    }

    const TryToLogIn = (e) => {
        e.preventDefault();
        axios.post('/api/users/login', {email, password})
            .then(res => {
                if (res.status === 200) {
                    dispatch(changeLoggedIn(true));
                    console.log("Logged in");
                }
            })
            .catch(() => {
                setFailMessage(true);
                console.log("Failed to Log in")
            });
    };

    return (
        <>
            {failMessage &&
            <Container className="pl-5 pr-5" fluid={true}>
                <Alert variant="danger">
                    <Alert.Heading><b>{langStrings.oops}</b></Alert.Heading>
                    {langStrings.failedToLogin}
                </Alert>
            </Container>
            }
            <Container style={{color: "white"}}>
                <Row>
                    <Col md="12">
                        <form>
                            <h1 className="text-center mb-4">{langStrings.signIn}</h1>
                            <div className="grey-text">
                                <MDBInput label={langStrings.typeEmail} icon="envelope" group type="email" validate
                                          error="wrong"
                                          success="right" className="bg-dark text-white" size="lg"
                                          onChange={onEmailChange}/>
                                <MDBInput label={langStrings.typePassword} icon="lock" group type="password" validate
                                          className="bg-dark text-white" size="lg" onChange={onPasswordChange}/>
                            </div>
                            <div className="text-center mb-3">
                                <Button size="lg"
                                        onClick={TryToLogIn}
                                        className="w-100 outlinedText"
                                        variant="success">
                                    {langStrings.loginButton}
                                </Button>

                            </div>
                        </form>
                    </Col>
                </Row>
                {loggedIn && <Redirect to="/profile"/>}
            </Container>
        </>
    );
};

export default SignInPage;