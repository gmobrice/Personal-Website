import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'reactstrap';
import ReactMarkdown from 'react-markdown';
import './Timeline.scss';

interface ITimelineState
{
    selected: string,
    details: string
}

const initialTimelineState: ITimelineState = 
{
    selected: "",
    details: ""
}


export class Timeline extends Component<{}, ITimelineState>
{
    constructor(props: {})
    {
        super(props);
        this.state = initialTimelineState;
        this.getData = this.getData.bind(this);
        this.changeExperience = this.changeExperience.bind(this);
    }

    async componentDidMount()
    {
        if (this.state.selected === "")
        {
            const selected = document.querySelectorAll("button.selected")[0].id;
            const data = await this.getData(selected);
            this.setState({ selected: selected, details: data });
        }
    }
    
    async changeExperience(e: React.MouseEvent<HTMLElement>)
    {
        e.preventDefault();
        const selected = e.currentTarget.id;
        const data = await this.getData(selected);

        this.setState({ selected: selected, details: data });

        const timelineElement = document.getElementById("timeline");
        
        if (timelineElement !== null)
        {
            let buttons = timelineElement.querySelectorAll("button");
            buttons.forEach(node => {
                node.classList.remove('selected');
            });
        }

        const selectedElement = document.getElementById(this.state.selected);

        if (selectedElement !== null)
            selectedElement.classList.add('selected');

    }

    async getData(id: string): Promise<string>
    {
        const response = await fetch('content?name=' + id, { method: 'POST' });
        const data = await response.text();

        return data;
    }

    render()
    {
        return (
        <div id="timeline">
            <ul>
                <li>
                    <button id="Microsoft2015" onClick={this.changeExperience}>
                        <FontAwesomeIcon icon={ faCircle } size="xs" />
                        <span>Microsoft</span>
                        <span className="year">2015</span>
                    </button>
                </li>
                <li>
                    <button id="Microsoft2017" onClick={this.changeExperience}>
                        <FontAwesomeIcon icon={ faCircle } size="xs" />
                        <span>Microsoft</span>
                        <span className="year">2017</span>
                    </button>
                </li>
                <li>
                    <button id="Brasoftware2019" onClick={this.changeExperience}>
                        <FontAwesomeIcon icon={ faCircle } size="xs" />
                        <span>Brasoftware</span>
                        <span className="year">2019</span>
                    </button>
                </li>
                <li>
                    <button id="Microsoft2019" className="selected" onClick={this.changeExperience}>
                        <FontAwesomeIcon icon={ faCircle } size="xs" />
                        <span>Microsoft</span>
                        <span className="year">2019</span>
                    </button>
                </li>
            </ul>
            
            <Row>
                <Col xs={12} className="experience-details">
                    <ReactMarkdown source={this.state.details} escapeHtml={ false } />
                </Col>
            </Row>
        </div>
        )
    }
}