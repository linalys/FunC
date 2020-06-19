import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Input from "../form/Input";
import Textarea from "../form/Textarea";
import getFormattedDate from "../../utils/getFormattedDate";
import Navbar from "../../containers/layout/Navbar";
import Footer from "../../../../Footer/Footer";


const PostForm = ({ post, onChange, onBlur, loading, onSubmit }) => {
    const { title, body, errors } = post;

    return (
        <>
            <Navbar/>
            <div className="text-white outlinedText m-5 text-center">
                <h1 className="font-weight-bold">EDIT</h1>
                <Form noValidate onSubmit={onSubmit} className="p-sm-3 p-xs-1">
                    <Input
                        name="title"
                        type="text"
                        placeholder="Enter Post Title"
                        value={title}
                        onChange={onChange}
                        onBlur={onBlur}
                        text={{
                            module: "post",
                            label: "Title",
                            error: errors.title
                        }}
                    />
                    <Textarea
                        name="body"
                        placeholder="Write your post here..."
                        value={body}
                        onChange={onChange}
                        onBlur={onBlur}
                        text={{
                            module: "post",
                            label: "Description",
                            error: errors.body
                        }}
                    />
                    <Button
                        variant="outline-info"
                        type="submit"
                        disabled={loading}
                        className="mt-3"
                    >
                        Submit
                    </Button>
                </Form>
            </div>
            <Footer/>
        </>
    )

}


PostForm.propTypes = {
   post: PropTypes.object.isRequired,
   loading: PropTypes.bool.isRequired,
   onBlur: PropTypes.func.isRequired,
   onChange: PropTypes.func.isRequired,
   onSubmit: PropTypes.func.isRequired
};

export default PostForm;
