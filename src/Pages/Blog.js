import React, { Component } from 'react'
import { Container, Media, Row, Col } from 'react-bootstrap'

export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Media className="m-5">
                            <img
                            width={150}
                            heigh={150}
                            className="mr-3"
                            src="https://tech-geek.ru/wp-content/uploads/javascript-security.jpg" />
                        <Media.Body>
                            <h5>Blog post</h5>
                            <p>bla bla bla</p>
                        </Media.Body>
                        </Media>
                    </Col>
                </Row>
            </Container>
        )
    }
}
