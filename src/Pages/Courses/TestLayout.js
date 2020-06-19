import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Container} from "reactstrap";
import {Alert, Button, Navbar, Row} from "react-bootstrap";
import profileImage from "../Forms/components/dashboard/profileDefault.png";
import "./TestLayout.css"
import Editor from "./Editor";
import {useDispatch, useSelector} from "react-redux";
import LocalizedStrings from "react-localization";

import CongratsMessage from "./CongratsMessage"
import {changeCode} from "../../actions";

function TestLayout() {
    const myUrl = window.location.pathname.split("/");
    if (myUrl.length < 4) {
        window.location.href = "/error404";
    }
    const language = myUrl[2];
    const title = myUrl[3];

    //Variables to be initialised from database
    const [testData, setTestData] = useState({
        lessonSummary: '',
        test: '',
        initialCode: '',
        choices: '',
        answer: ''
    });
    const [nextLessonURL, setNextLessonURL] = useState('');
    useEffect(() => {
        async function getTest() {
            const url = '/api/test/' + language + '/' + title;
            axios.get(url)
                .then((response) => {
                    const data = response.data[0];

                    setTestData({
                        lessonSummary: data.lessonSummary,
                        test: data.test,
                        initialCode: data.initialCode,
                        choices: data.choices,
                        answer: data.answer
                    });
                }).then()
                .catch(() => {
                    alert('Error retrieving the test! :(');
                });
        }
        async function getNextLesson(){
            const url = '/api/lesson/get-next/' + language + '/' + title;
            console.log(url);
            axios.get(url)
                .then((response) => {
                    const data = response.data;
                    console.log(data);
                    setNextLessonURL(data.toString());
                }).then()
                .catch(() => {
                    alert('Error retrieving the next Lesson! :(');
                });
        }
        getTest().then(getNextLesson)
    }, []);


    const languageLearning = decodeURIComponent(language) === 'c++' ? 'csharp' : 'java';
    const [output, setOutput] = useState('');
    const [isCorrect, setIsCorrect] = useState(0); //0 for neutral, 1 for correct, 2 for incorrect, 3 for error.
    let code = useSelector(state => state.code);
    const runCode = () => {
        let editedCode = handleInputCode(code).toString();
        axios.post('/api/run/Cplusplus', {code: editedCode})
            .then(axios.get('/api/run/get/Cplusplus')
                .catch(err => console.log(err))
                .then(res => {
                    if (res) {
                        const type = res.data.toString().charAt(0);
                        const out = res.data.toString().substr(1);
                        setOutput(out);
                        if (type === "1") {
                            setIsCorrect(3);
                        } else if (out === testData.answer) {
                            setIsCorrect(1);
                        } else {
                            setIsCorrect(2);
                        }
                    } else {
                        console.log("Respond was undefined...");
                    }
                }))
    };

    function checkAnswers() {
        function arraysEqual(_arr1, _arr2) {
            if (!Array.isArray(_arr1) || !Array.isArray(_arr2) || _arr1.length !== _arr2.length)
                return false;
            let arr1 = _arr1.concat().sort();
            let arr2 = _arr2.concat().sort();
            for (let i = 0; i < arr1.length; i++) {
                if (arr1[i] !== arr2[i])
                    return false;
            }
            return true;
        }

        const a = testData.answer.sort();
        const b = code.sort();
        if (arraysEqual(a, b)) {
            setIsCorrect(1);
        } else {
            setIsCorrect(2);
        }
    }

    let langStrings = new LocalizedStrings({
        en: {
            LessonTitle: "Lesson Summary",
            TestTitle: "Test Exercise",
            NextLesson: "Next Lesson",
            BackToLesson: "Back to Lesson",
            CongratulationsTitle: "Congratulations",
            CongratulationsText: "You have passed this test. Click on \"Next Lesson\" to continue.",
            SorryTitle: "Sorry...",
            SorryText: "This is not the correct answer. Try again!",
            ErrorTitle: "Error.",
            OutputTitle: "OUTPUT"
        },
        gr: {
            LessonTitle: "Περίληψη Μαθήματος",
            TestTitle: "Εκφώνηση του Τεστ",
            NextLesson: "Επόμενο Μάθημα",
            BackToLesson: "Πίσω στο Μάθημα",
            CongratulationsTitle: "Συγχαρητήρια",
            CongratulationsText: "Έχετε περάσει το τεστ. Πατήστε το \"Επόμενο Μάθημα\" για να συνεχίσετε.",
            SorryTitle: "Κρίμα...",
            SorryText: "Αυτή δεν είναι η σωστή απάντηση. Προσπαθήστε ξανά!",
            ErrorTitle: "Σφάλμα.",
            OutputTitle: "ΈΞΟΔΟΣ"
        }
    });

    const textLanguage = useSelector(state => state.language);
    langStrings.setLanguage(textLanguage);

    return (
        <>
            <Navbar bg="dark" sticky="top" className="inline-flex" id="fixedHeight">
                <div className="text-white outlinedText w-75">
                    <h3 className="responsiveTitle">{decodeURIComponent(language).toUpperCase()}/{decodeURIComponent(title)}</h3>
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
                            <Alert variant="success" className="m-lg-3 m-sm-1 breakWords">
                                <Alert.Heading className="greenText outlinedText responsiveTitle">
                                    {langStrings.CongratulationsTitle} <i className="fas fa-check"/>
                                </Alert.Heading>
                                {langStrings.CongratulationsText}
                            </Alert>
                        }

                        {
                            isCorrect === 2 &&
                            <Alert variant="danger" className="m-lg-3 m-sm-1 breakWords">
                                <Alert.Heading className="redText outlinedText responsiveTitle">
                                    {langStrings.SorryTitle} <i className="fas fa-times"/>
                                </Alert.Heading>
                                {langStrings.SorryText}<br/>
                            </Alert>
                        }

                        {
                            isCorrect === 3 &&
                            <Alert variant="danger" className="m-lg-3 m-sm-1 breakWords">
                                <Alert.Heading className="redText responsiveTitle">
                                    <strong className="outlinedText">{langStrings.ErrorTitle}</strong>
                                    <i className="fas fa-info-circle"/>
                                </Alert.Heading>
                                <span className="breakWords newLines">
                                    {output}
                                </span>
                                <br/>
                            </Alert>
                        }


                        <div className="lessonArea">
                            <h3>{langStrings.LessonTitle}</h3>

                            {testData.lessonSummary[textLanguage]}

                            <hr style={{backgroundColor: "white"}}/>
                            <h3>{langStrings.TestTitle}</h3>

                            {testData.test[textLanguage]}

                        </div>
                        <br/>
                        <Container fluid={true}>
                            <Button size="md"
                                    variant="secondary"
                                    className="m-1"
                                    href={"/lesson/" + language + "/" + title}>
                                {langStrings.BackToLesson}
                            </Button>
                            <Button size="md"
                                    disabled={isCorrect !== 1}
                                    variant="success"
                                    className="m-1"
                                    hidden={nextLessonURL===''}
                                    href={nextLessonURL}>
                                {langStrings.NextLesson}
                            </Button>
                        </Container>
                    </div>
                    <div className="columnArea">
                        {
                            (languageLearning === 'java' || languageLearning === 'csharp')
                            &&
                            <ProgrammingLanguage
                                initialCode={testData.initialCode}
                                languageLearning={languageLearning}
                                isCorrect={isCorrect}
                                output={output}
                                outputTitle={langStrings.OutputTitle}
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

//This function checks if there is an input system.
function handleInputCode(code) {
    code = code.toString();
    code = code.replace(/ +/g, ' ');

    const inputCommands = ["std::cin", "cin"];

    let searchAgain;
    do {
        searchAgain = true;
        for (let i = 0; i < inputCommands.length; i++) {
            const element = inputCommands[i];
            if (code.includes(element)) {
                const command = code.indexOf(element);
                const semicolon = code.indexOf(';', command);
                const line = code.substring(command, semicolon);
                const operator = line.indexOf('>>');
                const variable = line.substring(operator + 2, semicolon);
                const val = prompt(variable + " =");
                code = code.replace(line, variable + "=" + val);
                searchAgain = false;
                break;
            }
        }
    } while (!searchAgain);
    return code;
}

function ProgrammingLanguage(props) {
    return (
        <>
            <div>
                <Button className="classArea" variant="success" onClick={props.runCode}>
                    <i className="fas fa-play"/>
                </Button>
                <Button className="classArea"
                        variant="outline-info">{props.languageLearning === "csharp" ? "main.cpp" : "Main.java"}</Button>
            </div>

            <Editor
                code={props.initialCode}
                language={props.languageLearning}
            />

            <div className="outputArea">
                <div className="text-center bg-dark font-weight-bold text-white">{props.outputTitle}</div>
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
                    <Button className="submitButton outlinedText" variant="success" size="lg"
                            onClick={props.checkAnswer}>
                        <i className="fas fa-play"/> &nbsp; SUBMIT
                    </Button>
                </Container>


            </div>

        </>
    )
}