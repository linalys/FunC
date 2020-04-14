import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
        "mdbreact";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import CarouselCaption from "react-bootstrap/CarouselCaption";
import CarouselItem from "react-bootstrap/CarouselItem";

const CarouselPage = () => {
    return (
        <Container>
            <Carousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
            >
                    <CarouselItem itemId="1">
                            <img
                                className="d-block w-100"
                                src="alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg"
                                alt="First slide"
                            />
                        <CarouselCaption>
                            <h3 className="h3-responsive">What is the purpose of this website?</h3>
                            <p>FunC aims to help people make their first steps into the programming community.
                                 It provides basic knowledge on various major programming languages.
                                 It’s up to the user to decide which one to begin with.</p>
                        </CarouselCaption>
                    </CarouselItem>
                    <CarouselItem itemId="2">
                            <img
                                className="d-block w-100"
                                src="mark-s-TkEPQPWr2sY-unsplash.jpg"
                                alt="Second slide"
                            />

                        <CarouselCaption>
                            <h3 className="h3-responsive">How do the lessons work?</h3>
                            <p>Every language has a list of topics that describe a phenomenon in said language.
                                Each topic consists of the theoretical - the use, the grammar and syntax - and the practical –
                                examples – parts. There is also a testing part, provided only to the subscribers of the page.
                                After the user has become familiar with the phenomenon, they can move one to the next one.</p>
                        </CarouselCaption>
                    </CarouselItem>
                    <CarouselItem itemId="3">

                            <img
                                className="d-block w-100"
                                src="mark-s-TkEPQPWr2sY-unsplash.jpg"
                                alt="Third slide"
                            />

                        <CarouselCaption>
                            <h3 className="h3-responsive">Why subscribe and create a profile?</h3>
                            <p>When logged in your FunC profile, you have a series of advantages. First of all,
                                you have access to personal tests in each topic of every lesson, for evaluation of your
                                skills and further training. Also, you know at any point how far along are you in the course,
                                and your progress is saved, so that you can continue at any moment from any device. </p>
                        </CarouselCaption>
                    </CarouselItem>
                <CarouselItem itemId="4">

                    <img
                        className="d-block w-100"
                        src="mark-s-TkEPQPWr2sY-unsplash.jpg"
                        alt="Fourth slide"
                    />
                    <CarouselCaption>
                        <h3 className="h3-responsive">Who are we?</h3>
                        <p>We are a team of undergraduate students, tasked to build up their own website, with
                            a subject of our choosing. And what better way to promote your studies than sharing your knowledge.
                            It is, indeed, amateur work, so feel free to give us your feedback with comments and reactions " +
                            on our lessons, to help us help you get the best possible experience while learning how to code. </p>
                    </CarouselCaption>
                </CarouselItem>
            </Carousel>
        </Container>
    );
}

export default CarouselPage;