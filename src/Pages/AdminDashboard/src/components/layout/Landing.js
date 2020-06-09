import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProgressBar from "../../containers/layout/ProgressBar";
import Navbar from "../../containers/layout/Navbar";
import {BrowserRouter} from "react-router-dom";


const Landing = () => (
   <Container style={{ height: "75vh" }} className="d-flex flex-column justify-content-center align-items-center">
       <ProgressBar />
       <Navbar />
      <Row className="mb-4">
         <p className="text-secondary h3"> Admin Dashboard</p>
      </Row>
      <Row>

      </Row>
   </Container>
);

export default Landing;
