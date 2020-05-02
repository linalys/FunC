import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Container, Input} from "reactstrap";
import {Button, Col, DropdownButton, Nav, Navbar, Row} from "react-bootstrap";
import profileImage from "../Profile/profileDefault.png";
import "./TestLayout.css"
import Editor from "./cplusplus/Editor";
import {useSelector} from "react-redux";


function TestLayout() {
    const initialCode = "#include &ltiostream&gt\n" +
        "int main(){\n" +
        "//code\n" +
        "return 0;\n" +
        "}";
    const code = useSelector(state => state.code);
    const runCode = () => {

        console.log(code);
        axios.post('http://localhost:5000/run/Cplusplus', {code})
            .then(res => {
                console.log(res.data);
            })
    };

    return (
        <>
            <Navbar bg="dark" sticky="top" className="inline-flex" id="fixedHeight">
                <div className="text-white outlinedText w-75">
                    <h3 className="responsiveTitle">C++/Hello World</h3>
                </div>
                <div className="anchorImage mb-1" id="stickRight">
                    <a href={"/profile"}>
                        <img src={profileImage} alt="Profile" className="profileHeaderIcon"/>
                    </a>
                </div>
            </Navbar>
            <Container fluid={true} className="h-100">
                <Row className="h-100">
                    <div className="columnArea">
                        <div className="lessonArea">
                            <h3>Lesson</h3>
                            No back-end, but here is where the lessons will be displayed

                            <hr style={{backgroundColor: "white"}}/>

                            <h3>Test</h3>
                            Now you should be a C++ master, so print me a nice Hello World!
                            your output must be exactly <br/>
                            <mark>Hello World!</mark>
                        </div>
                        <br/>
                        <Container fluid={true}>
                            <Button size="md" variant="secondary" className="m-1" href="/helloWord">
                                Back to lesson
                            </Button>
                            <Button size="md" variant="success" className="m-1" href="/input">
                                Next Lesson
                            </Button>
                        </Container>
                    </div>
                    <div className="columnArea">
                        <div>
                            <Button className="classArea" variant="success" onClick={runCode}>
                                <i className="fas fa-play"/>
                            </Button>
                            <Button className="classArea" variant="outline-info">main.cpp</Button>
                        </div>

                        <Editor code={initialCode}/>

                        <div className="outputArea">
                            output >>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    )

}

export default TestLayout;