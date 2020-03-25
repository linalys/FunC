//Library Imports
import React from "react";
import {Link} from 'react-router-dom';
//Image Imports
import logo from "./logoTransparent.gif";
import greekFlag from "./lan_gr.png";
import britishFlag from "./lan_eng.png";
//Css Imports
import './Header.css';

class Header extends React.Component{

    render() {
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
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="java.html">Java</Link></li>
                                <li><Link to="c++.html">C++</Link></li>
                                <li><Link to="more.html">More</Link></li>
                            </ul>
                        </div>
                        <div className="rightMenu">
                            <ul id="languageMenu">
                                <li>
                                    <a className="active_language" rel="alternate" hrefLang="el" href="../el/home.html">
                                        <img src={greekFlag}
                                             height="25"
                                             alt="Greek"/>
                                    </a>
                                </li>
                                <li>
                                    <a rel="alternate" hrefLang="en" href="../en/home.html">
                                        <img src={britishFlag}
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
}

export default Header;