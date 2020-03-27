//Library Imports
import React from "react";
import {Link} from 'react-router-dom';
import LocalizedStrings from 'react-localization';
import {useSelector, useDispatch} from 'react-redux';
//Image Imports
import logo from "./logoTransparent.gif";
import greekFlag from "./lan_gr.png";
import britishFlag from "./lan_eng.png";
//Css Imports
import './Header.css';
import {changeLanguage} from "../actions";

const langStrings = new LocalizedStrings({
    en: {
        pricing: "Pricing",
        courses: "Courses"
    },
    gr: {
        pricing: "Τιμοκατάλογος",
        courses: "Μαθήματα"
    }
});

function Header() {
    const lang = useSelector(state => state.language);
    const dispatch = useDispatch();
    langStrings.setLanguage(lang);
    return (
        <div>
            <header>
                <Link to="/" className="logoImageHeaderContainer">
                    <img className="logoImageHeader" src={logo}
                         title="Go to FunC's main page"
                         height="100"
                         alt="FunC logo"/>
                </Link>
                <nav id="MainMenuNavigationBar">
                    <div className="leftMenu">
                        <ul id="mainMenu">
                            <li><Link to="/pricing">{langStrings.pricing}</Link></li>
                            <li><Link to="/courses">{langStrings.courses}</Link></li>
                        </ul>
                    </div>
                    <div className="rightMenu">
                        <ul id="languageMenu">
                            <li>
                                <a className="active_language"
                                   onClick={() => dispatch(changeLanguage('gr'))}
                                   name='gr'>
                                    <img
                                        name='gr'
                                        src={greekFlag}
                                        height="25"
                                        alt="Greek"/>
                                </a>
                            </li>
                            <li>
                                <a className="active_language"
                                   onClick={() => dispatch(changeLanguage('en'))}
                                   name='en'>
                                    <img
                                        name='en'
                                        src={britishFlag}
                                        height="25"
                                        alt="English"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;