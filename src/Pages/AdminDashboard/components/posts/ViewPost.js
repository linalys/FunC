import React from "react";
import PropTypes from "prop-types";
import getFormattedDate from "../../utils/getFormattedDate";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./post.scss";
import Navbar from "../../containers/layout/Navbar";
import {useSelector} from "react-redux";
import Header from "../../../../Header/Header";
import Footer from "../../../../Footer/Footer";


const ViewPost = ({ post, auth, onDelete, onEdit }) => {
    const postDate = getFormattedDate(post.date);
    return (
        <>
            <Navbar/>
            <div className="text-white outlinedText m-5 text-center">
                <h1 className="font-weight-bold">{post.title}</h1>

                {post.body} <br/> <br/><br/><br/><br/><br/><br/><br/>
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

}


ViewPost.propTypes = {
   post: PropTypes.object.isRequired,
   auth: PropTypes.bool.isRequired,
   onEdit: PropTypes.func.isRequired,
   onDelete: PropTypes.func.isRequired
};

export default ViewPost;
