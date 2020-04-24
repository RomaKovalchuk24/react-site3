import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import listImg from '../assets/list.jpeg';
import lustImg from '../assets/lust.jpeg';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100" 
                        src={ listImg }
                        alt="list"
                    />
                <Carousel.Caption>
                        <h3>List image</h3>
                        <p>Juniors Site</p>
                    
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" 
                        src={ lustImg }
                        alt="lust"
                    />
                <Carousel.Caption>
                        <h3>Lust image</h3>
                        <p>Juniors Site</p>
                    
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
