import React, { Component } from 'react'
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap'

export default class About extends Component {
    render() {
        return (
                <Container>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column mt-2">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first" >Desing</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second" >Team</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third" >Programming</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth" >Frameworks</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth" >Libraries</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventkey="first">
                                        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F482307441342160587%2F&psig=AOvVaw05_-0TJi_FIGTZsAzZLJCb&ust=1586895123111000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjZmZib5ugCFQAAAAAdAAAAABBB" />
                                        <p>bla bla bla</p>
                                    </Tab.Pane>
                                
                                    <Tab.Pane eventkey="second">
                                        <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fforbestechcouncil%2Ffiles%2F2019%2F05%2Fa-3.jpg" />
                                        <p>bla bla bla</p>
                                    </Tab.Pane>
                                
                                    <Tab.Pane eventkey="third">
                                        <img src="https://miro.medium.com/max/12032/0*0Y5KGpmSu9WPZwaF" />
                                        <p>bla bla bla</p>
                                    </Tab.Pane>
                    
                                    <Tab.Pane eventkey="fourth">
                                        <img src="https://envisionitagency.com/uploads/2018/04/frameworks-1280x720.png" />
                                        <p>bla bla bla</p>
                                    </Tab.Pane>

                                    <Tab.Pane eventkey="fifth">
                                        <img src="https://coderseye.com/wp-content/uploads/Jquery-Libraries-vs-Frameworks-vs-APIS.jpg" />
                                        <p>bla bla bla</p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                
                    </Tab.Container>
                </Container>
            
        );
    }
}
