import React from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import CarouselCaption from "react-bootstrap/CarouselCaption";
import CarouselItem from "react-bootstrap/CarouselItem";

import "./Carousel.css"

const CarouselPage = (props) => {
    return (
        <Container className="carousel">
            <Carousel
                activeitem={1}
                showcontrols="true"
                showindicators="true"
                className="z-depth-1 h-100 font-weight-bold"
            >
                <CarouselItem itemID="1" className="h-100">
                    <img
                        className="d-flex w-100"
                        src={props.image1}
                        alt="First slide"
                    />
                    <CarouselCaption>
                        <h3 className="h3-responsive">{props.question1}</h3>
                        <p>{props.message1}</p>
                    </CarouselCaption>
                </CarouselItem>
                <CarouselItem itemID="2" className="h-100">
                    <img
                        className="d-block w-100"
                        src={props.image2}
                        alt="Second slide"
                    />
                    <CarouselCaption>
                        <h3 className="h3-responsive">{props.question2}</h3>
                        <p>{props.message2}</p>
                    </CarouselCaption>
                </CarouselItem>
                <CarouselItem itemID="3" className="h-100">
                    <img
                        className="d-block w-100"
                        src={props.image3}
                        alt="Third slide"
                    />
                    <CarouselCaption>
                        <h3 className="h3-responsive">{props.question3}</h3>
                        <p>{props.message3}</p>
                    </CarouselCaption>
                </CarouselItem>
                <CarouselItem itemID="4" className="h-100">
                    <img
                        className="d-block w-100"
                        src={props.image4}
                        alt="Fourth slide"
                    />
                    <CarouselCaption>
                        <h3 className="h3-responsive">{props.question4}</h3>
                        <p>{props.message4}</p>
                    </CarouselCaption>
                </CarouselItem>
                <CarouselItem itemID="5" className="h-100">
                    <img
                        className="d-flex w-100"
                        src={props.image5}
                        alt="First slide"
                    />
                    <CarouselCaption>
                        <h3 className="h3-responsive">{props.title5}</h3>
                        <p>{props.message5}</p>
                    </CarouselCaption>
                </CarouselItem>
            </Carousel>
        </Container>
    );
};

export default CarouselPage;