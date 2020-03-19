import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { Rating } from '../Rating/Rating';

import './Skill.scss';

interface ISkillProps
{
    title: string,
    years: number,
    description: string,
    rating: number,
    outOf?: number
}

interface IRating
{
    rating: number,
    outOf?: number
}

export class Skill extends Component<ISkillProps> 
{
    render () 
    {
        let rating: IRating = 
        {
            rating: this.props.rating
        }

        if (this.props.outOf != undefined && this.props.outOf != null) rating.outOf = this.props.outOf

        return (
        <div className="skill-card">
            <Card>
                <CardBody>
                    <CardTitle>{ this.props.title }</CardTitle>
                    <CardText><Rating {...rating} /></CardText>
                </CardBody>
            </Card>
        </div>
        );
    }
}
