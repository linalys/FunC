import React, {Component, useState} from 'react';
import {Button, Form, FormGroup, Label, Input, FormText, Col, Row, Card, CardBody} from 'reactstrap';

export default function AddLesson() {
    const [language, setLanguage] = useState("C++");
    const [title, setTitle] = useState("");
    const [lesson, setLesson] = useState("");
    const [tags, setTags] = useState("");
    const [hasTest, setHasTest] = useState(false);
    const [lessonSum, setLessonSum] = useState("");
    const [testEx, setTestEx] = useState("");
    const [choices, setChoices] = useState("");
    const [answer, setAnswer] = useState("");

    function changeLanguage(e) {
        setLanguage(e.target.value)
    }

    function changeHasTest(e) {
        setHasTest(e.target.checked);
    }

    console.log(tags);
    return (
        <>
            <Row>
                <Col md={{size: 8, offset: 2}}>
                    <Card>
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleSelect">Select Language</Label>
                                    <Input type="select" name="select" id="exampleSelect" onChange={changeLanguage}>
                                        <option>C++</option>
                                        <option>Java</option>
                                        <option>SQL</option>
                                    </Input>
                                </FormGroup>

                                <FormGroup>
                                    <Label for="title">Title</Label>
                                    <Input type="text" name="title" id="title" placeholder=""/>
                                </FormGroup>


                                <FormGroup>
                                    <Label for="lesson">Lesson</Label>
                                    <Input type="textarea"
                                           name="lesson"
                                           id="lesson"
                                           style={{height: "300px"}}
                                           placeholder="Enclose text between <p> </p> for regular text, between <span> </span> for code source.
                                           Use </br> for new lines and &amp;emsp; for tabs."/>
                                </FormGroup>


                                <FormGroup>
                                    <Label for="tags">Tags</Label>
                                    <Input type="text"
                                           name="tags"
                                           id="tags"
                                           placeholder="Separate with commas"/>
                                </FormGroup>
                                <br/>


                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" onChange={changeHasTest}/>{' '}
                                        has test
                                    </Label>
                                </FormGroup>
                                <br/>
                                {hasTest &&
                                <>
                                    <FormGroup>
                                        <Label for="lessonSummary">Lesson's Summary</Label>
                                        <Input type="textarea"
                                               name="lessonSummary"
                                               id="lessonSummary"
                                               style={{height: "300px"}}
                                               placeholder="Insert lesson's Summary. Don't use html tags."/>
                                    </FormGroup>

                                    < FormGroup>
                                        < Label for="testExercise"> Test's Exercise</Label>
                                        <Input type="textarea"
                                               name="testExercise"
                                               id="testExercise"
                                               style={{height: "300px"}}
                                               placeholder="Insert test's exercise. Don't use html tags."/>
                                    </FormGroup>
                                    {language !== "SQL" &&
                                    <FormGroup>
                                        <Label for="initialCode">Initial Code</Label>
                                        <Input type="textarea"
                                               name="initialCode"
                                               id="initialCode"
                                               style={{height: "150px"}}
                                               placeholder="Initial Code for the user."/>
                                    </FormGroup>
                                    }
                                    {language === "SQL" &&
                                    <FormGroup>
                                        <Label for="sqlChoices">Test's choices for SQL</Label>
                                        <Input type="textarea"
                                               name="sqlChoices"
                                               id="sqlChoices"
                                               placeholder="Splits choices with #"/>
                                    </FormGroup>
                                    }
                                    <FormGroup>
                                        <Label for="answer">Answer</Label>
                                        <Input type="textarea"
                                               name="answer"
                                               id="answer"
                                               placeholder="Write down the correct answer. It is case sensitive so be careful!"/>
                                    </FormGroup>
                                </>
                                }
                                <Button size="lg">Submit</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <br/>
            <br/>
            <br/>
            <br/>
        </>
    )
}