//Library Imports
import React, {useState} from "react";
import LocalizedStrings from 'react-localization';
import {useSelector} from "react-redux";

//Component Imports
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

//Image Imports
import defaultProfileImage from "./profileDefault.png";
import cppIcon from "../Home/CplusplusIcon.png";
import javaIcon from "../Home/javaIcon.png";
import sqlIcon from "../Home/SQLIcon.png";

//CSS Imports
import "./Profile.css"


import {Container} from "reactstrap";
import Row from "react-bootstrap/Row";
import LanguageCourseBoxProfile from "./LanguageCourseBoxProfile";
import SearchBox from "../../Header/SearchBox";
import {Button} from "react-bootstrap";
import {Helmet} from "react-helmet";

let langStrings = new LocalizedStrings({
    en: {
        keepLearning: "Keep Learning!",
        SettingText: "Account Settings",
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

function Profile() {
    langStrings.setLanguage(useSelector(state => state.language));

    const [name, setName] = useState("Marinos Poiitis");
    const [profileImage, setProfileImage] = useState(defaultProfileImage);
    const [membership, setMembership] = useState("Free Member");
    const [testsCompleted, setTestsCompleted] = useState("10");

    return (
        <div>
            <Helmet><title>{"Profile | FunC"}</title></Helmet>
            <Header/>
            <br/>
            <Container>
                <SearchBox/>
            </Container>
            <br/>
            <Container fluid={true} className="profileInfoArea">
                <Row>
                    <img className="profileImage"
                         src={profileImage}
                         alt="Profile Image"/>
                    <div className="profileNameText">
                        <h1 >{name} </h1>
                        <h3>{membership}</h3>
                        <Button
                            href="/accountSettings"
                            variant="info"
                            className="text-white outlinedText"
                            size="lg">
                            {langStrings.SettingText}
                        </Button>
                    </div>


                    <div className="testsCompleted">
                        <h2>{testsCompleted}</h2>
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
            <br/>
            <Footer/>
        </div>
    )
}

export default Profile;