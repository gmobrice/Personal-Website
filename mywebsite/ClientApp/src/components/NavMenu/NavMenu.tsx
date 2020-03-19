import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './NavMenu.scss';

export class NavMenu extends Component<any, any> {
  static displayName = NavMenu.name;

  constructor (props: any) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
        <Navbar light expand="md" className="navbar-toggleable-md"> 
          <Container>
            <NavbarBrand tag={Link} to="/">
              <span className="first-name">gustavo</span> <span className="surname">mobrice</span>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-md-inline-flex flex-md-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">

                <NavItem className="title">
                  <span className="navbar-text">About me</span>
                </NavItem>

                <NavItem className="about">
                  <NavLink tag={Link} className="text-dark" to="/">Work</NavLink>
                </NavItem>

                <NavItem className="about">
                  <NavLink tag={Link} className="text-dark" to="/">Personal</NavLink>
                </NavItem>

                <NavItem className="title">
                  <span className="navbar-text">Connect with me</span>
                </NavItem>
                
                <NavItem>
                  <a className="nav-link" href="https://linkedin.com/in/gmobrice" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={ faLinkedinIn } /> <span>linkedin.com/in/gmobrice</span>
                  </a>
                </NavItem>

                <NavItem>
                  <a className="nav-link" href="https://github.com/gmobrice" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={ faGithub } /> <span>github.com/gmobrice</span>
                  </a>
                </NavItem>

                <NavItem>
                  <a className="nav-link" href="mailto:gmobrice@outlook.com">
                    <FontAwesomeIcon icon={ faEnvelopeOpenText } /> <span>gmobrice@outlook.com</span>
                  </a>
                </NavItem>
                
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
