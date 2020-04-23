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

const Profile = () => {
    return (
        <div>
            <Container>
                <ProfileWidget/>
            </Container>
            <br></br>

            <Container>
                <RatingWidget/>
            </Container>
            <br></br>

            <Container>
                <StorageWidget/>
            </Container>
            <br></br>

            <Container>
                <TabWidget/>
            </Container>
            <br></br>

            <Container>
                <TrafficWidget/>
            </Container>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        </div>
    );
};

export default Profile;