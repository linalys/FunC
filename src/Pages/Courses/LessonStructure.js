import React, {useEffect, useState} from "react";
import Header from "../../Header/Header";
import Sidebar from "./sidebar";
import {Button, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useSelector} from "react-redux";
import LocalizedStrings from "react-localization";
import axios from "axios";
import Footer from "../../Footer/Footer";

let langStrings = new LocalizedStrings({
    en: {
        test: "Take a Test!",
        previous: "🠈 Previous Lesson",
        next: "Next Lesson 🠊",
    },
    gr: {
        test: "Κάνε το Τεστ!",
        previous: "🠈 Προηγούμενο Μάθημα",
        next: "Επόμενο Μάθημα 🠊"
    }
});


function LessonStructure() {
    const language = useSelector(state => state.language);
    const [posts, setPosts] = useState([]);
    const [previousLink, setPreviousLink] = useState('/');
    const [nextLink, setNextLink] = useState('/');
    const [items, setItems] = useState([]);


    let myUrl = window.location.pathname.split("/");
    let lang = myUrl[2];
    let tit = myUrl[3].replace(/-/g, " ");


    function displayBlogPost() {
        if (posts.length === 0) {
            return {__html: " "};
        }
        if (language === 'en') {
            return {__html: posts.text};
        } else {
            return {__html: posts.eltext};
        }
    }


    useEffect(() => {

        async function getBlogPost() {
            axios.get('/lesson/' + lang + '/' + tit)
                .then((response) => {
                    const data = response.data;
                    setPosts(data[0]);

                    return displayBlogPost()
                })
                .catch(() => {
                    alert('Error retrieving data!!!');
                });

        }

        getBlogPost().then()
    }, []);


    useEffect(() => {
        async function getTitles() {

            console.log(lang);
            axios.get('/lesson/titles/')
                .then((response) => {
                    const data = response.data["lessons"];
                    setItems(data);
                    console.log(response.data);

                    //Getting previous and next lesson's url.
                    const keyLesson = data.findIndex(lesson => lesson.title === tit);
                    if (keyLesson !== 0) {
                        setPreviousLink(data[keyLesson - 1].url)
                    }
                    if (keyLesson !== data.length - 1) {
                        setNextLink(data[keyLesson + 1].url)
                    }

                    console.log('Data has been received!!');
                })
                .catch(() => {
                    alert('Error retrieving data!!!');
                });
        }

        getTitles().then()
    }, []);

    console.log(items);

    return (
        <>
            <Header/>
            <Sidebar Lessons={items} Language={language}/>
            <div className="lessons courses">
                <h1 className="title superRainbowText outlineForRainbowTextTHICC mb-5">{(language === 'en' && posts.title) || posts.eltitle}</h1>

                <div dangerouslySetInnerHTML={displayBlogPost()}/>
                <Container className="mt-3">
                    <Button variant="dark" size="lg" className="test" href="/for_text">
                        <b className="text"> {langStrings.test}</b>
                    </Button>
                </Container>
                <br/>
                <br/>
                <Container fluid={true} className="mb-5">
                    <Row>
                        <Col>
                            <Button variant="light" size="lg" hidden={previousLink === '/'}
                                    className="previous" href={previousLink}>
                                <b className="text"> {langStrings.previous}</b>
                            </Button>
                        </Col>
                        <Col>
                            <Button variant="light" size="lg" hidden={nextLink === '/'}
                                    className="next" href={nextLink}>
                                <b className="text"> {langStrings.next}</b>
                            </Button>
                        </Col>
                    </Row>
                </Container>

            </div>
            <Footer/>
        </>
    )
}


export default LessonStructure;