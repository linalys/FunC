import React from "react";
import Header from "../../Header/Header";
import Sidebar from "./sidebar";
import {Button, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useSelector} from "react-redux";
import LocalizedStrings from "react-localization";

let langStrings = new LocalizedStrings({
    en: {test:"Take a Test!",
        previous:"🠈 Previous Lesson",
        next:"Next Lesson 🠊",},
    gr: {test:"Κάνε το Τεστ!",
        previous:"🠈 Προηγούμενο Μάθημα",
        next:"Επόμενο Μάθημα 🠊"}
});

function LessonStructure() {


    function createInnerLesson() {
        return {__html: "<p>This test is to prove the power of Dangerous html: Let's print \\n</p>\n" +
                "<p>Use span to make a coding box<p>" +
                "<span>cout << \"but it also has a lot of dangerous stuff\";<br/> &emsp; Tab test</span>" +
                "<p>Use br for a new line. </br> New line achieved. Use p for new paragraph</p>" + "<p>New paragraph</p>"
        };
    }

    langStrings.setLanguage(useSelector(state => state.language));
    return (
        <>
            <Header/>
            <Sidebar Lessons={[]}/>
            <div className="lessons courses">
                <h1 className="title superRainbowText outlineForRainbowTextTHICC">{"Get title from database"}</h1>


                <div dangerouslySetInnerHTML={createInnerLesson()} />


                <Container className="mt-2">
                    <Button variant="dark" size="lg" className="test mb-2" href="/GET_TEST_SESSION">
                        <b className="text"> {langStrings.test}</b>
                    </Button>
                </Container>
                <br/>
                <br/>
                <Container fluid={true}>
                    <Row>
                        <Col>
                            <Button variant="light" size="lg" disabled={false/*SET TRUE IF FIRST LESSON*/} className="previous mb-2" href="/GET_PREVIOUS_LESSON" >
                                <b className="text"> {langStrings.previous}</b>
                            </Button>
                        </Col>
                        <Col>
                            <Button variant="light" size="lg" disabled={false/*SET TRUE IF LAST LESSON*/} className="next mb-2" href="/GET_NEXT_LESSON">
                                <b className="text"> {langStrings.next}</b>
                            </Button>
                        </Col>
                    </Row>
                </Container>

            </div>
        </>
    )
}


export default LessonStructure;