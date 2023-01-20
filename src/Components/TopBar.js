import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const TopBar = () => {
  return (
    <Navbar bg="light" expand="lg" >
      <Navbar.Brand style={{margin: "5px 0 0 20px", color: "#08624c"}} href="#home">
      &#129365; instacart
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto">
        </Nav>
          <Nav style={{padding: "24px 40px 20px 40px", fontSize: "18px", lineHeight: "26px", fontWeight: "bolder", display: "flex" }}>
            <Nav.Link href="#LogIn">Log In</Nav.Link>
            <Button variant="success">Sign Up</Button>{' '}
          </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default TopBar

