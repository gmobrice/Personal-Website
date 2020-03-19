import React, { Component } from 'react';

import './Rating.scss';

interface IRatingProps
{
    rating: number,
    outOf: number
}

interface IRatingState
{

}

export class Rating extends Component<IRatingProps, IRatingState> 
{
    public static defaultProps: Pick<IRatingProps, "outOf"> =
    {
        outOf: 5
    };

    constructor(props: IRatingProps)
    {
        super(props)
    }


    render () 
    {
        let render: JSX.Element[] = [];

        for (let i = 0; i < this.props.rating; i++)
            render.push( <div className='rating filled'></div> );

        for (let i = 0; i < (this.props.outOf - this.props.rating); i++)
            render.push( <div className='rating empty'></div> );

        return (
        <div>
            { render }
        </div>
        );
    }
}
