import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = ({ handleSelect }) => {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" onSelect={(eventKey) => handleSelect(eventKey)}>
         <Container>
           <Navbar.Brand>Toast Dynamics</Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
                   <Nav className="me-auto">
                     <Nav.Link eventKey="home">Home</Nav.Link>
                     <Nav.Link eventKey="vision">Vision</Nav.Link>
                     <Nav.Link eventKey="members">Members</Nav.Link> 
                     <Nav.Link eventKey="currdev">Current Development</Nav.Link>
                               </Nav>
                 </Navbar.Collapse>
        </Container>
      </Navbar>
        );
}

export default Navigation;
