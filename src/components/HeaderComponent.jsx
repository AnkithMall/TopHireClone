import { Navbar, Nav, Form, Container, Row, Col, FormControl, Button , NavDropdown } from 'react-bootstrap';

const HeaderComponent = () => {
    return (
        <>
            <Container>
                <Navbar expand="lg">
                    <Navbar.Brand href="#home">
                        <img className='mt-4' src="https://d383au3bye3rv1.cloudfront.net/static/images/logo/main.png" alt="TopHire Logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Employers</Nav.Link>
                            <Nav.Link href="#link">Refer &amp; Earn ₹15k</Nav.Link>
                            <Nav.Link href="#link">Login</Nav.Link>
                            <Nav.Link href="#link">Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </>
    )
}

export default HeaderComponent;