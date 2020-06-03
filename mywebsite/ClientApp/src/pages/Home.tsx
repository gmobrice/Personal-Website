import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import { Row, Col } from 'reactstrap';
import { Skill } from '../components/Skill/Skill';
import { Timeline } from '../components/Timeline/Timeline';
import { Project } from '../components/Project/Project';
import { IProjectProps, IHomeState } from '../components/Interfaces/Interfaces';
import { faYoutube, faMediumM, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faNewspaper, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import './Home.scss';

const initialHomeState: IHomeState = 
{
    introHeader: "",
    introText: "",
    aboutMeText: "",
    skillsText: "",
    projects: [],
    articles: []
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
        
        const proj01: IProjectProps = 
        {
            carouselItems:
            [
                {
                    src: "images/stj01.png",
                    altText: "Screenshot of the Analysis section of the STJ Extractor",
                    caption: "",
                    key: 1
                },
                {
                    src: "images/stj02.png",
                    altText: "Screenshot of the Extraction section of the STJ Extractor",
                    caption: "",
                    key: 2
                }
            ],
            name: "STJ Extractor",
            description: "Windows 10 App written in C#, UWP and using Azure Cognitive Services APIs for Language Understanding.<br>The app extracts public documents and information from the Brazilian Superior Court of Justice's portal and runs them through a series of AI powered analysis using the Language Understanding Intelligent Service (LUIS) to determine things such as the intent of a vote and the winner of a case.<br>This project was done in 2020 for a law firm in São Paulo.",
            links: []
        };

        const proj02: IProjectProps = 
        {
            carouselItems:
            [
                {
                    src: "images/mktcalendar01.png",
                    altText: "Screenshot of the Calendar View in Marketing Calendar",
                    caption: "",
                    key: 1
                },
                {
                    src: "images/mktcalendar02.png",
                    altText: "Screenshot of the List View in Marketing Calendar",
                    caption: "",
                    key: 2
                }
            ],
            name: "Microsoft Marketing Calendar",
            description: "Web app written in React, C# and ASP.NET Core designed to improve communication and collaboration between marketing teams across all countries in Latin America, providing them visibility about every marketing activity and its status, details and materials.<br>The app was integrated to Microsoft's Active Directory to manage and set different levels of permissions inside the platform.<br>I have played a crucial role in this project, not only writing code but managing the expectations between developers and stakeholders, and assessing the requirements of the app.",
            links: []
        };

        const proj03: IProjectProps = 
        {
            carouselItems:
            [
                {
                    src: "images/bienal01.jpg",
                    altText: "The logo of the experience on the outside",
                    caption: "",
                    key: 1
                },
                {
                    src: "images/bienal02.jpg",
                    altText: "A person interacting with the game master during the game",
                    caption: "",
                    key: 2
                }
            ],
            name: "Bienal do Livro de São Paulo 2018",
            description: "Web app written in C# and ASP.NET Core for an experience in Bienal do Livro, the largest book fair in Brazil.<br>In this experience, called \"A professora sumiu (the teacher is missing)\", the participants played a 10 minute escape game and use AI solutions, such as Computer Vision and Language Understanding, built into the web app to figure out where the teacher was.<br>The goal was to show the fair's atendees how AI is being heavily used in our everyday services.<br>In this project, besides coding, I contributed with ideas for the game's script and how we would incorporate those AI solutions into the script.",
            links: 
            [
                {
                    icon: faNewspaper,
                    link: "https://news.microsoft.com/pt-br/microsoft-leva-a-transformacao-digital-para-a-educacao-na-bienal-internacional-do-livro-de-sp/"
                },
                {
                    icon: faYoutube,
                    link: "https://www.youtube.com/watch?v=oN4MfEeHt1c"
                }
            ]
        };

        const proj04: IProjectProps = 
        {
            carouselItems:
            [
                {
                    src: "images/spread-the-word01.jpg",
                    altText: "A group of people at the end of the very first Spread the Word event",
                    caption: "",
                    key: 1
                },
                {
                    src: "images/spread-the-word02.jpg",
                    altText: "Me presenting for a group of people",
                    caption: "",
                    key: 2
                }
            ],
            name: "Microsoft Spread the Word",
            description: "This project was envisioned after realizing how many schools and universities never heard back from Microsoft after contacting and wanting to visit and getting know the company.<br>I was one of the founders of this project and worked creating all the presentations and script for a half-day experience inside Microsoft's office for schools about the company, technology trends and careers.<br>The project impacted more than 500 people in a short span of time, became a standard project for newer interns and after four years it is still running. The project also had some recognition in the media, as you can see in the links below.",
            links: 
            [
                {
                    icon: faNewspaper,
                    link: "https://inquietaria.99jobs.com/microsoft-na-corrida-para-se-tornar-a-empresa-mais-legal-do-mundo-991722a91cf4"
                },
                {
                
                    icon: faNewspaper,
                    link: "https://catracalivre.com.br/carreira/microsoft-na-corrida-para-se-tornar-empresa-mais-legal-do-mundo/"
                }
            ]
        };

        const proj05: IProjectProps = 
        {
            carouselItems:
            [
                {
                    src: "images/wifilivre.jpg",
                    altText: "WiFi Livre SP Logo",
                    caption: "",
                    key: 1
                }
            ],
            name: "WiFi Livre São Paulo",
            description: "This was a project I did back in the college days. It was a series of academic studies for the São Paulo city about the public policy of free Internet access.<br>We extracted data from the Twitter's Streaming API with PHP and Azure, and analyzed them to generate a lot of insights such as the number of users who used more than one free Internet point and correlations between what people were saying and where they were using the free Internet.<br>Some reports can be found in the links below.",
            links: 
            [
                {
                    icon: faNewspaper,
                    link: "https://wifilivre.sp.gov.br/"
                },
                {
                    icon: faFileAlt,
                    link: "https://www.prefeitura.sp.gov.br/cidade/secretarias/upload/servicos/inclusao_digital/wifilivresp/relatoriosufabc/WiFi-Livre_R1.pdf"
                },
                {
                    icon: faFileAlt,
                    link: "https://www.prefeitura.sp.gov.br/cidade/secretarias/upload/servicos/inclusao_digital/wifilivresp/relatoriosufabc/WiFi-Livre_R2-1.pdf"
                },
                {
                    icon: faFileAlt,
                    link: "https://www.prefeitura.sp.gov.br/cidade/secretarias/upload/servicos/inclusao_digital/wifilivresp/relatoriosufabc/WiFi-Livre_R3-2.pdf"
                },
                {
                    icon: faFileAlt,
                    link: "https://www.prefeitura.sp.gov.br/cidade/secretarias/upload/servicos/inclusao_digital/wifilivresp/relatoriosufabc/WiFi-Livre_R4.pdf"
                },
                {
                    icon: faFileAlt,
                    link: "https://www.prefeitura.sp.gov.br/cidade/secretarias/upload/servicos/inclusao_digital/wifilivresp/relatoriosufabc/WiFi-Livre_R5-2.pdf"
                },
                {
                    icon: faFileAlt,
                    link: "https://www.prefeitura.sp.gov.br/cidade/secretarias/upload/servicos/inclusao_digital/wifilivresp/relatoriosufabc/WiFi-Livre_R6.pdf"
                },
                {
                    icon: faFileAlt,
                    link: "https://www.prefeitura.sp.gov.br/cidade/secretarias/upload/servicos/inclusao_digital/wifilivresp/relatoriosufabc/WiFi-Livre_R7.pdf"
                }
            ]
        };

        const art01: IProjectProps = 
        {
            carouselItems: [],
            name: "Talk - Starting with Microsoft Bot Framework and Azure",
            description: "I was invited by a former teacher to give a talk about C# and Azure in their local developers meetup. Spent the time talking about how transform a website into a chatbot using Microsoft Bot Framework and Azure Cognitive Services, such as LUIS.",
            links: 
            [
                {
                    icon: faYoutube,
                    link: "https://youtu.be/ca4QgzUIxgY?t=3698"
                },
                {
                    icon: faGithub,
                    link: "https://github.com/gmobrice/meetup-itudevelopers-chatbots"
                }
            ]
        };

        const art02: IProjectProps = 
        {
            carouselItems: [],
            name: "Article - Triggering Azure Logic Apps with HTTP Requests",
            description: "This is my debut article on Medium. In this article I go over the topic of Azure Logic Apps and how to trigger them using C# and HTTP Requests.",
            links: 
            [
                {
                    icon: faMediumM,
                    link: "https://medium.com/@gmobrice/triggering-azure-logic-apps-with-http-requests-468c75a4d5f6"
                }
            ]
        };

        this.setState({ projects: [proj01, proj02, proj03, proj04, proj05], articles: [art01, art02] });
    }

    render() {

        let projects: JSX.Element[] = [];
        let articles: JSX.Element[] = [];

        if (this.state.projects !== undefined)
        {
            for (let i = 0; i < this.state.projects.length; i++)
            {
                projects.push (
                    <Col md={6} key={ "p" + i } >
                        <Project {...this.state.projects[i]} />
                    </Col>
                );
            }
        }

        if (this.state.articles !== undefined)
        {
            for (let i = 0; i < this.state.articles.length; i++)
            {
                articles.push (
                    <Col className="article" md={4} sm={6} xs={12} key={ "a" + i } >
                        <Project {...this.state.articles[i]} />
                    </Col>
                );
            }
        }

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
                                        <Skill id={1} title="Azure" description="" rating={5} />
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
                                { projects }
                            </Row>
                        </Col>
                    </Row>
                </div>

                <div id="articles" className="section">
                    <Row>
                        <Col xs={12}>
                            <h2 className="section-header">articles and talks</h2>
                            <Row>
                                { articles }
                            </Row>
                        </Col>
                    </Row>
                </div>

                <div id="contact" className="section">
                    <Row>
                        <Col className="contact-info">
                            <div>
                                <h2>Fancy a chat?</h2>
                                <p>Send an e-mail for <a href="mailto:gmobrice@outlook.com">gmobrice@outlook.com</a></p>
                            </div>

                            <div>
                                <p>
                                    Follow me for more thoughts and regular updates on <a href="https://github.com/gmobrice" target="_blank" rel="noopener noreferrer">GitHub</a>, <a href="https://medium.com/@gmobrice" target="_blank" rel="noopener noreferrer">Medium</a>, <a href="https://linkedin.com/in/gmobrice" target="_blank" rel="noopener noreferrer">LinkedIn</a> and <a href="https://instagram.com/gmobrice/" target="_blank" rel="noopener noreferrer">Instagram</a>.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}