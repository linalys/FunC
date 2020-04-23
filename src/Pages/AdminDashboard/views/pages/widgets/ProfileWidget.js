import React from 'react';
import { Row, Col, Card, Button } from 'reactstrap';

export default function ProfileWidget() {
  return (
    <Card body>
      <div className="text-center">
        <div className="m-b">
        </div>
        <div>
          <h2 className="h4">Sherlock Holmes</h2>
          <div className="h5 text-muted">Consulting Detective</div>
          <hr />
          <Row className="text-center m-b">
            <Col>
              <strong>221</strong>
              <div className="text-muted">Followers</div>
            </Col>
            <Col>
              <strong>777</strong>
              <div className="text-muted">Following</div>
            </Col>
          </Row>
        </div>
      </div>
    </Card>
  );
}
