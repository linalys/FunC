import React from "react";
import {MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer} from
        "mdbreact";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import CarouselCaption from "react-bootstrap/CarouselCaption";
import CarouselItem from "react-bootstrap/CarouselItem";

import "./Carousel.css"

const CarouselPage = (props) => {
    return (
        <Container className="carousel">
            <Carousel
                activeItem={1}
                showControls={true}
                showIndicators={true}
                className="z-depth-1 h-100 font-weight-bold"
            >
                <CarouselItem itemId="1" className="h-100">
                    <img
                        className="d-flex w-100"
                        src="alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg"
                        alt="First slide"
                    />
                    <CarouselCaption>
                        <h3 className="h3-responsive">{props.question1}</h3>
                        <p>{props.message1}</p>
                    </CarouselCaption>
                </CarouselItem>
                <CarouselItem itemId="2" className="h-100">
                    <img
                        className="d-block w-100"
                        src="mark-s-TkEPQPWr2sY-unsplash.jpg"
                        alt="Second slide"
                    />
                    <CarouselCaption>
                        <h3 className="h3-responsive">{props.question2}</h3>
                        <p>{props.message2}</p>
                    </CarouselCaption>
                </CarouselItem>
                <CarouselItem itemId="3" className="h-100">
                    <img
                        className="d-block w-100"
                        src="mark-s-TkEPQPWr2sY-unsplash.jpg"
                        alt="Third slide"
                    />
                    <CarouselCaption>
                        <h3 className="h3-responsive">{props.question3}</h3>
                        <p>{props.message3}</p>
                    </CarouselCaption>
                </CarouselItem>
                <CarouselItem itemId="4" className="h-100">
                    <img
                        className="d-block w-100"
                        src="mark-s-TkEPQPWr2sY-unsplash.jpg"
                        alt="Fourth slide"
                    />
                    <CarouselCaption>
                        <h3 className="h3-responsive">{props.question4}</h3>
                        <p>{props.message4}</p>
                    </CarouselCaption>
                </CarouselItem>
            </Carousel>
        </Container>
    );
};

export default CarouselPage;