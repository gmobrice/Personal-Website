import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Skill } from '../components/Skill/Skill';

export class Home extends Component {
    static displayName = Home.name;

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
                        <Col xs={6} md={2}>
                            <Skill title="C#" years={ 5 } rating={ 3 } description="lorem ipsum" />
                        </Col>
                        <Col xs={6} md={2}>
                            <Skill title="Javascript" years={ 5 } rating={ 3 } description="lorem ipsum" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <h4>front-end</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={2}>
                            <Skill title="C#" years={ 5 } rating={ 3 } description="lorem ipsum" />
                        </Col>
                        <Col xs={6} md={2}>
                            <Skill title="Javascript" years={ 5 } rating={ 3 } description="lorem ipsum" />
                        </Col>
                        <Col xs={6} md={2}>
                            <Skill title="Javascript" years={ 5 } rating={ 3 } description="lorem ipsum" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <h4>back-end</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={2}>
                            <Skill title="C#" years={ 5 } rating={ 3 } description="lorem ipsum" />
                        </Col>
                        <Col xs={6} md={2}>
                            <Skill title="Javascript" years={ 5 } rating={ 3 } description="lorem ipsum" />
                        </Col>
                        <Col xs={6} md={2}>
                            <Skill title="Javascript" years={ 5 } rating={ 3 } description="lorem ipsum" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <h4>other</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={2}>
                            <Skill title="C#" years={ 5 } rating={ 3 } description="lorem ipsum" />
                        </Col>
                        <Col xs={6} md={2}>
                            <Skill title="Javascript" years={ 5 } rating={ 3 } description="lorem ipsum" />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
