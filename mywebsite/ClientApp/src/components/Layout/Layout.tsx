import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from '../NavMenu/NavMenu';
import { SocialLinks } from '../SocialLinks/SocialLinks';

export class Layout extends Component 
{
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu />
        <div>
          <SocialLinks />
          <Container>
            {this.props.children}
          </Container>
        </div>
      </div>
    );
  }
}
