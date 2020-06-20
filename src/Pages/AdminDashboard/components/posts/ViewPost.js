import React from "react";
import PropTypes from "prop-types";
import getFormattedDate from "../../utils/getFormattedDate";
import {Col, Button} from "react-bootstrap";
import "./post.scss";
import Navbar from "../../containers/layout/Navbar";
import Footer from "../../../../Footer/Footer";
import axios from "axios"


const ViewPost = ({post, auth, onDelete, onEdit}) => {
    const postDate = getFormattedDate(post.date);

    function PublishPost() {
        axios.get('/api/lesson/' + post.language + '/' + post.title.en).then(
            res => {
                if (res.data.length === 0){
                    axios.get('/api/lesson/get/titles/' + encodeURIComponent(post.language)).then(res => {
                        let l = '';
                        let i = 1;
                        console.log(res);
                        res.data["lessons"].forEach(t => {
                            l += i + ". " + t.title + '\n';
                            i++;
                        });
                        const key = prompt("Please enter the key of the lesson" +
                            " (if there is a collision the other lessons will shift one key):\n" + l);
                        if(key === null || key === ""){
                            alert("Publication aborted")
                        }else {
                            axios.post('/api/lesson/',
                                {
                                    language: post.language, test: post.hasTest, title: post.title.en,
                                    eltitle: post.title.gr, text: post.lesson.en, eltext: post.lesson.gr,
                                    key: parseInt(key)
                                }).then(res => {
                                if (res.status === 201) {
                                    axios.post('/api/test/', {
                                        language: post.language,
                                        title: post.title.en,
                                        lessonSummary: post.lessonSummary,
                                        test: post.test,
                                        initialCode: post.initialCode,
                                        answer: post.answer
                                    });
                                    alert("Lesson successfully published!");
                                }
                            })
                        }
                    });


                } else{
                    alert("This lesson is either published or it has a same name with another lesson");
                }
            }
        );
    }

    function DeletePost() {
        if (window.confirm("This will not only delete the post but also the lessons with this name and this language")) {
            onDelete();
            axios.delete('/api/lesson/' + post.language + '/' + post.title.en).then(
                res => {
                    console.log(res);
                    axios.delete('/api/test/' + post.language + '/' + post.title.en).then()
                }
            )
        }
    }

    return (
        <>
            <Navbar/>
            <div className="text-white outlinedText m-5 text-center">
                <h1 className="font-weight-bold">{post.language}</h1>
                <h2 className="font-weight-bold">{post.title.en + " / " + post.title.gr}</h2>
                <h2> Lesson's appearance: </h2>
                <div className="lessons whiteBorder" dangerouslySetInnerHTML={{__html: post.lesson.en}}/>
                <br/>
                <div className="lessons whiteBorder" dangerouslySetInnerHTML={{__html: post.lesson.gr}}/>
                <br/><br/>
                This Lesson has a test: {post.hasTest ? "Yes" : "No"}
                <br/><br/><br/><br/><br/><br/>
                Created by : {post.author} <br/>
                Date: {postDate} <br/> <br/>
                {auth && (
                    <>
                        <Button
                            className="d-flex m-auto"
                            onClick={PublishPost}
                            size="lg" variant="success">
                            Publish
                        </Button>
                        <Col className="mt-3">
                            <Button
                                className="mr-2"
                                variant="outline-info"
                                onClick={onEdit}
                            >
                                Edit
                            </Button>
                            <Button variant="outline-danger" onClick={DeletePost}>
                                Delete
                            </Button>
                        </Col>
                    </>
                )}
            </div>
            <Footer/>
        </>
    )

};


ViewPost.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.bool.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default ViewPost;
