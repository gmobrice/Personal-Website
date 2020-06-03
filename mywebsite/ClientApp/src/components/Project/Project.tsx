import React, { Component } from 'react';
import { Row, Col, UncontrolledCarousel } from 'reactstrap';
import ReactMarkdown from 'react-markdown/with-html';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IProjectProps } from '../Interfaces/Interfaces';
import './Project.scss';

export class Project extends Component<IProjectProps, {}>
{
    render ()
    {
        let links: JSX.Element[] = [];
        let carousel: JSX.Element = <></>;

        if (this.props.links !== undefined)
        {
            for (let i = 0; i < this.props.links.length; i++)
            {
                links.push (
                    <div key={ "l" + i } >
                        <a href={ this.props.links[i].link } target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={ this.props.links[i].icon } size="lg" />
                        </a>
                    </div>
                );
            }
        }

        if (this.props.carouselItems.length > 0)
        {
            carousel = <UncontrolledCarousel items={ this.props.carouselItems } indicators={false} interval={false} />
        }

        return (
            <div>
                <div className="project-card">
                    { carousel }
                    <h5>{ this.props.name }</h5>
                    <div><ReactMarkdown source={ this.props.description } escapeHtml={ false } /></div>
                    <div className="links">{ links }</div>
                </div>
            </div>
        );
    }
}