import React, {useState} from "react";
import {MDBInput} from 'mdbreact';
import {Container, Row, Col, Button, Alert} from "react-bootstrap";
import {loginUser} from "../../actions/authActions";
import {useDispatch, useSelector} from "react-redux";
import LocalizedStrings from "react-localization";

const langStrings = new LocalizedStrings({
    en: {
        signIn: "Sign in",
        typeEmail: "Type your email",
        typePassword: "Type your password",
        loginButton: "Login",
        oops: "Oops!",
        failedToLogin: "The email or password is incorrect.",
        success: "Congratulations!",
        successMessage : "You have successfully logged in."
    },
    gr: {
        signIn: "Σύνδεση",
        typeEmail: "Εισάγετε το email σας",
        typePassword: "Εισάγετε τον κωδικό σας",
        loginButton: "Σύνδεση",
        oops: "Ουπς!",
        failedToLogin: "Το email ή ο κωδικός είναι λάθος.",
        success: "Συγχαρητήρια!",
        successMessage : "Επιτυχής Σύνδεση."


    }
});

const SignInPage = () => {
    const loggedIn = useSelector(state => state.auth);
    if (loggedIn.isAuthenticated){
        window.location.href = "/profile";
    }
    const errors = useSelector(state => state.credentialErrors);
    const failMessage = Object.keys(errors).length !== 0;
    const successMessage = Object.keys(errors).length === 0;


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const lang = useSelector(state => state.language);
    langStrings.setLanguage(lang);

    const dispatch = useDispatch();

    function onEmailChange(event) {
        setEmail(event.target.value);
    }

    function onPasswordChange(event) {
        setPassword(event.target.value);
    }

    function LogIn() {
        dispatch(loginUser( {email: email, password: password}));
    }

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
            {successMessage &&
            <Container className="pl-5 pr-5" fluid={true}>
                <Alert variant="success">
                    <Alert.Heading><b>{langStrings.success}</b></Alert.Heading>
                    {langStrings.successMessage}
                </Alert>
            </Container>
            }
            <Container style={{color: "white"}}>
                <Row>
                    <Col md="12">
                        <form>
                            <h1 className="text-center mb-4">{langStrings.signIn}</h1>
                            <div className="grey-text">
                                <MDBInput label={langStrings.typeEmail}
                                          id="email"
                                          icon="envelope" group type="email" validate
                                          error="wrong"
                                          success="right" className="bg-dark text-white" size="lg"
                                          onChange={onEmailChange}/>
                                <MDBInput label={langStrings.typePassword}
                                          id="password"
                                          icon="lock" group type="password" validate
                                          className="bg-dark text-white" size="lg" onChange={onPasswordChange}/>
                            </div>
                            <div className="text-center mb-3">
                                <Button size="lg"
                                        onClick={LogIn}
                                        className="w-100 outlinedText"
                                        variant="success">
                                    {langStrings.loginButton}
                                </Button>

                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default SignInPage;