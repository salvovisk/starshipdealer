import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logOut, logIn } from "../Store/actions";

const NavbarComponent = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const { name, isLogged } = userState;

  const UserNavMsg = (name) => {
    return name ? `Hello ${name}` : "Hello User";
  };

  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Starships Dealer</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavDropdown title={UserNavMsg(name)} id="basic-nav-dropdown">
            {/* {isLogged ? (
              <NavDropdown.Item onClick={dispatch(logOut())}>
                Log out
              </NavDropdown.Item>
            ) : null}
            {!isLogged ? (
              <NavDropdown.Item>
                Log In
              </NavDropdown.Item>
            ) : null} */}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
