import React, { Component } from 'react';
import SQL from '../../assets/SQLIcon.png';
import CIcon from '../../assets/CIcon.png';
import JavaIcon from '../../assets/javaIcon.png';
import Cplusplus from '../../assets/CplusplusIcon.png';
import "../../vibe/scss/styles.scss"



import { Card, CardBody, Row, Col } from 'reactstrap';

class Dashboard extends Component {
  render() {
    const heroStyles = {
      padding: '50px 0 70px',
    }
    return (
      <div>
      <Row>
          <Col md={6}>
            <div className="home-hero" style={heroStyles}>
              <h1>Welcome to FunC's Dashboard.</h1>
              <p className="text-muted">
                Here you can add or edit courses and see statistics about the website.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card>
              <CardBody className="display-flex">
                <img
                  src={CIcon}
                  style={{ width: 70, height: 70 }}
                  alt="C"
                  aria-hidden={true}
                />
                <div className="m-l">
                  <h2 className="h4">C</h2>
                  <p className="text-muted">
                    C is the only language that exists for the longest period of time.
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <CardBody className="display-flex">
                <img
                  src={Cplusplus}
                  style={{ width: 70, height: 70 }}
                  alt="C++"
                  aria-hidden={true}
                />
                <div className="m-l">
                  <h2 className="h4">C++</h2>
                  <p className="text-muted">
                    C++ is the preferred choice when latency is a critical metric.                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card>
              <CardBody className="display-flex">
                <img
                  src={JavaIcon}
                  style={{ width: 70, height: 70 }}
                  alt="Java"
                  aria-hidden={true}
                />
                <div className="m-l">
                  <h2 className="h4">Java</h2>
                  <p className="text-muted">
                    Java is ranked second in popularity.
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <CardBody className="display-flex">
                <img
                  src={SQL}
                  style={{ width: 70, height: 70 }}
                  alt="SQL"
                  aria-hidden={true}
                />
                <div className="m-l">
                  <h2 className="h4">SQL</h2>
                  <p className="text-muted">
                    SQL can perform all of these functions in a fraction of a second.
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        </div>
    );
  }
}

export default Dashboard;
