import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Rating } from '../Rating/Rating';

import './Skill.scss';

interface ISkillProps
{
    title: string,
    description: string,
    rating: number,
    outOf?: number,
    id: number
}

interface IRating
{
    rating: number,
    outOf?: number,
    id: number
}

export class Skill extends Component<ISkillProps> 
{
    render () 
    {
        let rating: IRating = 
        {
            rating: this.props.rating,
            id: this.props.id
        }

        if (this.props.outOf !== undefined && this.props.outOf !== null) rating.outOf = this.props.outOf

        return (
        <Row className="skill-card">
            <Col>
                <p>{ this.props.title }</p>
                <p>
                    <Rating {...rating} />
                </p>
            </Col>
        </Row>
        );
    }
}
