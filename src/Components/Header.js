import React, { Component } from 'react'
import { Navbar, FormControl, Form, Nav, Container, Button} from 'react-bootstrap'
import logo from './logo192.png'; 
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from '../Pages/Home'
import About from '../Pages/About'
import Contacts from '../Pages/Contacts'
import Blog from '../Pages/Blog'
import Login from '../Pages/Login'

export default class Header extends Component {
    render() {
        return (
            <>
            <Router>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/" >
                        <img    
                            src={logo}
                            height="30"
                            width="30"
                            className="d-inline-block aling-top"
                            alt="Logo"
                            />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/" > Home </Nav.Link>
                            <Nav.Link as={Link} to="/about" > About </Nav.Link>
                            <Nav.Link as={Link} to="/contacts" > Contacts </Nav.Link>
                            <Nav.Link as={Link} to="/blog" > Blog </Nav.Link>
                            <Nav.Link as={Link} to="/login" > Login/Logout </Nav.Link>
                        </Nav>
                        <Form inline >
                            <FormControl
                                type="text"
                                placegolder="Search"
                                className="mr-sm-2"
                            />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </Router>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contacts" component={Contacts} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </Router>
        </>
        );
    }
}
