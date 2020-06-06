//Library Imports
import React from "react";
import LocalizedStrings from 'react-localization';
import {useSelector} from "react-redux";

//Component Imports
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

import Sidebar from './sidebar';
import {Button} from "react-bootstrap"
import "./Style.css"


function StartPage(props) {

    let langStrings = new LocalizedStrings({
        en: {
            reasons: "Why Use ",
            messageLesson: "Through our lessons you can learn about:",
            start: "Start Learning"

        },
        gr: {
            reasons: "Γιατί να χρησιμοποιήσεις την ",
            messageLesson: "Μέσω των μαθημάτων μας μπορείτε να μάθετε για:",
            start: "Ξεκινήστε τα Μαθήματα"
        }
    });

    const reasonsList = props.reasonsMessage.map((item, i) => {
        return <li key={i}>{item}</li>
    });
    const messageList = props.learnMessage.map((item, i) => {
        return <li key={i}>{item}</li>
    });


    langStrings.setLanguage(props.language);
    return (
        <div>
            <Header/>
            <Sidebar Lessons={props.lessonList}/>
            <div className="courses">
                <h1 className="title superRainbowText outlineForRainbowTextTHICC">{props.title}</h1>
                <p className="introText">{props.intro}</p>
                <br/><br/>
                <h3 className="text-left">{langStrings.reasons + props.title}</h3>

                <ul>
                    {reasonsList}
                </ul>

                <br/><br/>
                <h3 className="text-left">{langStrings.messageLesson} </h3>

                <ul>
                    {messageList}
                </ul>

                <br/><br/>
                <div className="startLearning">
                    <Button variant="dark" size="lg" className="startLearning" href='/helloWord'>
                        <b className="text"> {langStrings.start}</b>
                    </Button>
                </div>
                <br/>
            </div>
            <br/>
            <br/>
            <Footer/>
        </div>


    )

}

export default StartPage;
