import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row, Card, CardBody } from 'reactstrap';

export default class AddLesson extends Component {
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
                                    <Label for="name">Title</Label>
                                    <Input type="text" name="name" id="name" placeholder="" />
                                </FormGroup>
                                <br></br>

                                <FormGroup>
                                    <Label for="exampleText">Text Area</Label>
                                    <Input type="textarea" name="text" id="exampleText" />
                                </FormGroup>
                                <br></br>

                                <FormGroup>
                                    <Label for="name">Tags</Label>
                                    <Input type="text" name="name" id="name" placeholder="Separate with commas" />
                                </FormGroup>
                                <br></br>

                                <FormGroup>
                                    <Label for="exampleSelect">Select Language</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>C++</option>
                                        <option>Java</option>
                                        <option>SQL</option>
                                    </Input>
                                </FormGroup>
                                <br></br>
                                <FormGroup>
                                    <Label for="exampleFile">File</Label>
                                    <Input type="file" name="file" id="exampleFile" />
                                    <FormText color="muted">
                                        Accepted types: .7z .bdoc .cdoc .ddoc .gtar .gz .gzip .hqx .rar .sit .tar .tgz .zip
                                    </FormText>
                                </FormGroup>
                                <br></br>

                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        Save Changes
                                    </Label>
                                </FormGroup>
                                <br></br>

                                <Button>Submit</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        )
    }
}