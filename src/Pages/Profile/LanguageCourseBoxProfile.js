//Library Imports
import React from "react";
import {Card, Button, Col} from "react-bootstrap";
import {CardBody, Row} from "reactstrap";
import ProgressBar from "react-bootstrap/ProgressBar";

class LanguageCourseBoxProfile extends React.Component {
    render() {
        return (
            <Col md={4}>
                <Card bg="transparent" className="h-100 shadow-sm rounded text-white" border="dark">
                    <CardBody className="d-flex flex-column">
                        <Row className="pb-3">
                            <img className="align-self-start"
                                 style={{height: "15vw", width: "15vw"}}
                                 src={this.props.IconURL} alt={this.props.IconURL}/>
                            <Col className="align-self-center text-center">
                                <h4>
                                    You're left at:
                                </h4>
                                <h3>
                                    {this.props.currentSubject}
                                </h3>
                                <ProgressBar className="align-bottom" now={this.props.progress}
                                             label={`${this.props.progress}%`}/>
                            </Col>
                        </Row>
                        <Button
                            className="mt-auto font-weight-bold"
                            block href={this.props.LinkReference}>
                            {this.props.StartMessage}
                        </Button>
                    </CardBody>
                </Card>
            </Col>
        )
    }

}

export default LanguageCourseBoxProfile;