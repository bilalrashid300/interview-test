import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Organisations</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <NavDropdown title="English(USA)" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">English(USA)</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">English(UK)</NavDropdown.Item>
            </NavDropdown>|
            <Nav.Link href="#deets">University of London</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
