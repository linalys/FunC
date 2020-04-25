//Library Imports
import React from "react";
import LocalizedStrings from 'react-localization';
import {useSelector} from "react-redux";

//Component Imports
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";
import "./java.css"

import Sidebar from './sidebar';
import {Button} from "react-bootstrap"


let langStrings = new LocalizedStrings({
    gr: {
        intro: "Java is a high level, modern programming language designed in the early 1990s by Sun Microsystems, and currently owned by Oracle. It currently is one of the most wide-spread programming languages. \n" +
            "Java is an object-oriented languages, which means that it uses the terms of classes and objects. It is also portable, so you only have to write the program once to able to run it on a number of different platforms.\n",
        reasons: "Λόγοι για να χρησιμοποιήσετε Java",
        reasonsList1: "Java works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.)",
        reasonsList2: "It is one of the most popular programming language in the world.",
        reasonsList3: "It is easy to learn and simple to use.",
        reasonsList4: "It is open-source and free.",
        reasonsList5: "It is secure, fast and powerful.",
        reasonsList6: "It has a huge community support (tens of millions of developers).",
        reasonsList7: "Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs.",
        reasonsList8: "As Java is close to C++ and C#, it makes it easy for programmers to switch to Java or vice versa.",
        messageLesson:"Through our lessons you can learn about:",
        learn1:"Printing simple text.",
        learn2:"Reading numbers and text.",
        learn3:"Variables and their use.",
        learn4:"Calculating simple functions.",
        learn5:"Conditional logic.",
        learn6: "Loop functions.",

    },
    en: {

        intro: "Java is a high level, modern programming language designed in the early 1990s by Sun Microsystems, and currently owned by Oracle. It currently is one of the most wide-spread programming languages. \n" +
            "Java is an object-oriented languages, which means that it uses the terms of classes and objects. It is also portable, so you only have to write the program once to able to run it on a number of different platforms.\n",
        reasons: "Why Use Java",
        reasonsList1: "Java works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.)",
        reasonsList2: "It is one of the most popular programming language in the world.",
        reasonsList3: "It is easy to learn and simple to use.",
        reasonsList4: "It is open-source and free.",
        reasonsList5: "It is secure, fast and powerful.",
        reasonsList6: "It has a huge community support (tens of millions of developers).",
        reasonsList7: "Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs.",
        reasonsList8: "As Java is close to C++ and C#, it makes it easy for programmers to switch to Java or vice versa.",
        messageLesson:"Through our lessons you can learn about:",
        learn1:"Printing simple text.",
        learn2:"Reading numbers and text.",
        learn3:"Variables and their use.",
        learn4:"Calculating simple functions.",
        learn5:"Conditional logic.",
        learn6: "Loop functions.",

    }
});


function cpp() {
    langStrings.setLanguage(useSelector(state => state.language));
    return (
        <div>
            <Header/>
            <Sidebar/>
            <div >
                <h1>JAVA</h1>
                <p className="introText">{langStrings.intro}</p>
                <br/><br/>
                <h3 className="reasonsTitle">{langStrings.reasons}</h3>

                <ul className="reasons">
                    <li>{langStrings.reasonsList1}</li>
                    <li>{langStrings.reasonsList2}</li>
                    <li>{langStrings.reasonsList3}</li>
                    <li>{langStrings.reasonsList4}</li>
                    <li>{langStrings.reasonsList5}</li>
                    <li>{langStrings.reasonsList6}</li>
                    <li>{langStrings.reasonsList7}</li>
                    <li>{langStrings.reasonsList8}</li>
                </ul>
                <br/><br/>
                <h3>{langStrings.messageLesson}</h3>
                <ul className="reasons">
                    <li>{langStrings.learn1}</li>
                    <li>{langStrings.learn2}</li>
                    <li>{langStrings.learn3}</li>
                    <li>{langStrings.learn4}</li>
                    <li>{langStrings.learn5}</li>
                    <li>{langStrings.learn6}</li>
                </ul>
                <br/><br/>
                <Button variant={"dark"} size="lg" className="mb-3">
                    Start Learning
                </Button>
                <br/>
            </div>
            <br/><br/>
            <Footer/>
        </div>


    )

}

export default cpp;
