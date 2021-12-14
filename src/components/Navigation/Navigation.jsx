import "./Navigation.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

function Navigation() {
    return (
            <Navbar bg="navColor" variant="dark" sticky="top" expand="xl" collapseOnSelect>
                <Navbar.Brand style={{"padding": "10px 20px"}}>
                    Rob
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <NavDropdown title="Robdog">
                            <NavDropdown.Item href="/rob">rob</NavDropdown.Item>
                            <NavDropdown.Item href="/dog">dog</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/robdog">robdog</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="login">Login</Nav.Link>
                        <Nav.Link eventKey={2} href="register">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    );
}

export default Navigation;