import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../assets/logo.png';
import { Image } from 'react-bootstrap';
import icon from '../assets/icon.png'
import '../style/nav.css'

function OffcanvasExample() {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} fixed='top' className=" nav bg-white">
          <Container fluid>
            <Navbar.Brand href="#"><Image className='logo' src={logo} alt='logo'/></Navbar.Brand>
            <Navbar.Toggle className='off' aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas className='offcanvas'
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Dekoor
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center align-items-center flex-grow-1 pe-3 gap-4">
                  <Nav.Link href="#action1">About Us</Nav.Link>
                  <NavDropdown
                    title="Furniture"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action1">Partnership</Nav.Link>
                  <Nav.Link href="#action1">Contact</Nav.Link>
                </Nav>
                <div className="nav-button">
                    <Button className='b-signup text-black'>Sign Up</Button>
                    <div className="keranjang">
                    <Navbar.Brand href="#"><Image className='icon' href="#"src={icon} alt='icon'/></Navbar.Brand>
                    </div>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;