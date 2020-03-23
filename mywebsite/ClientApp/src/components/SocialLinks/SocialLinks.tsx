import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

import './SocialLinks.scss';

export class SocialLinks extends Component 
{
    render () 
    {
        return (
            <div className="social">
                <a href="https://github.com/gmobrice" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={ faGithub } size="lg" />
                </a>
                <a href="https://linkedin.com/in/gmobrice" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={ faLinkedinIn } size="lg" />
                </a>
                <a href="https://instagram.com/gmobrice/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={ faInstagram } size="lg" />
                </a>
                <a href="mailto:gmobrice@outlook.com">
                    <FontAwesomeIcon icon={ faEnvelopeOpenText } size="lg" />
                </a>
            </div>
        );
    }
}
