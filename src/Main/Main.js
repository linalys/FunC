import React from "react";

import cIcon from "./CIcon.png";
import cppIcon from "./CplusplusIcon.png";
import javaIcon from "./javaIcon.png";
import sqlIcon from "./SQLIcon.png"

class Main extends React.Component {

    render() {
        return (
            <div>
                <div className="mainText" id="trans-home">
                    <h1>
                        We will win for once, boomer.
                        <br/>
                        Because you see, we know better than the Cypriot Efstathiou Stefanos.
                    </h1>
                </div>
                <div
                    className="container">
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
            </div>
        )
    }

}

export default Main;