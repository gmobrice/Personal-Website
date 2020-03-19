import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Skill } from '../components/Skill/Skill';

export class Home extends Component {
    static displayName = "Gustavo Mobrice";

    render() {
        return (
            <div>
                <div>
                    <Row>
                        <Col xs={12}>
                            <h2>Projects</h2>
                        </Col>
                    </Row>
                </div>

                <div>
                    <Row>
                        <Col xs={12}>
                            <h2>Skills</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <h4>languages</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} md={3} xl={2}>
                            <Skill title="C#" years={5} rating={3} id={1} description="lorem ipsum" />
                        </Col>
                        <Col sm={6} md={3} xl={2}>
                            <Skill title="Javascript" years={5} rating={3} id={2} description="lorem ipsum" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <h4>front-end</h4>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12}>
                            <h4>back-end</h4>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12}>
                            <h4>other</h4>
                        </Col>
                    </Row>

                </div>
            </div>
        );
    }
}
