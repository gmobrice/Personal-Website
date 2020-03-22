import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
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
        <Navbar dark expand="md" className="navbar-toggleable-md"> 
          <Container fluid>
            <NavbarBrand tag={Link} to="/">
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-md-inline-flex flex-md-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">

                <NavItem className="about">
                  <NavLink tag={Link} className="text-dark" to="/">About me</NavLink>
                </NavItem>

                <NavItem className="about">
                  <NavLink tag={Link} className="text-dark" to="/">Experience</NavLink>
                </NavItem>

                <NavItem className="about">
                  <NavLink tag={Link} className="text-dark" to="/">Projects</NavLink>
                </NavItem>

                <NavItem className="about">
                  <NavLink tag={Link} className="text-dark" to="/">Contact</NavLink>
                </NavItem>

                <NavItem className="about">
                  <NavLink tag={Link} className="text-dark" to="/">Resume</NavLink>
                </NavItem>
                
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
