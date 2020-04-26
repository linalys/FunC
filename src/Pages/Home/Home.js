//Library Imports
import React from "react";
import LocalizedStrings from 'react-localization';
import {useSelector} from "react-redux";

//Image Imports
import image1 from "../../Images/max-duzij-qAjJk-un3BI-unsplash.jpg"
import image2 from "../../Images/mark-s-TkEPQPWr2sY-unsplash.jpg"
import image3 from "../../Images/sean-lim-NPlv2pkYoUA-unsplash.jpg"
import image4 from "../../Images/alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg"
import image5 from "../../Images/safar-safarov-LKsHwgzyk7c-unsplash.jpg"
import cppIcon from "./CplusplusIcon.png";
import javaIcon from "./javaIcon.png";
import sqlIcon from "./SQLIcon.png";


//Component Imports
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

//CSS Imports
import "./LanguageCourseBox.css";
import "./Home.css"
import LanguageCourseBox from "./LanguageCourseBox";
import {Row} from "react-bootstrap";
import {Container} from "reactstrap";
import CarouselPage from "./Carousel";


let langStrings = new LocalizedStrings({
    en: {
        Question1: "What is the purpose of this website?",
        Message1: "FunC aims to help people make their first steps into the programming community." +
            " It provides basic knowledge on various major programming languages." +
            " It’s up to the user to decide which one to begin with.",
        Question2: "How do the lessons work?",
        Message2: "Every language has a list of topics that describe a phenomenon in said language. " +
            "Each topic consists of the theoretical - the use, the grammar and syntax - and the practical – " +
            "examples – parts. There is also a testing part, provided only to the subscribers of the page. " +
            "After the user has become familiar with the phenomenon, they can move one to the next one.",
        Question3: "Why subscribe and create a profile?",
        Message3: "When logged in your FunC profile, you have a series of advantages. First of all, " +
            "you have access to personal tests in each topic of every lesson, for evaluation of your " +
            "skills and further training. Also, you know at any point how far along are you in the course, " +
            "and your progress is saved, so that you can continue at any moment from any device. ",
        Question4: "Who are we?",
        Message4: "We are a team of undergraduate students, tasked to build up their own website, with " +
            "a subject of our choosing. And what better way to promote your studies than sharing your knowledge. " +
            "It is, indeed, amateur work, so feel free to give us your feedback with comments and reactions " +
            "on our lessons, to help us help you get the best possible experience while learning how to code.",
        Title5: "Copyrights",
        Message5: " In this site, there has been use of copyright-free images dowloaded from www.unshplash.com,"+
            " while all the logos for the site and the courses were made by our team."+
            " The texts for the programming courses hav been influenced by:" +
            " www.cplusplus.com , www.tutorialspoint.com , www.programiz.com\n" +
            "www.w3schools.com , www.geeksforgeeks.org",
        searchText: "Search something...",
        moreMessage: "Some more blah blah I guess...",
        textForCourses: "So what are you waiting for? Take our lessons today!",
        javaDescription: "Learn Java here if you think Tsoumakas is not good enough.",
        cPlusPlusDescription: "Learn C++ before Dr. Vraka's tests.",
        sqlDescription: "Gounaris is going to be so proud of you!",
        start: "START"
    },
    gr: {
        Question1: "Ποιος είναι ο σκοπός αυτής της ιστοσελίδας;",
        Message1: "Η FunC έχει ως στόχο να βοηθήσει τους ανθρώπους να κάνουν τα πρώτα τους βήματα " +
            " στην κοινότητα προγραμματισμού. Παρέχει βασικές γνώσεις σε διάφορες μεγάλες γλώσσες " +
            " προγραμματισμού. Είναι στο χέρι του χρήστη να αποφασίσει με ποια θα ξεκινήσει.",
        Question2: "Πώς λειτουργούν τα μαθήματα;",
        Message2: "Κάθε γλώσσα έχει μια λίστα θεμάτων που περιγράφουν ένα φαινόμενο στην εν λόγω γλώσσα. " +
            "Κάθε θέμα αποτελείται από τα θεωρητικά - τη χρήση, τη γραμματική και τη σύνταξη - και τα " +
            "πρακτικά - παραδείγματα - μέρη. Υπάρχει επίσης ένα τμήμα δοκιμών, που παρέχεται μόνο στους συνδρομητές" +
            "της σελίδας. Αφού ο χρήστης εξοικειωθεί με το φαινόμενο, μπορεί να μετακινήσει το ένα στο επόμενο.",
        Question3: "Γιατί να κάνω εγγραφή και να δημιουργήσω προφίλ;",
        Message3: "Όταν είστε συνδεδεμένοι στο προφίλ FunC σας, έχετε μια σειρά από πλεονεκτήματα. Πρώτα απ 'όλα," +
            "έχετε πρόσβαση σε προσωπικές δοκιμές σε κάθε θέμα κάθε μαθήματος, για την αξιολόγηση των" +
            "δεξιοτήτων σας και την περαιτέρω κατάρτιση. Επίσης, γνωρίζετε σε οποιοδήποτε σημείο πόσο" +
            "μακριά είστε στην πορεία, και η πρόοδός σας αποθηκεύεται, έτσι ώστε να μπορείτε να συνεχίσετε ανά πάσα"+
            "στιγμή από οποιαδήποτε συσκευή.",
        Question4: "Ποιοί είμαστε;",
        Message4: "Είμαστε μια ομάδα προπτυχιακών φοιτητών, με εργασία να δημιουργήσουμε τη δική μας ιστοσελίδα, με ένα" +
            "θέμα της επιλογής μας. Και τι καλύτερος τρόπος για να προωθήσουμε τις σπουδές μας από την ανταλλαγή" +
            "των γνώσεών μας. Είναι ερασιτεχνική εργασία, έτσι αισθανθείτε ελεύθεροι να μας δώσετε σχόλια και" +
            "τις αντιδράσεις στα μαθήματά μας, για να μας βοηθήσετε να πάρετε την καλύτερη δυνατή εμπειρία" +
            "τις αντιδράσεις στα μαθήματά μας, για να μας βοηθήσετε να πάρετε την καλύτερη δυνατή εμπειρία μαθαίνοντας "+
            "πως να προγραμματίσετε.",
        Title5: "Πνευματικά Δικαιώματα",
        Message5: " Στην ιστοσελίδα μας έχει γίνει χρήση εικόνων κατεβασμένων από το www.unshplash.com ,"+
            "ενώ όλα τα λογότυπα της σελίδας και των μαθημάτων κατασκευάστηκαν από μέλη της ομάδας."+
            "Τα κείμενα των μαθημάτων επηρεάστηκαν από τις ιστοσελίδες:" +
            " www.cplusplus.com , www.tutorialspoint.com , www.programiz.com\n" +
            "www.w3schools.com , www.geeksforgeeks.org",
        searchText: "Ποίησε ζήτημα",
        moreMessage: "μᾶλλον μπλα μπλα ἐννοέω",
        textForCourses: "Τί μένεις; Πάρον τα μαθήματα ἡμῶν σήμερον!",
        javaDescription: "Μάθε Java καλύτερα και από τον Τσομυ.",
        cPlusPlusDescription: "C++ όπως ακριβώς στις διαφάνειες του Βράκα.",
        sqlDescription: "Ώρα να αντιμετωπίσεις το μάθημα του Γούναρη.",
        start: "ΞΕΚΙΝΗΣΤΕ"
    }
});

