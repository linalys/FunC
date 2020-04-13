//Library Imports
import React from "react";
import {CardImg, Card, Button, Col} from "react-bootstrap";
import {CardBody} from "reactstrap";

class LanguageCourseBox extends React.Component {
    render() {
        return (
            <Col md={4}>
                <Card bg="transparent" className="h-100 shadow-sm rounded text-white" border="light">
                    <CardImg variant="top"
                             className="align-self-center"
                             style={{height: "15vw", width: "15vw"}}
                             src={this.props.IconURL}/>
                    <CardBody className="d-flex flex-column ">
                        <h4 className="text-center">{this.props.Description}</h4>
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

export default LanguageCourseBox;