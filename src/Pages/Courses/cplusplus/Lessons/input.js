import React from "react";
import Header from "../../../../Header/Header";
import Sidebar from "../../sidebar";
import {Button, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useSelector} from "react-redux";
import LocalizedStrings from "react-localization";

let langStrings = new LocalizedStrings({
    en: {test:"Take a Test!",
        previous:"🠈 Previous Lesson",
        next:"Next Lesson 🠊",},
    gr: {test:"Κάνε το Τεστ!",
        previous:"🠈 Προηγούμενο Μάθημα",
        next:"Επόμενο Μάθημα 🠊"}
});

function LessonStructure() {


    function createInnerLesson() {
        return {__html: "<p>This test is to prove the power of Dangerous html: Let's print \\n</p>\n <p>Use span to make a coding box<p><span>cout << \"but it also has a lot of dangerous stuff\";<br/> &emsp; Tab test</span><p>Use br for a new line. </br> New line achieved. Use p for new paragraph</p>" + "<p>New paragraph</p>"
        };
    }

    langStrings.setLanguage(useSelector(state => state.language));
    return (
        <>
            <Header/>
            <Sidebar Lessons={[]}/>
            <div className="lessons courses">
                <h1 className="title superRainbowText outlineForRainbowTextTHICC">{"Get title from database"}</h1>


                <div dangerouslySetInnerHTML={createInnerLesson()} />


                <Container className="mt-2">
                    <Button variant="dark" size="lg" className="test mb-2" href="/GET_TEST_SESSION">
                        <b className="text"> {langStrings.test}</b>
                    </Button>
                </Container>
                <br/>
                <br/>
                <Container fluid={true}>
                    <Row>
                        <Col>
                            <Button variant="light" size="lg" disabled={false/*SET TRUE IF FIRST LESSON*/} className="previous mb-2" href="/GET_PREVIOUS_LESSON" >
                                <b className="text"> {langStrings.previous}</b>
                            </Button>
                        </Col>
                        <Col>
                            <Button variant="light" size="lg" disabled={false/*SET TRUE IF LAST LESSON*/} className="next mb-2" href="/GET_NEXT_LESSON">
                                <b className="text"> {langStrings.next}</b>
                            </Button>
                        </Col>
                    </Row>
                </Container>

            </div>
        </>
    )
}


export default LessonStructure;





