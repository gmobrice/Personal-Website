import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

import './SocialLinks.scss';
import { Button } from 'reactstrap';

export class SocialLinks extends Component 
{
    render () 
    {
        return (
            <div className="social">
                <a href="">
                    <FontAwesomeIcon icon={ faGithub } size="lg" />
                </a>
                <a href="">
                    <FontAwesomeIcon icon={ faLinkedinIn } size="lg" />
                </a>
                <a href="">
                    <FontAwesomeIcon icon={ faEnvelopeOpenText } size="lg" />
                </a>
            </div>
        );
    }
}
