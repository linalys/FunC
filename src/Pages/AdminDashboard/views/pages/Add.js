import React from 'react';
import { NavLink } from 'react-router-dom';
import {Button, Card, CardBody, Col, Container, FormGroup, Input, Label} from "reactstrap";
import {MDBIcon} from "mdbreact";
import ProfileWidget from "./widgets/ProfileWidget";
import AnalyticsWidget from "./widgets/AnalyticsWidget";
import RatingWidget from "./widgets/RatingWidget";
import StorageWidget from "./widgets/StorageWiget";
import TrafficWidget from "./widgets/TrafficWidget";
import TabContainer from "react-bootstrap/TabContainer";
import TabWidget from "./widgets/TabWidget";
import AddLesson from "./AddLesson";

const Add = () => {
    return (
        <div>
            <Container>
                <AddLesson/>
            </Container>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        </div>
    );
};

export default Add;