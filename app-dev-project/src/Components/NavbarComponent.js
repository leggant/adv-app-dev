import React from "react";
import { routes } from "../Routes/routePaths";
import { Navbar, Container, Nav } from "react-bootstrap";
import LogoutButton from "./LogoutButton";

const NavbarComponent = ({ user }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href={routes.HOME}>PokerProject</Navbar.Brand>
        {user ? (
          //User must be logged in to see these links in the navbar
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link href={routes.HOME}>Games</Nav.Link>
              <Nav.Link href={routes.HOME}>How to play?</Nav.Link>
              <Nav.Link href={routes.HOME}>Profile</Nav.Link>
            </Nav>
            <Nav>
              <LogoutButton />
            </Nav>
          </Navbar.Collapse>
        ) : (
          // User must be logged out to see these links in the navbar
          <Navbar.Collapse>
            <Nav>
              <Nav.Link href={routes.LOGIN}>login</Nav.Link>
              <Nav.Link href={routes.SIGNUP}>signup</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
