import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from '../NavMenu/NavMenu';
import { SocialLinks } from '../SocialLinks/SocialLinks';
import { Footer } from '../Footer/Footer';

export class Layout extends Component 
{
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu />
        
        <div>
          <Container>
            {this.props.children}
          </Container>
          <SocialLinks />
        </div>

        <Footer />        
      </div>
    );
  }
}
