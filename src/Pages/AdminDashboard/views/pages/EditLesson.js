import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row, Card, CardBody } from 'reactstrap';

export default class EditLesson extends Component {
    constructor() {
        super();
        this.state = { }
    }

    render() {
        return (
            <Row>
                <Col md={{ size: 8, offset: 2 }}>
                    <Card>
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <Label for="name">Name</Label>
                                    <Input type="text" name="name" id="name" placeholder="First and Last" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">Select</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>C++</option>
                                        <option>Java</option>
                                        <option>SQL</option>
                                        <option>C</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelectMulti">Choose a Lesson</Label>
                                    <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                                        <option>Hello World</option>
                                        <option>Input Output</option>
                                        <option>Comments</option>
                                        <option>Variables</option>
                                        <option>Strings</option>
                                        <option>Arrays</option>
                                        <option>Conditional Statements</option>
                                        <option>Switch Case</option>
                                        <option>While Loop</option>
                                        <option>Do-While Loop</option>
                                        <option>For Loop</option>
                                        <option>Pointers</option>
                                        <option>Reference</option>
                                        <option>Functions</option>
                                        <option>Classes</option>
                                        <option>Constructors & Destructors</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleText">Lesson</Label>
                                    <Input type="textarea" name="text" id="exampleText"  />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleFile">File</Label>
                                    <Input type="file" name="file" id="exampleFile" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="name">Tags</Label>
                                    <Input type="text" name="name" id="name" placeholder="Separate with commas" />
                                </FormGroup>
                                <br></br>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        Save Changes
                                    </Label>
                                </FormGroup>
                                <Button>Submit</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        )
    }
}