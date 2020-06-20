import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import PostForm from "../../components/posts/PostForm";
import Validate from "../../components/form/Validate";
import {connect} from "react-redux";
import {getPostByID, updatePost} from "../../actions/postActions";

const UpdatePostPage = ({
                            errors,
                            updatePost,
                            loading,
                            currentPost,
                            getPostByID,
                            match,
                            history
                        }) => {
    const [post, setPost] = useState({
        title: "",
        titleGR: "",
        lesson: "",
        lessonGR: "",
        language: "c++",
        hasTest: false,
        lessonSummary: "",
        lessonSummaryGR: "",
        testExercise: "",
        testExerciseGR: "",
        initialCode: "",
        answer: "",
        errors: {}
    });

    useEffect(() => {
        getPostByID(match.params.id);
    }, []/*[match, getPostByID]*/);

    // updating the local state of post with the received post data
    useEffect(() => {
        if (currentPost.length === 0) {
            return;
        }
        setPost(post => ({
            title: currentPost.title !== undefined ? currentPost.title.en : "",
            titleGR: currentPost.title !== undefined ? currentPost.title.gr : "",
            lesson: currentPost.lesson !== undefined ? currentPost.lesson.en : "",
            lessonGR: currentPost.lesson !== undefined ? currentPost.lesson.gr : "",
            language: currentPost.language,
            hasTest: currentPost.hasTest,
            lessonSummary: currentPost.lessonSummary !== undefined ? currentPost.lessonSummary.en : "",
            lessonSummaryGR: currentPost.lessonSummary !== undefined ? currentPost.lessonSummary.gr : "",
            testExercise: currentPost.test !== undefined ? currentPost.test.en : "",
            testExerciseGR: currentPost.test !== undefined ? currentPost.test.gr : "",
            initialCode: currentPost.initialCode,
            answer: currentPost.answer,
            errors: {...post.errors}
        }));
    }, [currentPost]);

    useEffect(() => {
        setPost(post => {
            return {...post, errors};
        });
    }, []);

    const handleChange = e => {
       if(e.target.name === "hasTest"){
          setPost({
             ...post,
             [e.target.name]: e.target.checked
          });
          return;
       }
        setPost({
            ...post,
            [e.target.name]: e.target.value
        });
    };

    const handleBlur = e => {
        const {name, value} = e.target;
        const error = {...post.errors, ...Validate(name, value).errors};
        setPost({...post, errors: {...error}});
    };

    const handleSubmit = e => {
        e.preventDefault();
        const {
            title, titleGR, lesson, lessonGR, language, hasTest, lessonSummary, lessonSummaryGR,
            testExercise, testExerciseGR, initialCode, answer
        } = post;
        updatePost(currentPost._id, {
            title, titleGR, lesson, lessonGR, language, hasTest, lessonSummary, lessonSummaryGR,
            testExercise, testExerciseGR, initialCode, answer
        }, history);
    };

    // to ensure that the post is loaded otherwise we would make uncontrolled form access error
    const isPostLoaded = () => {
        return post.title || post.lesson || Object.keys(post.errors).length > 0;
    };

    return isPostLoaded() ? (
        <PostForm
            loading={loading}
            post={post}
            onChange={handleChange}
            onBlur={handleBlur}
            onSubmit={handleSubmit}
        />
    ) : (
        <div/>
    );
};

const mapStateToProps = state => ({
    currentPost: state.post.post,
    loading: state.post.postLoading,
    errors: state.errors
});

UpdatePostPage.propTypes = {
    currentPost: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    getPostByID: PropTypes.func.isRequired,
    updatePost: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    {getPostByID, updatePost}
)(UpdatePostPage);