function Home() {
    langStrings.setLanguage(useSelector(state => state.language));
    return (
        <div>
            <Header/>

            <Container className="d-flex flex-column text-white">
                <h1 className="font-weight-bold">FunC</h1>
                <h5 className="font-italic">The fancy way to learn how to code.</h5>
            </Container>
            <Container>
                <CarouselPage
                    image1={image1}
                    image2={image2}
                    image3={image3}
                    image4={image4}
                    image5={image5}
                    question1={langStrings.Question1}
                    question2={langStrings.Question2}
                    question3={langStrings.Question3}
                    question4={langStrings.Question4}
                    title5={langStrings.Title5}
                    message1={langStrings.Message1}
                    message2={langStrings.Message2}
                    message3={langStrings.Message3}
                    message4={langStrings.Message4}
                    message5={langStrings.Message5}

                />
            </Container>
            <br/>
            <br/>
            <Container>
                <Row>
                    <LanguageCourseBox
                        IconURL={javaIcon}
                        Description={langStrings.javaDescription}
                        StartMessage={langStrings.start}
                        LinkReference="/java"/>
                    <LanguageCourseBox
                        IconURL={cppIcon}
                        Description={langStrings.cPlusPlusDescription}
                        StartMessage={langStrings.start}
                        LinkReference="/cplusplus"/>
                    <LanguageCourseBox
                        IconURL={sqlIcon}
                        Description={langStrings.sqlDescription}
                        StartMessage={langStrings.start}
                        LinkReference="/sql"/>
                </Row>
            </Container>
            <br/>
            <Footer/>
        </div>
    )
}
//LinkReference="/cplusplus"/>
export default Home;


