//Library Imports
import React from "react";
import LocalizedStrings from 'react-localization';
import {useSelector} from "react-redux";

//Image Imports
//import cIcon from "./CIcon.png";
import cppIcon from "./CplusplusIcon.png";
import javaIcon from "./javaIcon.png";
import sqlIcon from "./SQLIcon.png";

//Component Imports
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

//CSS Imports
import "./LanguageCourseBox.css";
import "./Home.css"
import LanguageCourseBox from "./LanguageCourseBox";
import {Row} from "react-bootstrap";
import {Container} from "reactstrap";
import CarouselPage from "./Carousel";

let langStrings = new LocalizedStrings({
    en: {
        Question1: "What is the purpose of this website?",
        Message1: "FunC aims to help people make their first steps into the programming community." +
            " It provides basic knowledge on various major programming languages." +
            " It’s up to the user to decide which one to begin with.",
        Question2: "How do the lessons work?",
        Message2: "Every language has a list of topics that describe a phenomenon in said language. " +
            "Each topic consists of the theoretical - the use, the grammar and syntax - and the practical – " +
            "examples – parts. There is also a testing part, provided only to the subscribers of the page. " +
            "After the user has become familiar with the phenomenon, they can move one to the next one.",
        Question3: "Why subscribe and create a profile?",
        Message3: "When logged in your FunC profile, you have a series of advantages. First of all, " +
            "you have access to personal tests in each topic of every lesson, for evaluation of your " +
            "skills and further training. Also, you know at any point how far along are you in the course, " +
            "and your progress is saved, so that you can continue at any moment from any device. ",
        Question4: "Who are we?",
        Message4: "We are a team of undergraduate students, tasked to build up their own website, with " +
            "a subject of our choosing. And what better way to promote your studies than sharing your knowledge. " +
            "It is, indeed, amateur work, so feel free to give us your feedback with comments and reactions " +
            "on our lessons, to help us help you get the best possible experience while learning how to code.",
        searchText: "Search something...",
        moreMessage: "Some more blah blah I guess...",
        textForCourses: "So what are you waiting for? Take our lessons today!",
        javaDescription: "Learn Java here if you think Tsoumakas is not good enough.",
        cPlusPlusDescription: "Learn C++ before Dr. Vraka's tests.",
        sqlDescription: "Gounaris is going to be so proud of you!",
        start: "START"
    },
    gr: {
        Question1: "Ποιος είναι ο σκοπός αυτής της ιστοσελίδας;",
        Message1: "FunC aims to help people make their first steps into the programming community." +
            " It provides basic knowledge on various major programming languages." +
            " It’s up to the user to decide which one to begin with.",
        Question2: "How do the lessons work?",
        Message2: "Every language has a list of topics that describe a phenomenon in said language. " +
            "Each topic consists of the theoretical - the use, the grammar and syntax - and the practical – " +
            "examples – parts. There is also a testing part, provided only to the subscribers of the page. " +
            "After the user has become familiar with the phenomenon, they can move one to the next one.",
        Question3: "Why subscribe and create a profile?",
        Message3: "When logged in your FunC profile, you have a series of advantages. First of all, " +
            "you have access to personal tests in each topic of every lesson, for evaluation of your " +
            "skills and further training. Also, you know at any point how far along are you in the course, " +
            "and your progress is saved, so that you can continue at any moment from any device. ",
        Question4: "Who are we?",
        Message4: "We are a team of undergraduate students, tasked to build up their own website, with " +
            "a subject of our choosing. And what better way to promote your studies than sharing your knowledge. " +
            "It is, indeed, amateur work, so feel free to give us your feedback with comments and reactions " +
            "on our lessons, to help us help you get the best possible experience while learning how to code.",
        searchText: "Ποίησε ζήτημα",
        moreMessage: "μᾶλλον μπλα μπλα ἐννοέω",
        textForCourses: "Τί μένεις; Πάρον τα μαθήματα ἡμῶν σήμερον!",
        javaDescription: "Μάθε Java καλύτερα και από τον Τσομυ.",
        cPlusPlusDescription: "C++ όπως ακριβώς στις διαφάνειες του Βράκα.",
        sqlDescription: "Ώρα να αντιμετωπίσεις το μάθημα του Γούναρη.",
        start: "ΞΕΚΙΝΗΣΤΕ"
    }
});

function Home() {
    langStrings.setLanguage(useSelector(state => state.language));
    return (
        <div>
            <Header/>

            <Container className="d-flex flex-column text-white">
                <h1 className="font-weight-bold">FunC</h1>
                <h5 className="font-italic">The fancy way to learn how to code.</h5>
            </Container>
            <Container>
                <CarouselPage
                    question1={langStrings.Question1}
                    question2={langStrings.Question2}
                    question3={langStrings.Question3}
                    question4={langStrings.Question4}
                    message1={langStrings.Message1}
                    message2={langStrings.Message2}
                    message3={langStrings.Message3}
                    message4={langStrings.Message4}
                />
            </Container>
            <br/>
            <br/>
            <Container>
                <Row>
                    <LanguageCourseBox
                        IconURL={javaIcon}
                        Description={langStrings.javaDescription}
                        StartMessage={langStrings.start}
                        LinkReference="/java"/>
                    <LanguageCourseBox
                        IconURL={cppIcon}
                        Description={langStrings.cPlusPlusDescription}
                        StartMessage={langStrings.start}
                        LinkReference="/cplusplus"/>
                    <LanguageCourseBox
                        IconURL={sqlIcon}
                        Description={langStrings.sqlDescription}
                        StartMessage={langStrings.start}
                        LinkReference="/sql"/>
                </Row>
            </Container>
            <br/>
            <Footer/>
        </div>
    )
}

export default Home;