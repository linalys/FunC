import React from 'react';
import { Row, Col, Card, Button } from 'reactstrap';

export default function ProfileWidget() {
  return (
    <Card body>
      <div className="text-center">
        <div className="m-b">
        </div>
        <div>
          <h2 className="h4">Jason Smith</h2>
          <div className="h5 text-muted">Creative Director</div>
          <hr />
          <Row className="text-center m-b">
            <Col>
              <strong>230</strong>
              <div className="text-muted">Followers</div>
            </Col>
            <Col>
              <strong>325</strong>
              <div className="text-muted">Following</div>
            </Col>
          </Row>
          <Button block>Follow</Button>
        </div>
      </div>
    </Card>
  );
}
