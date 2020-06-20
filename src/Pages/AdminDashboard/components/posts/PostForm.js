import React from "react";
import PropTypes from "prop-types";
import {Form, Button} from "react-bootstrap";
import Input from "../form/Input";
import Textarea from "../form/Textarea";
import Navbar from "../../containers/layout/Navbar";
import Footer from "../../../../Footer/Footer";


const PostForm = ({post, onChange, onBlur, loading, onSubmit}) => {
    const {title, titleGR, lesson, lessonGR, language, hasTest, lessonSummary, lessonSummaryGR,
        testExercise, testExerciseGR, initialCode, answer, errors} = post;

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
                    <Input
                        name="titleGR"
                        type="text"
                        placeholder="Enter Greek Post Title"
                        value={titleGR}
                        onChange={onChange}
                        onBlur={onBlur}
                        text={{
                            module: "post",
                            label: "Greek Title",
                            error: errors.titleGR
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
                            error: errors.lesson
                        }}
                    />
                    <Textarea
                        name="lessonGR"
                        placeholder="Include your regular text in <p></p>, your code samples in <span></span> and your console
                        outputs in <code></code>. You can use other html tags too like </br> and <b></b>"
                        value={lessonGR}
                        onChange={onChange}
                        onBlur={onBlur}
                        text={{
                            module: "post",
                            label: "Greek Lesson",
                            error: errors.lessonGR
                        }}
                    />

                    <h5 className="mt-2">Lesson Has Test</h5>
                    <input
                        name="hasTest"
                        type="checkbox"
                        className="mb-2"
                        defaultChecked={hasTest}
                        value={hasTest}
                        onChange={onChange}
                        onBlur={onBlur}
                    />
                    <br/>
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
                                    error: errors.lessonSummary
                                }}
                            />
                            <Textarea
                                name="lessonSummaryGR"
                                placeholder="Write your lesson's summary here... It will appear on the test."
                                value={lessonSummaryGR}
                                onChange={onChange}
                                onBlur={onBlur}
                                text={{
                                    module: "post",
                                    label: "Greek Lesson Summary",
                                    error: errors.lessonSummaryGR
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
                                    error: errors.testExercise
                                }}
                            />
                            <Textarea
                                name="testExerciseGR"
                                placeholder="Write your test's exercise here."
                                value={testExerciseGR}
                                onChange={onChange}
                                onBlur={onBlur}
                                text={{
                                    module: "post",
                                    label: "Greek Test Exercise",
                                    error: errors.testExerciseGR
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
                                    error: errors.initialCode
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
                                    error: errors.answer
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
