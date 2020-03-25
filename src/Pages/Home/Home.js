//Library Imports
import React from "react";

//Image Imports
import cIcon from "./CIcon.png";
import cppIcon from "./CplusplusIcon.png";
import javaIcon from "./javaIcon.png";
import sqlIcon from "./SQLIcon.png"

//Component Imports
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import SearchBox from "../../Header/SearchBox";
import SocialMediaBar from "../../Header/SocialMediaBar";

//CSS Imports
import "./LanguageCourseBox.css";
import "./Home.css"

class Home extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <SocialMediaBar/>
                <div className="mainText">
                    <h1>
                        <br/><br/>
                        We will win for once, boomer.
                        <br/>
                        Because you see, we know better than the Cypriot Efstathiou Stefanos.
                        <br/><br/><br/>
                        Search something...
                        <br/><br/>

                        <div className="searchBoxContainer">
                            <SearchBox/>
                        </div>

                        <br/><br/><br/><br/>
                        Some more blah blah I guess...
                        <br/><br/><br/><br/><br/><br/>
                        So what are you waiting for? Take our lessons today!
                    </h1>
                    
                </div>
                <div className="container">
                    <div className="box">
                        <div className="imgBx">
                            <a href="">
                                <img src={javaIcon}
                                     alt={javaIcon}/>
                            </a>
                        </div>
                        <div className="content">
                            <h2>Java</h2>
                            <p>This is a Java tutorial.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div className="box">
                        <div className="imgBx">
                            <a href="#">
                                <img src={cppIcon}
                                     alt={cppIcon}/>
                            </a>
                        </div>
                        <div className="content">
                            <h2>C++</h2>
                            <p>This is a C++ tutorial.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div className="box">
                        <div className="imgBx">
                            <a href="https://imgur.com/RL5Y1Zy">
                                <img src={sqlIcon}
                                     alt={sqlIcon}/>
                            </a>
                        </div>
                        <div className="content">
                            <h2>SQL</h2>
                            <p>This is a SQL tutorial.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Home;