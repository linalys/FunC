import React from "react";
import PropTypes from "prop-types";
import getFormattedDate from "../../utils/getFormattedDate";
import { Col, Button } from "react-bootstrap";
import "./post.scss";
import Navbar from "../../containers/layout/Navbar";
import Footer from "../../../../Footer/Footer";


const ViewPost = ({ post, auth, onDelete, onEdit }) => {
    const postDate = getFormattedDate(post.date);
    return (
        <>
            <Navbar/>
            <div className="text-white outlinedText m-5 text-center">
                <h1 className="font-weight-bold">{post.language}</h1>
                <h2 className="font-weight-bold">{post.title.en + " / " + post.title.gr}</h2>
                <h3>{post.lesson.en}</h3> <br/><br/> <h3>{post.lesson.gr}</h3> <br/><br/> This Lesson has a test: {post.hasTest ? "Yes" : "No"} <br/>
                <br/><br/><br/><br/><br/>
                Created by : {post.author} <br/>
                Date: {postDate} <br/> <br/>
                {auth && (
                    <Col >
                        <Button
                            className="mr-2"
                            variant="outline-info"
                            onClick={onEdit}
                        >
                            Edit
                        </Button>
                        <Button variant="outline-danger" onClick={onDelete}>
                            Delete
                        </Button>
                    </Col>
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
