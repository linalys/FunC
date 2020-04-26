import React from "react";
import {Container, Input} from "reactstrap";
import {Button, Col, DropdownButton, Nav, Navbar, Row} from "react-bootstrap";
import profileImage from "../Profile/profileDefault.png";
import "./TestLayout.css"

function TestLayout() {

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
                            <Button size="md" variant="secondary" className="m-1">
                                Back to lessons list
                            </Button>
                            <Button size="md" variant="success" className="m-1">
                                Next test
                            </Button>
                        </Container>
                    </div>
                    <div className="columnArea">
                        <div>
                            <Button className="classArea" variant="success"><i className="fas fa-play"/></Button>
                            <Button className="classArea" variant="outline-info">main.cpp</Button>
                        </div>

                        <Input
                            className="editorArea bg-transparent text-white align-text-top"
                            type="textarea"
                            spellCheck="false"
                            defaultValue=
                                "#include <iostream>
                               int main(){
                                    //code
                                    return 0;
                               }"
                        />

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