import "./Navigation.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap"

function Navigation() {
    return (
        <div>
            <Navbar bg="navColor" variant="dark">
                <Navbar.Brand style={{"padding": "10px 20px"}}>
                    Rob
                </Navbar.Brand>
                <Nav>
                    <NavDropdown title="Robdog">
                        <NavDropdown.Item href="/rob">rob</NavDropdown.Item>
                        <NavDropdown.Item href="/dog">dog</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/robdog">robdog</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>

        </div>
    )
}

export default Navigation;