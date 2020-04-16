//Library Imports
import React, {useState} from "react";
import LocalizedStrings from 'react-localization';
import {useSelector} from "react-redux";

//Component Imports
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

//Image Imports
import cIcon from "./../Home/CIcon.png";
import cppIcon from "../Home/CplusplusIcon.png";
import javaIcon from "../Home/javaIcon.png";
import sqlIcon from "../Home/SQLIcon.png";

//CSS Imports
import "./Profile.css"


import {Badge, Col, Container} from "reactstrap";
import Row from "react-bootstrap/Row";
import LanguageCourseBoxProfile from "./LanguageCourseBoxProfile";
import SearchBox from "../../Header/SearchBox";

let langStrings = new LocalizedStrings({
    en: {},
    gr: {}
});

function Profile() {
    langStrings.setLanguage(useSelector(state => state.language));

    const [name, setName] = useState("Marinos Poiitis");
    const [profileImage, setProfileImage] = useState(cIcon);
    const [membership, setMembership] = useState("Free Member");
    const [testsCompleted, setTestsCompleted] = useState("10");

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
                         src="https://oswinds.csd.auth.gr/sites/default/files/people/photos/160x200-poiitis.png"
                         alt="Profile Image"/>
                    <h1
                        className="profileNameText">{name}
                        <h3>{membership}</h3>
                    </h1>


                    <h2 className="testsCompleted">
                        {testsCompleted}
                        <h4>Tests<br/>Completed</h4>
                    </h2>
                </Row>
            </Container>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1 className="text-center font-weight-bold text-white">Keep Learning!</h1>

            <Container fluid={true}>
                <Row>
                    <LanguageCourseBoxProfile
                        IconURL={cppIcon}
                        StartMessage={"Continue!"}
                        progress={"20"}
                        currentSubject={"variables"}
                    />
                    <LanguageCourseBoxProfile
                        IconURL={javaIcon}
                        StartMessage={"Continue!"}
                        progress={"10"}
                        currentSubject={`"Hello World"`}
                    />
                    <LanguageCourseBoxProfile
                        IconURL={sqlIcon}
                        StartMessage={"Start!"}
                        progress={"0"}
                    />
                </Row>
            </Container>
            <br/>
            <Footer/>
        </div>
    )
}

export default Profile;