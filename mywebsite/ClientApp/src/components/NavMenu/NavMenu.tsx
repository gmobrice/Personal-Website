import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarToggler, NavItem } from 'reactstrap';
import { NavHashLink as NavLink } from 'react-router-hash-link';
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
        <Navbar dark expand="md" className="navbar-toggleable-md"> 
          <Container fluid>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-md-inline-flex flex-md-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink smooth to="/#about-me">About me</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink smooth to="/#experience">Experience</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink smooth to="/#projects">Projects</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink smooth to="/#contact">Contact</NavLink>
                </NavItem>

                <NavItem className="resume">
                  <a href="Resume.pdf" target="_blank">Resume</a>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
