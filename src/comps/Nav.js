import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import * as ReactBootStrap from "react-bootstrap";

function Nav() {
  return (
      <div className = "Nav">
      <ReactBootStrap.Navbar collapseOnSelect expand="xl"  variant="dark" >
      <ReactBootStrap.Navbar.Brand href="/">DRAWW</ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
        </ReactBootStrap.Nav>
        <ReactBootStrap.Nav>
          <ReactBootStrap.Nav.Link href="/CreatePage">+ create a page</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link eventKey={2} href="/Submit">
            submit a prompt
          </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
    </div>
  );
}

export default Nav;
