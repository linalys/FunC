//Library Imports
import React from "react";
import LocalizedStrings from 'react-localization';
import {useSelector} from "react-redux";
import Header from "../../../../Header/Header";
import Footer from "../../../../Footer/Footer";
import Sidebar from '../components/sidebar';
import {Button, Container} from "react-bootstrap"
import '../../Style.css'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

let langStrings = new LocalizedStrings({
        en: {
            title: "Hello Word",
            message1: "When you first open a C++ IDE, the following program will appear on your screen:",
            codeBlock: "#include <iostream>\n" +
                "\n" +
                "int main() {\n" +
                "  std::cout << \"Hello World!\";\n" +
                "  return 0;\n" +
                "}\n",
            message2: "If you build and then run it, the outcome on your console will be:",
            output1: "Hello World! ",
            message3: "In order to understand this example, it is needed to understand what each line does separately.",
            line1: "Line 1:",
            code1: "#include <iostream>",
            message4: "  is a header file library that lets us work with input and output objects, such as cout (used in line 5). Header files add functionality to C++ programs.",
            line2: "Line 2:",
            code2: "using namespace std",
            message5: "means that we can use names for objects and variables from the standard library. You might see some C++ programs that runs without the standard namespace library." +
                " The ",
            message55: " line can be omitted and replaced with the std keyword, followed by the :: operator for some objects.",
            message6: "For example:",
            code3: " std::cout << \"Hello World!\";",
            line4: "Line 4:",
            message7: "Another thing that always appear in a C++ program, is ",
            message77: ". This is called a function. Any code inside its curly brackets {} will be executed.",
            code4: "int main()",
            line5: "Line 5:",
            code5: "cout",
            message8: " is an object used together with the insertion operator (<<) to output/print text. In our example it will output ",
            line6: "Line 6:",
            code6: "return 0;",
            message9: "ends the main function.",
            prev: "Previous Lesson",
            next: "Next Lesson",
            test: "Take a Test!"
        },
        gr: {
            title: "Hello Word",
            message1: "Όταν ανοίγετε για πρώτη φορά ένα προγραμματιστικό περιβάλλον της C++, το ακόλουθο πρόγραμμα θα εμφανιστεί στην οθόνη σας:\n",
            codeBlock: "#include <iostream>\n" +
                "\n" +
                "int main() {+\n" +
                "  std::cout << \"Hello World!\";\n" +
                "  return 0;\n" +
                "}\n",
            message2: "Αν το χτίσετε και ακολούθως το τρέξετε, θα εμφανιστεί στην κονσόλα το ακόλουθο αποτέλεσμα:",
            output1: "Hello World! ",
            message3: "Για να καταλάβετε το συγκεκριμένο παράδειγμα, είναι απαραίτητο να καταλάβετε τι κάνει κάθε σειρά ξεχωριστά.\n",
            line1: "Γραμμή 1:",
            code1: "#include <iostream> ",
            message4: "  είναι ένα αρχείο βιβλιοθήκης κεφαλίδας, που σας επιτρέπει να χρησιμοποιείτε αντικείμενα εισόδου και εξόδου, όπως το cout (βρίσκεται στην γραμμή 5). Τα αρχεία κεφαλίδας προσθέτουν λειτουργικότητα στα προγράμματα σε C++.",
            line2: "Γραμμή 2:",
            code2: "using namespace std ",
            message5: "  σημαίνει ότι μπορείτε να χρησιμοποιήσετε ονόματα για αντικείμενα και μεταβλητές από την βασική βιβλιοθήκη. Μπορεί να συναντήσετε προγράμματα που τρέχουν χωρίς να χρησιμοποιούν την βιβλιοθήκη standard namespace. " +
                " Το ",
            message55: "  μπορεί να αποφευχθεί και να αντικατασταθεί από την λέξη κλειδί std, ακολουθούμενο από τον συντελεστή :: για κάποια αντικείμενα.",
            message6: "Για παράδειγμα:",
            code3: " std::cout << \"Hello World!\"; ",
            line4: "Γραμμή 4:",
            message7: "Κάτι ακόμα που εμφανίζεται πάντα σε ένα πρόγραμμα σε C++ είναι η ",
            message77: ". Αυτή είναι μια συνάρτηση. Ο κώδικας που περιλαμβάνεται στις αγκύλες θα εκτελεστεί.\n",
            code4: "int main() ",
            line5: "Γραμμή 5:",
            code5: "cout ",
            message8: "  είναι ένα αντικείμενο που χρησιμοποιείται μαζί με τον χειριστή εισόδου (<<) για να βγαλει ως έξοδο κάποιο κείμενο. Στο παράδειγμά μας, θα εκτυπώσει  ",
            line6: "Γραμμή 6:",
            code6: "return 0; ",
            message9: "  τελειώνει την συνάρτηση main.",
            prev: "Προηγούμενο Μάθημα",
            next: " Επόμενο Μάθημα",
            test: "Κάνε το Τέστ!"
        }
    },
);


function helloWord() {
    langStrings.setLanguage(useSelector(state => state.language));
    return (
        <div>
            <Header/>
            <Sidebar/>
            <div className="lessons">
                <h1 className="title">{langStrings.title}</h1>
                <br/><br/><br/><br/>
                <p className="text">{langStrings.message1}</p>
                <p className="codeBlock">{langStrings.codeBlock} </p>
                <br/>
                <p className="text"> {langStrings.message2}</p>
                <p className="codeBlock"> {langStrings.output1}</p>
                <br/>
                <p className="text"> {langStrings.message3}</p>
                <br/>
                <p className="text">
                    <div className="font-weight-bold">{langStrings.line1}</div>
                    <div className="italic">{langStrings.code1}</div>
                    {langStrings.message4} </p>
                <p className="text">
                    <div className="font-weight-bold">{langStrings.line2}</div>
                    <div className="italic">{langStrings.code2}</div>
                    {langStrings.message5}
                    <div className="italic">{langStrings.code2}</div>
                    {langStrings.message55}</p>
                <br/>
                <p className="text">{langStrings.message6}</p>
                <p className="codeBlock">{langStrings.code3}</p>
                <br/>
                <p className="text">
                    <div className="font-weight-bold">{langStrings.line4}</div>
                    {langStrings.message7}
                    <div className="italic">{langStrings.code4}</div>
                    {langStrings.message77} </p>
                <p className="text">
                    <div className="font-weight-bold">{langStrings.line5}</div>
                    <div className="italic">{langStrings.code5}</div>
                    {langStrings.message8}
                    <div className="italic">{langStrings.output1}</div>
                </p>
                <p className="text">
                    <div className="font-weight-bold">{langStrings.line6}</div>
                    <div className="italic">{langStrings.code6}</div>
                    {langStrings.message9} </p>

                <Container>
                    <Button variant="dark" size="lg" className="test mb-2" href="/testExample">
                        <b className="text"> {langStrings.test}</b>
                    </Button>
                </Container>
                <br/><br/><br/><br/><br/>

                <Container fluid={true}>
                    <Row>
                        <Col>
                            <Button variant="light" size="lg" className="previous mb-2" href="/" disabled={true}>
                                <b className="text"> {langStrings.prev}</b>
                            </Button>
                        </Col>
                        <Col>
                            <Button variant="light" size="lg" className="next mb-2" href="/input">
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

export default helloWord;