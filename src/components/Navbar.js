import React from "react";
import "../styles.css/Navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Menu() {
    return (
        <section id="navbar">
            <Navbar className="nav-main" fixed="top" expand="lg" bg="transparent" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Louise Lee</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#about">What is Reiki?</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#services">Services</Nav.Link>
                            <NavDropdown title="More" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">
                                    Blog
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Gallery
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Pricing
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Contact
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </section>
    );
}

export default Menu;
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Nav from "react-bootstrap/Nav";
// import Navbar from 'react-bootstrap/Navbar';

//--------------------
/* <Navbar expand="lg" bg="dark" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Louise Lee</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> */
        //------------------------

// export default function Menu() {
//     return (
//         <section>
//             <nav className="navbar bg-primary navbar-expand-lg bg-body-tertiary">
//                 <div className="container-fluid">
//                     <a className="navbar-brand" href="#">Louise Lee</a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//                         <div className="navbar-nav">
//                             <a className="nav-link active" aria-current="page" href="#">Home</a>
//                             <a className="nav-link" href="#">Features</a>
//                             <a className="nav-link" href="#">Pricing</a>
//                             <a className="nav-link disabled">Disabled</a>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </section>
//     )
// }

