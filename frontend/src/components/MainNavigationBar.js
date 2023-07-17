import React from "react";
import logo from "../resources/logo192.png";
import { Link } from "react-router-dom";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";

const MainNavigationBar = () => {
  return (
    <header>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              alt="logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {"SorinCord"}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1" style={{ marginLeft: "1rem" }}>
                Description
              </Nav.Link>
              <Nav.Link href="#action2" style={{ marginLeft: "1rem" }}>
                Features
              </Nav.Link>
              <Nav.Link href="#action3" style={{ marginLeft: "1rem" }}>
                About Us
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Link to="/login">
                <Button variant="outline-success">Login</Button>
              </Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default MainNavigationBar;
