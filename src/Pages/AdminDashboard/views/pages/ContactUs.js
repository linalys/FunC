import React from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    FormGroup,
    Label,
    Input,
    Button,
} from 'reactstrap';

export default function CmsPage () {
    return (
        <div>
            <h3 className="m-b">New Message</h3>
            <Row>
                <Col md={8}>
                    <Card>
                        <CardBody>
                            <FormGroup>
                                <Label for="exampleText">Title</Label>
                                <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleText">Description</Label>
                                <Input type="textarea" name="text" id="exampleText2" style={{height: 300}} />
                            </FormGroup>
                            <CardBody>
                                <Button block color="primary">Send</Button>
                            </CardBody>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>

    )
}