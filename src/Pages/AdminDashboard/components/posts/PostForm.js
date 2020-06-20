import React from "react";
import PropTypes from "prop-types";
import {Form, Button} from "react-bootstrap";
import Input from "../form/Input";
import Textarea from "../form/Textarea";
import Navbar from "../../containers/layout/Navbar";
import Footer from "../../../../Footer/Footer";


const PostForm = ({post, onChange, onBlur, loading, onSubmit}) => {
    const {title, lesson, language, hasTest, lessonSummary, testExercise, initialCode, answer, errors} = post;

    return (
        <>
            <Navbar/>
            <div className="text-white outlinedText m-5 text-center">
                <h1 className="font-weight-bold">EDIT</h1>
                <Form noValidate onSubmit={onSubmit} className="p-sm-3 p-xs-1">

                    <h5>Language</h5>
                    <select
                        name="language"
                        className="w-50"
                        size="lg"
                        value={language}
                        onChange={onChange}
                        onBlur={onBlur}
                    >
                        <option datavalue="c++">C++</option>
                        <option datavalue="java">Java</option>
                        <option datavalue="sql">SQL</option>
                    </select>

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
                        name="lesson"
                        placeholder="Include your regular text in <p></p>, your code samples in <span></span> and your console
                        outputs in <code></code>. You can use other html tags too like </br> and <b></b>"
                        value={lesson}
                        onChange={onChange}
                        onBlur={onBlur}
                        text={{
                            module: "post",
                            label: "Lesson",
                            error: errors.body
                        }}
                    />

                    <Input
                        name="hasTest"
                        type="checkbox"
                        placeholder="Lesson has test"
                        value={hasTest.toString()}
                        onChange={onChange}
                        onBlur={onBlur}
                        text={{
                            module: "post",
                            label: "Lesson Has Test"
                        }}
                    />
                    {
                        hasTest &&
                        <>
                            <h5>Test Details</h5>
                            <Textarea
                                name="lessonSummary"
                                placeholder="Write your lesson's summary here... It will appear on the test."
                                value={lessonSummary}
                                onChange={onChange}
                                onBlur={onBlur}
                                text={{
                                    module: "post",
                                    label: "Lesson Summary",
                                    error: errors.body
                                }}
                            />

                            <Textarea
                                name="testExercise"
                                placeholder="Write your test's exercise here."
                                value={testExercise}
                                onChange={onChange}
                                onBlur={onBlur}
                                text={{
                                    module: "post",
                                    label: "Test Exercise",
                                    error: errors.body
                                }}
                            />

                            <Textarea
                                name="initialCode"
                                placeholder="This is what it will appear for starters on the editor of the test."
                                value={initialCode}
                                onChange={onChange}
                                onBlur={onBlur}
                                text={{
                                    module: "post",
                                    label: "Initial Code",
                                    error: errors.body
                                }}
                            />

                            <Textarea
                                name="answer"
                                placeholder="The value of the output for the correct answer (it's case sensitive)"
                                value={answer}
                                onChange={onChange}
                                onBlur={onBlur}
                                text={{
                                    module: "post",
                                    label: "Answer",
                                    error: errors.body
                                }}
                            />
                        </>
                    }


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

};


PostForm.propTypes = {
    post: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default PostForm;
