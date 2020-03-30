import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import { Row, Col } from 'reactstrap';
import { Skill } from '../components/Skill/Skill';
import { Timeline } from '../components/Timeline/Timeline';
import { Project } from '../components/Project/Project';
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
        this.getData = this.getData.bind(this);
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
                <div id="intro">
                    <Row>
                        <Col xs={12} className="header">
                            <ReactMarkdown source={ this.state.introHeader } escapeHtml={ false } />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className="text">
                            <Row>
                                <Col xs={12} className="inner">
                                    <img src={"images/gus.jpg"} alt="myself" className="rounded-circle" />
                                    <ReactMarkdown source={ this.state.introText } escapeHtml={ false } />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

                <div>
                    <Row>
                        <Col id="about-me" className="section" xs={12} sm={6}>
                            <h2 className="section-header">about me</h2>
                            <ReactMarkdown source={ this.state.aboutMeText } escapeHtml={ false } />
                        </Col>
                        <Col id="skills" className="section" xs={12} sm={6} >
                            <h2 className="section-header">skills</h2>
                            <Row>
                                <Col xs={4} sm={3}>
                                    <div>
                                        <Skill id={1} title="HTML" description="" rating={5} />
                                    </div>
                                </Col>
                                <Col xs={4} sm={3}>
                                    <div>
                                        <Skill id={1} title="CSS / SCSS" description="" rating={5} />
                                    </div>
                                </Col>
                                <Col xs={4} sm={3}>
                                    <div>
                                        <Skill id={1} title="JavaScript" description="" rating={4} />
                                    </div>
                                </Col>
                                <Col xs={4} sm={3}>
                                    <div>
                                        <Skill id={1} title="React" description="" rating={4} />
                                    </div>
                                </Col>
                                <Col xs={4} sm={3}>
                                    <div>
                                        <Skill id={1} title="C#" description="" rating={4} />
                                    </div>
                                </Col>
                                <Col xs={4} sm={3}>
                                    <div>
                                        <Skill id={1} title="ASP.NET" description="" rating={4} />
                                    </div>
                                </Col>
                                <Col xs={4} sm={3}>
                                    <div>
                                        <Skill id={1} title="Azure" description="" rating={4} />
                                    </div>
                                </Col>
                                <Col xs={4} sm={3}>
                                    <div>
                                        <Skill id={1} title="TypeScript" description="" rating={3} />
                                    </div>
                                </Col>
                                <Col xs={4} sm={3}>
                                    <div>
                                        <Skill id={1} title="Git" description="" rating={3} />
                                    </div>
                                </Col>
                                <Col xs={4} sm={3}>
                                    <div>
                                        <Skill id={1} title="SQL" description="" rating={3} />
                                    </div>
                                </Col>
                                <Col xs={4} sm={3}>
                                    <div>
                                        <Skill id={1} title="PHP" description="" rating={3} />
                                    </div>
                                </Col>
                                <Col xs={4} sm={3}>
                                    <div>
                                        <Skill id={1} title="Node.js" description="" rating={3} />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                
                <div id="experience" className="section">
                    <Row>
                        <Col xs={12}>
                            <h2 className="section-header">experience</h2>
                            <Timeline />
                        </Col>
                    </Row>
                </div>

                <div id="projects" className="section">
                    <Row>
                        <Col xs={12}>
                            <h2 className="section-header">projects</h2>
                            <Row>
                                <Col md={6}>
                                    <Project />
                                </Col>
                                <Col md={6}>
                                    <Project />
                                </Col>
                                <Col md={6}>
                                    <Project />
                                </Col>
                                <Col md={6}>
                                    <Project />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

                <div id="contact" className="section">
                    <Row>
                        <Col className="contact-info">
                            <div>
                                <h2>Fancy a chat?</h2>
                                <p>lorem ipsum</p>
                            </div>

                            <div>
                                <p>
                                    Follow me for more thoughts and regular updates on <a href="">GitHub</a>, <a href="">LinkedIn</a> and <a href="">Instagram</a>.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}