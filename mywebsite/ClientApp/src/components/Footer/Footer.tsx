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
                    <div className="d-flex">
                        <p>
                            Check it out the <a href="https://github.com/gmobrice/my-website" target="_blank" rel="noopener noreferrer">GitHub repo</a> of this website! <br />
                            Design by my good friend <a href="https://michelkoga.com/" target="_blank" rel="noopener noreferrer">Michel Koga</a> <small>(go check his work!)</small> 
                        </p>
                    </div>
                </Container>
            </footer>
        );
    }
}