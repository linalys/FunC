const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = validatePostInput = data => {
    let errors = {};

    let { title, titleGR, lesson, lessonGR, language, hasTest, lessonSummary, lessonSummaryGR,
        testExercise, testExerciseGR, initialCode, answer } = data;
    // Converting empty fields to empty string as validator function works only with strings
    title = !isEmpty(title) ? title : "";
    titleGR = !isEmpty(titleGR) ? titleGR : "";
    lesson = !isEmpty(lesson) ? lesson : "";
    lessonGR = !isEmpty(lessonGR) ? lessonGR : "";

    if (Validator.isEmpty(title)) {
        errors.title = "Title is required";
    }
    if (Validator.isEmpty(titleGR)) {
        errors.titleGR = "Greek Title is required";
    }
    if (Validator.isEmpty(lesson)) {
        errors.lesson = "Lesson is required";
    }
    if (Validator.isEmpty(lessonGR)) {
        errors.lessonGR = "Greek Lesson is required";
    }
    if (hasTest){
        lessonSummary = !isEmpty(lessonSummary) ? lessonSummary : "";
        lessonSummaryGR = !isEmpty(lessonSummaryGR) ? lessonSummaryGR : "";
        testExercise = !isEmpty(testExercise) ? testExercise : "";
        testExerciseGR = !isEmpty(testExerciseGR) ? testExerciseGR : "";
        initialCode = !isEmpty(initialCode) ? initialCode : "";
        answer = !isEmpty(answer) ? answer : "";

        if(Validator.isEmpty(lessonSummary)){
            errors.lessonSummary = "Lesson Summary is required";
        }
        if(Validator.isEmpty(lessonSummaryGR)){
            errors.lessonSummaryGR = "Greek Lesson Summary is required";
        }
        if(Validator.isEmpty(testExercise)){
            errors.testExercise = "Test Exercise is required";
        }
        if(Validator.isEmpty(testExerciseGR)){
            errors.testExerciseGR = "Greek Test Exercise is required";
        }
        if(Validator.isEmpty(initialCode)){
            errors.initialCode = "Initial Code is required";
        }
        if(Validator.isEmpty(answer)){
            errors.answer = "Answer is required";
        }
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};