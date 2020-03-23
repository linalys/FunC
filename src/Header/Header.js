import React from "react";
import SearchBox from "./SearchBox";

import logo from "./logoTransparent.gif"

class Header extends React.Component{

    render() {
        return (
            <div>
                <header>
                    <a href="home.html" className="logoImageHeaderContainer">
                        <img className="logoImageHeader" src={logo}
                             title="Go to FunC's main page"
                             height="100"
                             alt="FunC logo"/>
                    </a>
                    <SearchBox/>
                    <div className="icon-bar">
                        <a href="#" className="facebook"><i className="fa fa-facebook"/></a>
                        <a href="#" className="twitter"><i className="fa fa-twitter"/></a>
                        <a href="#" className="google"><i className="fa fa-google"/></a>
                        <a href="#" className="linkedin"><i className="fa fa-linkedin"/></a>
                        <a href="#" className="youtube"><i className="fa fa-youtube"/></a>
                    </div>

                    <nav id="topnav">
                        <div className="leftmenu">
                            <ul id="mainmenu">
                                <li><a className="active" href="home.html">Home</a></li>
                                <li><a href="introduction.html">Introduction</a></li>
                                <li><a href="java.html">Java</a></li>
                                <li><a href="c++.html">C++</a></li>
                                <li><a href="more.html">More</a></li>
                            </ul>
                        </div>
                        <div className="rightmenu">
                            <ul id="languagemenu">
                                <li>
                                    <a className="active_language" rel="alternate" hrefLang="el" href="../el/home.html">
                                    <small>Ελληνικά</small> </a></li>
                                <li>
                                    <a rel="alternate" hrefLang="en" href="../en/home.html"> <small>English</small> </a>
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