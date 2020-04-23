import React from 'react';
import { Row, Col, Card, Progress } from 'reactstrap';

export default function StorageWidget () {
    return (
        <Card body>
            <div className="h3">Contribution</div>
            <div className="h6 text-muted m-t">Lessons</div>
            <div className="h5">20 / 100 Lessons Provided</div>
            <Progress multi>
                <Progress bar color="primary" value="40" />
                <Progress bar color="warning" value="25" />
                <Progress bar color="danger" value="10" />
            </Progress>
            <hr />
            <Row>
                <Col>
                    <div className="h6">
                        <span className="bg-primary inline-block" style={{width: 10, height: 10, marginRight: 5}}></span>
                        C
                    </div>
                    <small className="text-muted">10 Lessons</small>
                </Col>
                <Col>
                    <div className="h6">
                        <span className="bg-warning inline-block" style={{width: 10, height: 10, marginRight: 5}}></span>
                        C++
                    </div>
                    <small className="text-muted">7 Lessons</small>
                </Col>
                <Col>
                    <div className="h6">
                        <span className="bg-danger inline-block" style={{width: 10, height: 10, marginRight: 5}}></span>
                        SQL
                    </div>
                    <small className="text-muted">3 Lessons</small>
                </Col>
            </Row>
        </Card>
    )
}