//Library Imports
import React from "react";
import LocalizedStrings from 'react-localization';
import {useSelector} from "react-redux";
import Header from "../../../../Header/Header";
import Footer from "../../../../Footer/Footer";
import Sidebar from '../components/sidebar';
import {Button} from "react-bootstrap"
import '../../Style.css'

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


}
    },
);



function input() {
    langStrings.setLanguage(useSelector(state => state.language));
    return (
        <div>
            <Header/>
            <Sidebar/>
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
                <br/><br/><br/><br/>
                <Button variant={"dark"} size="lg" className="test" href="/testExample" >
                    {langStrings.test}
                </Button>
                <Button variant={"light"} size="lg" className="previous" href="/helloWord" >
                    {langStrings.previous}
                </Button>
                <Button variant={"light"} size="lg" className="next" >
                    {langStrings.next}
                </Button>
                <br/><br/><br/><br/>
            </div>
            <Footer/>
        </div>

    )
}

export default input;