//Library Imports
import React, {Component} from "react";
import LocalizedStrings from 'react-localization';
import {connect} from "react-redux";

//Component Imports
import Header from "../../../../Header/Header";
import Footer from "../../../../Footer/Footer";

//Image Imports
import defaultProfileImage from "./profileDefault.png";
import cppIcon from "../../../Home/CplusplusIcon.png";
import javaIcon from "../../../Home/javaIcon.png";
import sqlIcon from "../../../Home/SQLIcon.png";

//CSS Imports
import "./Profile.css"


import {Container} from "reactstrap";
import Row from "react-bootstrap/Row";
import LanguageCourseBoxProfile from "./LanguageCourseBoxProfile";
import {Button} from "react-bootstrap";
import SearchBox from "../../../../Header/SearchBox";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";


let langStrings = new LocalizedStrings({
    en: {
        keepLearning: "Keep Learning!",
        SettingText: "Account UserPasswordSettings",
        leftAt: "You're left at:",
        testsCompletedText1: "Tests",
        testsCompletedText2: "Completed",
        continueText: "Continue!",
        startText: "Start!"
    },
    gr: {
        keepLearning: "Συνέχισε να μαθαίνεις!",
        SettingText: "Ρυθμίσεις Λογαριασμού",
        leftAt: "Μείνατε στο:",
        testsCompletedText1: "Συμπληρωμένα",
        testsCompletedText2: "Tests",
        continueText: "Συνεχίστε!",
        startText: "Ξεκινήστε!"
    }
});

class Profile extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {

        const {user} = this.props.auth;

        return (

        <div>

            <Header/>
            <br/>
            <Container>
                <SearchBox/>
            </Container>
            <br/>
            <Container fluid={true} className="profileInfoArea">
                <Row>
                    <img className="profileImage"
                         src={defaultProfileImage}
                         alt="Profile Image"/>
                    <div className="profileNameText">
                        <h1>{user.name} </h1>
                        <h3>{"Free Member"}</h3>
                        <Button
                            href="/accountSettings"
                            variant="info"
                            className="text-white outlinedText"
                            size="lg">
                            {langStrings.SettingText}
                        </Button>
                    </div>


                    <div className="testsCompleted">
                        <h2>{"10"}</h2>
                        <h4>{langStrings.testsCompletedText1}<br/>{langStrings.testsCompletedText2}</h4>
                    </div>
                </Row>
            </Container>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1 className="text-center font-weight-bold text-white">{langStrings.keepLearning}</h1>

            <Container fluid={true}>
                <Row>
                    <LanguageCourseBoxProfile
                        IconURL={cppIcon}
                        StartMessage={langStrings.continueText}
                        progress={"20"}
                        currentSubject={"variables"}
                    />
                    <LanguageCourseBoxProfile
                        IconURL={javaIcon}
                        StartMessage={langStrings.continueText}
                        progress={"10"}
                        currentSubject={`"Hello World"`}
                    />
                    <LanguageCourseBoxProfile
                        IconURL={sqlIcon}
                        StartMessage={langStrings.startText}
                        progress={"0"}
                    />
                </Row>
            </Container>
            <button
                style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                }}
                onClick={this.onLogoutClick}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
                Logout
            </button>
            <br/>
            <Footer/>
        </div>
    )
    }
}


Profile.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Profile);