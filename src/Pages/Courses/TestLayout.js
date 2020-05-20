import React, {useState} from "react";
import axios from 'axios';
import {Container} from "reactstrap";
import {Alert, Button, Navbar, Row} from "react-bootstrap";
import profileImage from "../Profile/profileDefault.png";
import "./TestLayout.css"
import Editor from "./Editor";
import {useDispatch, useSelector} from "react-redux";
import LocalizedStrings from "react-localization";

import CongratsMessage from "./CongratsMessage"
import {changeCode, changeLoggedIn} from "../../actions";

function TestLayout() {
    const initialCode = "#include <iostream>\n" +
        "int main(){\n" +
        "//code\n" +
        "return 0;\n" +
        "}";
    const languageLearning = 'sql';
    const [output, setOutput] = useState('');
    const [answer, setAnswer] = //useState("Hello World!");
    useState(['SQL WRONG', 'C++ WHAT AM I DOING']);
    const [isCorrect, setIsCorrect] = useState(0); //0 for neutral, 1 for correct, 2 for incorrect, 3 for error.
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

    function checkAnswers(){
        function arraysEqual(_arr1, _arr2) {
            if (!Array.isArray(_arr1) || ! Array.isArray(_arr2) || _arr1.length !== _arr2.length)
                return false;
            let arr1 = _arr1.concat().sort();
            let arr2 = _arr2.concat().sort();
            for (let i = 0; i < arr1.length; i++) {
                if (arr1[i] !== arr2[i])
                    return false;
            }
            return true;
        }
        const a = answer.sort();
        const b = code.sort();
        if(arraysEqual(a, b)){
            setIsCorrect(1);
        }else{
            setIsCorrect(2);
        }
    }

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

            {isCorrect === 1 && <CongratsMessage/>}

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
                                <span className="breakWords newLines">
                                    {output}
                                </span>
                                <br/>
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
                        {
                            (languageLearning === 'java' || languageLearning === 'csharp')
                            &&
                            <ProgrammingLanguage
                                initialCode={initialCode}
                                languageLearning={languageLearning}
                                isCorrect={isCorrect}
                                output={output}
                                runCode={runCode}
                            />
                        }
                        {
                            languageLearning === 'sql'
                            &&
                            <QueryLanguage
                                checkAnswer={checkAnswers}
                                setChoices={setOutput}
                            />
                        }
                    </div>
                </Row>
            </Container>
        </>
    )

}

export default TestLayout;


function ProgrammingLanguage(props) {
    return (
        <>
            <div>
                <Button className="classArea" variant="success" onClick={props.runCode}>
                    <i className="fas fa-play"/>
                </Button>
                <Button className="classArea" variant="outline-info">main.cpp</Button>
            </div>

            <Editor
                code={props.initialCode}
                language={props.languageLearning}
            />

            <div className="outputArea">
                <div className="text-center bg-dark font-weight-bold text-white">output</div>
                <div className="outputText">{props.isCorrect !== 3 && props.output}</div>
            </div>
        </>
    )
}

function QueryLanguage(props) {
    const [checkedResponses, setCheckedResponses] = useState([]);
    const dispatch = useDispatch();
    const changeAnswers = (answers) => {
        dispatch(changeCode(answers))
    };
    const handleChange = (event) => {
        const choice = event.target.name;
        let res = checkedResponses.slice();
        if (res.includes(choice)) {
            res = res.filter(item => item !== choice);
        } else {
            res.push(choice);
        }

        changeAnswers(res);
        setCheckedResponses(res);
    };

    const choices = ["SELECT * FROM TABLE\nWHERE TABLE IS TABLE",
        "SQL RIGHT ANSWERRRRRRRRRRRRRRRRRRRR",
        "SQL WRONG",
        "C++ WHAT AM I DOING"];

    return (
        <>
            <div>
                <h2 className="mt-2">SELECT THE CORRECT ANSWER(S):</h2>
                <Container className="mt-3 mb-5" fluid={true}>
                    {choices.map((choice) =>
                        <Button
                            key={choice.toString()}
                            className="choicesButtons breakWords"
                            variant={checkedResponses.includes(choice) ? "primary" : "outline-primary"}
                            onClick={handleChange}
                            name={choice.toString()}>
                                <span className="choicesButtonsText outlinedText">
                                {choice}
                                </span>
                        </Button>
                    )}
                    <Button className="submitButton outlinedText" variant="success" size="lg" onClick={props.checkAnswer}>
                        <i className="fas fa-play"/> &nbsp; SUBMIT
                    </Button>
                </Container>



            </div>

        </>
    )
}