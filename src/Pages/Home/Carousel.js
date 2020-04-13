import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';



const items = [
    {
        id: 1,
        altText: 'What is the purpose of this website?',
        caption: 'FunC aims to help people make their first steps into the programming community. It provides basic knowledge on various major programming languages. It’s up to the user to decide which one to begin with.'
    },
    {
        id: 2,
        altText: 'How do the lessons work?',
        caption: 'Every language has a list of topics that describe a phenomenon in said language. Each topic consists of the theoretical - the use, the grammar and syntax - and the practical – examples – parts. There is also a testing part, provided only to the subscribers of the page. After the user has become familiar with the phenomenon, they can move one to the next one.'
    },
    {
        id: 3,
        altText: 'Why subscribe and create a profile?',
        caption: 'When logged in your FunC profile, you have a series of advantages. First of all, you have access to personal tests in each topic of every lesson, for evaluation of your skills and further training. Also, you know at any point how far along are you in the course, and your progress is saved, so that you can continue at any moment from any device. '
    },

    {
        id: 4,
        altText: 'Who are we?',
        caption: 'We are a team of undergraduate students, tasked to build up their own website, with a subject of our choosing. And what better way to promote your studies than sharing your knowledge. It is, indeed, amateur work, so feel free to give us your feedback with comments and reactions on our lessons, to help us help you get the best possible experience while learning how to code.'
    }
];

const Example = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                className="custom-tag"
                tag="div"
                key={item.id}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            >
                <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.altText} />
            </CarouselItem>
        );
    });

    return (
        <div>
            <style>
                {
                    `.custom-tag {
              max-width: 100%;
              height: 300px;
              background: grey;
            }`
                }
            </style>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </div>
    );
};

export default Example;