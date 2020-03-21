import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import { Row, Col } from 'reactstrap';
import { Skill } from '../components/Skill/Skill';

interface IHomeState
{
    text: string
}

export class Home extends Component<{}, IHomeState> {
    static displayName = Home.name;

    constructor(props: any)
    {
        super(props);
        this.state = { text: "" };
    }

    async getData(name: string)
    {
        const response = await fetch('content?name=' + name, { method: 'POST' });
        const data = await response.text();
        this.setState({ text: data});
    }

    async componentWillMount()
    {
        await this.getData('Header');
    }

    render() {
        return (
            <div>
                <ReactMarkdown source={ this.state.text } escapeHtml={ false } />
            </div>
        );
    }
}
