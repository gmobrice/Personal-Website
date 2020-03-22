import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import { Row, Col, Media } from 'reactstrap';
import { Skill } from '../components/Skill/Skill';
import { Timeline } from '../components/Timeline/Timeline';

import './Home.scss';

interface IHomeState
{
    introHeader: string,
    introText: string,
    aboutMeText: string,
    skillsText: string
}

const initialHomeState: IHomeState = 
{
    introHeader: "",
    introText: "",
    aboutMeText: "",
    skillsText: ""
}

export class Home extends Component<{}, Partial<IHomeState>> {
    static displayName = Home.name;

    constructor(props: any)
    {
        super(props);
        this.state = initialHomeState;
    }

    async getData(name: string, stateProperty: keyof IHomeState)
    {
        const response = await fetch('content?name=' + name, { method: 'POST' });
        const data = await response.text();

        this.setState({ [stateProperty]: data});
    }

    async componentWillMount()
    {
        await this.getData('IntroHeader', 'introHeader');
        await this.getData('IntroText', 'introText');
        await this.getData('AboutMeText', 'aboutMeText');
        await this.getData('SkillsText', 'skillsText');
    }

    render() {
        return (
            <div>
                <div className="intro">
                    <Row>
                        <Col xs={12} className="header">
                            <ReactMarkdown source={ this.state.introHeader } escapeHtml={ false } />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className="text">
                            <Row>
                                <Col sm={2}>
                                    <img src={"images/gus.jpg"} className="rounded-circle" />
                                </Col>
                                <Col>
                                    <ReactMarkdown source={ this.state.introText } escapeHtml={ false } />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

                <div className="about-me section">
                    <Row>
                        <Col xs={12} sm={6}>
                            <h1>about me</h1>
                            <ReactMarkdown source={ this.state.aboutMeText } escapeHtml={ false } />
                        </Col>
                        <Col xs={12} sm={6} className="skills">
                            <h1>skills</h1>
                            <Row>
                                <Col xs={4} sm={3}>
                                    <div>
                                        <Skill id={1} title="C#" description="" years={5} rating={4} />
                                    </div>
                                </Col>
                                <Col xs={4} sm={3}>
                                    <div>
                                        <Skill id={1} title="TypeScript" description="" years={5} rating={4} />
                                    </div>
                                </Col>
                                <Col xs={4} sm={3}>
                                    <div>
                                        <Skill id={1} title="React" description="" years={5} rating={4} />
                                    </div>
                                </Col>
                                <Col xs={4} sm={3}>
                                    <div>
                                        <Skill id={1} title="Azure" description="" years={5} rating={4} />
                                    </div>
                                </Col>
                                <Col xs={4} sm={3}>
                                    <div>
                                        <Skill id={1} title="HTML" description="" years={5} rating={4} />
                                    </div>
                                </Col>
                                <Col xs={4} sm={3}>
                                    <div>
                                        <Skill id={1} title="CSS / SCSS" description="" years={5} rating={4} />
                                    </div>
                                </Col>
                                <Col xs={4} sm={3}>
                                    <div>
                                        <Skill id={1} title="Git" description="" years={5} rating={4} />
                                    </div>
                                </Col>
                                <Col xs={4} sm={3}>
                                    <div>
                                        <Skill id={1} title="HTML" description="" years={5} rating={4} />
                                    </div>
                                </Col>
                                <Col xs={4} sm={3}>
                                    <div>
                                        <Skill id={1} title="CSS / SCSS" description="" years={5} rating={4} />
                                    </div>
                                </Col>
                                <Col xs={4} sm={3}>
                                    <div>
                                        <Skill id={1} title="Git" description="" years={5} rating={4} />
                                    </div>
                                </Col>
                                <Col xs={4} sm={3}>
                                    <div>
                                        <Skill id={1} title="HTML" description="" years={5} rating={4} />
                                    </div>
                                </Col>
                                <Col xs={4} sm={3}>
                                    <div>
                                        <Skill id={1} title="CSS / SCSS" description="" years={5} rating={4} />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                
                <div className="work-experience section">
                    <Row>
                        <Col xs={12}>
                            <h1>experience</h1>
                            <Timeline />
                        </Col>
                    </Row>
                </div>

            </div>
        );
    }
}
