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
import SearchBox from "../../Header/SearchBox";

//CSS Imports
import "./LanguageCourseBox.css";
import "./Home.css"
import LanguageCourseBox from "./LanguageCourseBox";

let langStrings = new LocalizedStrings({
    en: {
        firstMessage: "Now I'm an English text",
        searchText: "Search something...",
        moreMessage: "Some more blah blah I guess...",
        textForCourses: "So what are you waiting for? Take our lessons today!",
        javaDescription: "Learn Java here if you think Tsoumakas is not good enough.",
        cPlusPlusDescription: "Learn C++ before Dr. Vraka's tests.",
        sqlDescription: "Gounaris is going to be so proud of you!",
        start: "START"
    },
    gr: {
        firstMessage: "Θα πάρουμε 10/10 γιατί ξέρουμε από μετάφραση",
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
            <div className="mainText">
                <h1>
                    <br/><br/>
                    {langStrings.firstMessage}
                    <br/><br/><br/>
                    {langStrings.searchText}
                    <br/><br/>

                    <div className="searchBoxContainer">
                        <SearchBox/>
                    </div>

                    <br/><br/><br/><br/>
                    {langStrings.moreMessage}
                    <br/><br/><br/><br/><br/><br/>
                    {langStrings.textForCourses}
                </h1>

            </div>
            <div className="container">
                <LanguageCourseBox
                    Title="Java"
                    IconURL={javaIcon}
                    Description={langStrings.javaDescription}
                    LinkReference="/java"
                />
                <LanguageCourseBox
                    Title="C++"
                    IconURL={cppIcon}
                    Description={langStrings.cPlusPlusDescription}
                    LinkReference="/cplusplus"
                />
                <LanguageCourseBox
                    Title="SQL"
                    IconURL={sqlIcon}
                    Description={langStrings.sqlDescription}
                    LinkReference="/sql"
                />
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <Footer/>
        </div>
    )
}

export default Home;