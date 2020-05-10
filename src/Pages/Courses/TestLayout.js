import React, {useState} from "react";
import axios from 'axios';
import {Container} from "reactstrap";
import {Alert, Button, Navbar, Row} from "react-bootstrap";
import profileImage from "../Profile/profileDefault.png";
import "./TestLayout.css"
import Editor from "./cplusplus/Editor";
import {useSelector} from "react-redux";
import LocalizedStrings from "react-localization";


function TestLayout() {
    const initialCode = "#include <iostream>\n" +
        "int main(){\n" +
        "//code\n" +
        "return 0;\n" +
        "}";
    const [output, setOutput] = useState('');
    const [answer, setAnswer] = useState("Hello World!");
    const [isCorrect, setIsCorrect] = useState(0); //0 for neutral, 1 for correct, 2 for incorrect.
    const code = useSelector(state => state.code);
    const runCode = () => {
        axios.post('/api/run/Cplusplus', {code})
            .then(axios.get('/api/run/get/Cplusplus')
                .catch(err => console.log(err))
                .then(res => {
                    if (res) {
                        const type = res.data.toString().charAt(0);
                        const out = res.data.toString().substr(1);
                        setOutput(out);
                        if (type === "1") {
                            setIsCorrect(3);
                        } else if (out === answer) {
                            setIsCorrect(1);
                        } else {
                            setIsCorrect(2);
                        }
                    } else {
                        console.log("Respond was undefined...");
                    }
                }))
    };

    let langStrings = new LocalizedStrings({
        en: {},
        gr: {}
    });
    langStrings.setLanguage(useSelector(state => state.language));
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

                        {
                            isCorrect === 1 &&
                            <Alert variant="success" className="m-3 breakWords">
                                <Alert.Heading className="greenText outlinedText responsiveTitle">
                                    Congratulations! <i className="fas fa-check"/>
                                </Alert.Heading>
                                You have passed this test. Click on <b>Next Lesson</b> to continue.
                            </Alert>
                        }

                        {
                            isCorrect === 2 &&
                            <Alert variant="danger" className="m-3 breakWords">
                                <Alert.Heading className="redText outlinedText responsiveTitle">
                                    Sorry... <i className="fas fa-times"/>
                                </Alert.Heading>
                                This is not the correct answer. Try again!<br/>
                            </Alert>
                        }

                        {
                            isCorrect === 3 &&
                            <Alert variant="danger" className="m-3 breakWords">
                                <Alert.Heading className="redText responsiveTitle">
                                    <strong className="outlinedText">Error.</strong> <i className="fas fa-info-circle"/>
                                </Alert.Heading>
                                {output}<br/>
                            </Alert>
                        }


                        <div className="lessonArea">
                            <h3>Lesson</h3>

                            I like drinking milk.
                            It makes me go&nbsp;
                            <span className="superRainbowText font-weight-bold">YES.&nbsp;</span>
                            I dislike drinking apple juice.

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

                        <Editor
                            code={initialCode}
                        />

                        <div className="outputArea">
                            <div className="text-center bg-dark font-weight-bold text-white">output</div>
                            <div className="outputText">{isCorrect !== 3 && output}</div>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    )

}

export default TestLayout;