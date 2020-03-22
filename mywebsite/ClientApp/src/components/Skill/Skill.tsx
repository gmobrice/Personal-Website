import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Rating } from '../Rating/Rating';

import './Skill.scss';

interface ISkillProps
{
    title: string,
    years: number,
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
        <Row className="skill-card" >
            <Col>
                <h6>{ this.props.title }</h6>
                <p>
                    <Rating {...rating} />
                </p>
            </Col>
        </Row>
        );
    }
}
