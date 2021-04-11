import React from 'react';
import {Carousel} from 'react-bootstrap';

const CarouselPage = () =>{

    return(
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="book1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Fill your house with stacks of books</h3>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="book2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Books are a uniquely portable magic</h3>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="book3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Today a reader, tomorrow a leader.</h3>
            {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
</Carousel>
    )
}

export default CarouselPage