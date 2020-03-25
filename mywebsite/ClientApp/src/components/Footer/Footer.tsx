import React, { Component } from 'react';
import { Container } from 'reactstrap';

import './Footer.scss';

export class Footer extends Component
{
    render () 
    {
        return (
            <footer>
                <Container>
                    <div className="d-flex justify-content-center">
                        Lorem ipsum dolor sit amet
                    </div>
                </Container>
            </footer>
        );
    }
}