/*//Library Imports
import React from "react";
import LocalizedStrings from 'react-localization';
import {useSelector} from "react-redux";
import Header from "../../../../Header/Header";
import Footer from "../../../../Footer/Footer";
import Sidebar from '../../sidebar';
import {Button, Container} from "react-bootstrap"
import '../../Style.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

let langStrings = new LocalizedStrings({
        en: {
            title:"Control output and User input",
            cout:"Cout",
            message1:"The ",
            message11:" object, together with the << operator, is used to output values/print text, as we previously saw with the Hello World example.",
            syntax:"Syntax:",
            code1:"cout<< “Anything you want to print",
            message2: "can be followed by text and/or variables, in whatever order and it can be used as many times as you want in the code.",
            message3: "The ",
            message33:" order does not automatically insert a new line. To do that, you can use the \\n character:",
            exp:"For example:",
            code2:"cout << \"Hello World! \\n\";",
            code3:"cout << \"I am learning C++\";",
            msgOutput:"Will have as output:",
            output1:"Hello World!",
            output2:"I am learning C++",
            tip:"Tip: ",
            tip1: "Two \\n characters after each other will create a blank line.",
            tip11: "Another way to insert a new line, is with the ",
            code4: "endl",
            tip111:"manipulator.",
            code5:"cout << \"Hello World!\" << endl;",
            code6:"cout << \"I am learning C++\";",
            cin:"Cin",
            message4:"In most program environments, the standard input by default is the keyboard, and the C++ stream object defined to access it is ",
            message5:"For formatted input operations, ",
            message55:" is used together with the extraction operator, which is written as >> (i.e., two \"greater than\" signs). This operator is then followed by the variable where the extracted data is stored. ",
            code7:"int number;",
            code8:"cin>>number;",
            message6:"The first statement declares a variable of type int called number, and the second extracts from ",
            message66:" a value to be stored in it. This operation makes the program wait for input from ",
            message666:"; generally, this means that the program will wait for the user to enter some sequence with the keyboard. Once the statement with the extraction operation on ",
            message6666:" is reached, the program will wait for as long as needed until some input is introduced.",
            tip2:"Note that the characters introduced using the keyboard are only transmitted to the program when the ENTER (or RETURN) key is pressed.",
            message7:"Extractions on ",
            message77:" can also be chained to request more than one datum in a single statement:",
            code9:"cin >> a >> b;",
            message8:"This is equivalent to:",
            code10:"cin >> a;\n" +
                "cin >> b;\n",
            message9:"In both cases, the user is expected to introduce two values, one for variable a, and another for variable b. Any kind of space is used to separate two consecutive input operations; this may either be a space, a tab, or a new-line character.",
            message10:"The extraction operator can be used on ",
            message1010:"to get strings of characters in the same way as with fundamental data types:",
            code11:"string mystring;\n" +
                "cin >> mystring;\n",
            messageTen:"However, ",
            messageTenTen:" extraction always considers spaces (whitespaces, tabs, new-line...) as terminating the value being extracted, and thus extracting a string means to always extract a single word, not a phrase or an entire sentence.",
            message12:"To get an entire line from ",
            message1212:", there exists a function, called ",
            getline:"getline",
            message121212:", that takes the stream (",
            message12121212:") as first argument, and the string variable as second. ",
            code12:"string mystr;\n" +
                "  cout << \"What's your name? \";\n" +
                "  getline (cin, mystr);\n" +
                "cout << \"Hello \" << mystr << \".\\n\";\n",
            output3:"What's your name? ",
            output33:"(For input: George Papadopoulos)",
            output333:"Hello George Papadopoulos.",
            test:"Take a Test!",
            previous:"🠈 Previous Lesson",
            next:"Next Lesson 🠊",



        },
        gr: {
            title:"Έξοδος κοσνόλας και είσοδος χρήστη",
            cout:"Cout",
            message1:"Το αντικείμενο  ",
            message11:"  , μαζί με τον χειριστή <<, χρησιμοποιούνται για να εμφανίσουν τιμές / να εκτυπώσουν κείμενα, όπως είδατε προηγουμένως στο παράδειγμα Hello World.",
            syntax:"Σύνταξη:",
            code1:"cout<< “Οτιδήποτε θέλετε να εκτυπώσετε",
            message2: " μπορεί να ακολουθείτε από κείμενο ή / και μεταβλητές, σε οποιαδήποτε σειρά, και μπορεί να χρησιμοποιηθεί όσες φορές θέλετε στον κώδικα.",
            message3: "Η εντολή  ",
            message33:" Η εντολή cout δεν εισάγει αυτόματα καινούργια γραμμή. Για να το κάνετε αυτό, μπορείτε να χρησιμοποιήσετε τον χαρακτήρα \\n",
            exp:"Για παράδειγμα:",
            code2:"cout << \"Hello World! \\n\";",
            code3:"cout << \"I am learning C++\";",
            msgOutput:"Θα εμφανίσει στην κονσόλα:",
            output1:"Hello World!",
            output2:"I am learning C++",
            tip:"Υπόδειξη: ",
            tip1: "Δύο χαρακτήρες \\n ο ένας μετά τον άλλον δημιουργούν μια κενή γραμμή.",
            tip11: "Άλλος ένας τρόπος να εισάγετε μια νέα γραμμή είναι με τον ",
            code4: "endl",
            tip111:"χειριστή.",
            code5:"cout << \"Hello World!\" << endl;",
            code6:"cout << \"I am learning C++\";",
            cin:"Cin",
            message4:"Στα περισσότερα προγραμματιστικά περιβάλλοντα, ο βασικός τρόπος εισόδου κειμένου γίνεται από το πληκτρολόγιο, και στην C++ το αντικείμενο που έχει πρόσβαση στο ρεύμα εισόδου είναι το  ",
            message5:"Για μορφοποιημένα ρεύματα εισόδου, το ",
            message55:" χρησιμοποιείται μαζί με τον χειριστή >> (σαν δύο τελεστές σύγκρισης «μεγαλύτερο από»). Ο χειροστής αυτός ακολουθείται από την μεταβλητή όπου αποθηκεύεται η πληροφορία. ",
            code7:"int number;",
            code8:"cin>>number;",
            message6:"Η πρώτη δήλωση δηλώνει μία μεταβλητή τύπου int, και η δεύτερη παίρνει μια τιμή από το ",
            message66:" και την αποθηκεύει στην μεταβλητή. Η λειτουργία αυτή αναγκάζει το προγραμμα να περιμένει στοιχείο εισόδου από την ",
            message666:" Αυτό συνήθως σημαίνει ότι το πρόγραμμα περιμένει από τον χρήστη να εισάγει μια ακολουθία από το πληκτρολόγιο. Όταν το πρόγραμμα φτάσει σε ένα αντικείμενο  ",
            message6666:" , θα περιμένει όσο χρειαστεί μέχρι να εισάγει δεδομένα ο χρήστης.",
            tip2:"Παρατηρήστε ότι η ακολουθία που εισάγει ο χρήστης από το πληκτρολόγιο αναγνωρίζεται από το πρόγραμμα όταν πατηθεί το πλήκτρο ENTER (ή RETURN).",
            message7:"Η εξαγωγή πληροφορίας με χρήση ",
            message77:" μπορεί να συνδεθεί αλυσιδωτά ώστε να ζητήσει περισσότερες από μια μεταβλητές σε μια μόνο εντολή:",
            code9:"cin >> a >> b;",
            message8:"Αυτό είναι ισοδύναμο με:",
            code10:"cin >> a;\n" +
                "cin >> b;\n",
            message9:"Και στις δύο περιπτώσεις, ο χρήστης αναμένεται να δώσει δύο τιμές, μια για την μεταβλητή a  και μια για την μεταβλητή b. Οποιοσδήποτε τύπος κενού διαστήματος μπορεί να χωρίσει δύο συνεχόμενες τιμές, είτε το κενό διάστημα, είτε το Tab, είτε ο χαρακτήρας νέας γραμμής.",
            message10:"Ο χειριστής εξαγωγής κειμένου μπορεί να χρησιμοποιηθεί στο ",
            message1010:" για να πάρει ακολουθίες από χαρακτήρες με τον ίδιο τρόπο που παίρνει βασικούς τύπους μεταβλητών:",
            code11:"string mystring;\n" +
                "cin >> mystring;\n",
            messageTen:"Ωστόσο, στην εξαγωγή κειμένου με ",
            messageTenTen:" λαμβάνονται υπόψη τα κενά (διαστήματα, γραμμές…) ως τερματικά της τιμής που αντλείται, επομένως η εξαγωγή κειμένου σημαίνει εξαγωγή μιας λέξης, όχι φράσης ή ολόκληρης πρότασης.",
            message12:"Για να πάρετε μια ολόκληρη γραμμή από το ",
            message1212:", υπάρχει μια συνάρτηση που ονομάζεται ",
            getline:"getline",
            message121212:",  η οποία παίρνει την ροή πληροφορίας (",
            message12121212:") ως πρώτη παράμετρο, και την μεταβλητή τύπου string ως δεύτερη. ",
            code12:"string mystr;\n" +
                "  cout << \"What's your name? \";\n" +
                "  getline (cin, mystr);\n" +
                "cout << \"Hello \" << mystr << \".\\n\";\n",
            output3:"What's your name? ",
            output33:"(Για δεδομένα εισόδου: George Papadopoulos)",
            output333:"Hello George Papadopoulos.",
            test:"Κάνε το Τεστ!",
            previous:"Προηγούμενο Μάθημα",
            next:"Επόμενο Μάθημα",


}
    },
);



function input() {
    langStrings.setLanguage(useSelector(state => state.language));
    return (
        <div>
            <Header/>
            <Sidebar Lessons={[]}/>
            <div className="lessons">
                <h1 className="title">{langStrings.title}</h1>
                <br/>
                <h2 className="titleSmall">{langStrings.cout}</h2>
                <p className="text">{langStrings.message1}<div className="italic">{langStrings.cout}</div>{langStrings.message11}</p>
                <p className="text">{langStrings.syntax}</p>
                <p className="codeBlock">{langStrings.code1}</p>
                <br/>
                <p className="text"><div className="italic">{langStrings.cout}</div> {langStrings.message2} </p>
                <p className="text">{langStrings.message3}<div className="italic">{langStrings.cout}</div>{langStrings.message33} </p>
                <p className="text">{langStrings.exp}</p>
                <p className="codeBlock">{langStrings.code2}<br/>{langStrings.code3}</p>
                <p className="text">{langStrings.msgOutput}</p>
                <p className="codeBlock">{langStrings.output1}<br/>{langStrings.output2}</p>
                <br/>
                <p className="text"><div className="font-weight-bold">{langStrings.tip}</div>{langStrings.tip1}<br/>{langStrings.tip11}<div className="italic">{langStrings.code4}</div> {langStrings.tip111} </p>
                <p className="text">{langStrings.exp}</p>
                <p className="codeBlock">{langStrings.code5}<br/>{langStrings.code6}</p>
                <p className="text">{langStrings.msgOutput}</p>
                <p className="codeBlock">{langStrings.output1}<br/>{langStrings.output2}</p>
                <br/><br/>
                <h2 className="titleSmall">{langStrings.cin}</h2>
                <p className="text">{langStrings.message4}<div className="italic">{langStrings.cin}</div> </p>
                <p className="text">{langStrings.message5}<div className="italic">{langStrings.cin}</div>{langStrings.message55}</p>
                <p className="text">{langStrings.exp}</p>
                <p className="codeBlock">{langStrings.code7}<br/>{langStrings.code8}</p>
                <br/>
                <p className="text">{langStrings.message6}<div className="italic">{langStrings.cin}</div>{langStrings.message66}<div className="italic">{langStrings.cin}</div>
                    {langStrings.message666}<div className="italic">{langStrings.cin}</div>{langStrings.message6666}</p>
                <br/>
                <p className="text"><div className="font-weight-bold">{langStrings.tip}</div>{langStrings.tip2} </p>
                <p className="text">{langStrings.message7}<div className="italic">{langStrings.cin}</div>{langStrings.message77}</p>
                <p className="codeBlock">{langStrings.code9}</p>
                <p className="text">{langStrings.message8}</p>
                <p className="codeBlock">{langStrings.code11}</p>
                <p className="text">{langStrings.message9}</p>
                <p className="text">{langStrings.message10}<div className="italic">{langStrings.cin}</div> {langStrings.message1010}</p>
                <p className="text">{langStrings.messageTen}<div className="italic">{langStrings.cin}</div>{langStrings.messageTenTen}</p>
                <p className="text">{langStrings.message12}<div className="italic">{langStrings.cin}</div>{langStrings.message1212}<div className="italic">{langStrings.getline}</div>
                    {langStrings.message121212}<div className="italic">{langStrings.cin}</div>{langStrings.message12121212}
                </p>
                <br/>
                <p className="text">{langStrings.exp}</p>
                <p className="codeBlock">{langStrings.code12}</p>
                <p className="text">{langStrings.msgOutput}</p>
                <p className="codeBlock">{langStrings.output3}<br/>{langStrings.output33}<br/>{langStrings.output333}</p>
                <Container>
                    <Button variant="dark" size="lg" className="test mb-2" href="/testExample">
                        <b className="text"> {langStrings.test}</b>
                    </Button>
                </Container>
                <br/><br/><br/><br/><br/>

                <Container fluid={true}>
                    <Row>
                        <Col>
                            <Button variant="light" size="lg" className="previous mb-2" href="/helloWord" >
                                <b className="text"> {langStrings.previous}</b>
                            </Button>
                        </Col>
                        <Col>
                            <Button variant="light" size="lg" className="next mb-2" href="" >
                                <b className="text"> {langStrings.next}</b>
                            </Button>
                        </Col>
                    </Row>
                </Container>
                <br/><br/><br/><br/>
            </div>
            <Footer/>
        </div>

    )
}

export default input;

*/