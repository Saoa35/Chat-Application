import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Navbar bg="success" className="mb-4" style={{ height: "3.75rem" }}>
      <Container>
        <h2>
          <Link to="/" className="link-info text-decoration-none">
            Chaters
          </Link>
        </h2>
        <span className="text-warning">Welcome Alex</span>
        <Nav>
          <Stack direction="horizontal" gap={3}>
            <Link to="/login" className="link-light text-decoration-none">
              Login
            </Link>
            <Link to="/register" className="link-light text-decoration-none">
              Register
            </Link>
          </Stack>
        </Nav>
      </Container>
    </Navbar>
  );
};
