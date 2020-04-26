//Library Imports
import React from "react";
import LocalizedStrings from 'react-localization';
import {useSelector} from "react-redux";

//Component Imports
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";

import Sidebar from './components/sidebar';
import {Button} from "react-bootstrap"



let langStrings = new LocalizedStrings({
    gr: {
        intro: "(ελληνικα)C++ is a high-level, general-purpose programming language created by Bjarne Stroustrup as an " +
            "extension of the C programming language, also referred to as \"C with Classes\". The language has" +
            " expanded significantly over time, and modern C++ has object-oriented, generic, and functional features" +
            " in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language. (ελληνικα)",
        reasons: "Λόγοι για να χρησιμοποιήσετε C++",
        reasonsList1: "C++ is one of the world's most popular programming languages.",
        reasonsList2: "C++ can be found in today's operating systems, Graphical User Interfaces, and embedded systems.",
        reasonsList3: "C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused, lowering development costs.",
        reasonsList4: "C++ is portable and can be used to develop applications that can be adapted to multiple platforms.",
        reasonsList5: "C++ is fun and easy to learn.",
        reasonsList6: "As C++ is close to C# and Java, it makes it easy for programmers to switch to C++ or vice versa.",
        messageLesson:"Through our lessons you can learn about:",
        learn1:"Printing simple text.",
        learn2:"Reading numbers and text.",
        learn3:"Variables and their use.",
        learn4:"Calculating simple functions.",
        learn5:"Conditional logic.",
        learn6: "Loop functions.",

    },
    en: {
        intro: "C++ is a high-level, general-purpose programming language created by Bjarne Stroustrup as an " +
            "extension of the C programming language, also referred to as \"C with Classes\". The language has" +
            " expanded significantly over time, and modern C++ has object-oriented, generic, and functional features" +
            " in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language.",
        reasons: "Why Use C++",
        reasonsList1: "C++ is one of the world's most popular programming languages.",
        reasonsList2: "C++ can be found in today's operating systems, Graphical User Interfaces, and embedded systems.",
        reasonsList3: "C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused, lowering development costs.",
        reasonsList4: "C++ is portable and can be used to develop applications that can be adapted to multiple platforms.",
        reasonsList5: "C++ is fun and easy to learn.",
        reasonsList6: "As C++ is close to C# and Java, it makes it easy for programmers to switch to C++ or vice versa.",
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
            <div className="courses">
                <h1>C++</h1>
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
                </ul>
                <br/><br/>
                <h3>{langStrings.messageLesson} </h3>
                <ul className="reasons">
                    <li>{langStrings.learn1}</li>
                    <li>{langStrings.learn2}</li>
                    <li>{langStrings.learn3}</li>
                    <li>{langStrings.learn4}</li>
                    <li>{langStrings.learn5}</li>
                    <li>{langStrings.learn6}</li>
                </ul>
                <br/><br/>
                <Button variant={"dark"} size="lg" className="mb-3" href='/helloWord'>
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
