//Library Imports
import React from "react";
import LocalizedStrings from 'react-localization';
import {useSelector} from "react-redux";
import Header from "../../../../Header/Header";
import Footer from "../../../../Footer/Footer";
import Sidebar from '../components/sidebar';
import {Button} from "react-bootstrap"
import './lessonsStyle.css'

let langStrings = new LocalizedStrings({
    en: {
        title:"Hello Word",
        message1:"When you first open a C++ IDE, the following program will appear on your screen:",
        codeBlock:"#include <iostream>\n" +
            "\n" +
            "int main() {\n" +
            "  std::cout << \"Hello World!\";\n" +
            "  return 0;\n" +
            "}\n",
        message2: "If you build and then run it, the outcome on your console will be:",
        output1: "Hello World! ",
        message3: "In order to understand this example, it is needed to understand what each line does separately.",
        line1:"Line 1:",
        code1:"#include <iostream>",
        message4:"  is a header file library that lets us work with input and output objects, such as cout (used in line 5). Header files add functionality to C++ programs.",
        line2:"Line 2:",
        code2:"using namespace std",
        message5: "means that we can use names for objects and variables from the standard library. You might see some C++ programs that runs without the standard namespace library." +
            " The ",
        message55:" line can be omitted and replaced with the std keyword, followed by the :: operator for some objects.",
        message6:"For example:",
        code3:" std::cout << \"Hello World!\";",
        line4:"Line 4:",
        message7:"Another thing that always appear in a C++ program, is ",
        message77:". This is called a function. Any code inside its curly brackets {} will be executed.",
        code4:"int main()",
        line5:"Line 5:",
        code5:"cout",
        message8:" is an object used together with the insertion operator (<<) to output/print text. In our example it will output ",
        line6:"Line 6:",
        code6:"return 0;",
        message9:"ends the main function.",
    },
    gr: {
        title:"Hello Word",
        message1:"When you first open a C++ IDE, the following program will appear on your screen:",
        codeBlock:"#include <iostream>\n" +
            "\n" +
            "int main() {+\n" +
            "  std::cout << \"Hello World!\";\n" +
            "  return 0;\n" +
            "}\n",
        message2: "If you build and then run it, the outcome on your console will be:",
        output1: "Hello World! ",
        message3: "In order to understand this example, it is needed to understand what each line does separately.",
        line1:"Line 1:",
        code1:"#include <iostream>",
        message4:"  is a header file library that lets us work with input and output objects, such as cout (used in line 5). Header files add functionality to C++ programs.",
        line2:"Line 2:",
        code2:"using namespace std",
        message5: "means that we can use names for objects and variables from the standard library. You might see some C++ programs that runs without the standard namespace library." +
            " The ",
        message55:" line can be omitted and replaced with the std keyword, followed by the :: operator for some objects.",
        message6:"For example:",
        code3:" std::cout << \"Hello World!\";",
        line4:"Line 4:",
        message7:"Another thing that always appear in a C++ program, is ",
        message77:". This is called a function. Any code inside its curly brackets {} will be executed.",
        code4:"int main()",
        line5:"Line 5:",
        code5:"cout",
        message8:" is an object used together with the insertion operator (<<) to output/print text. In our example it will output ",
        line6:"Line 6:",
        code6:"return 0;",
        message9:"ends the main function.",
    }
},
);



function helloWord() {
    langStrings.setLanguage(useSelector(state => state.language));
    return (
        <div>
            <Header/>
            <Sidebar/>
            <div>
                <h1 className="title">{langStrings.title}</h1>
                <br/><br/><br/><br/>
                <p className="text">{langStrings.message1}</p>
                <p className="codeBlock">{langStrings.codeBlock} </p>
                <br/><br/>
                <p className="text"> {langStrings.message2}</p>
                <p className="codeBlock"> {langStrings.output1}</p>
                <br/><br/>
                <p className="text"> {langStrings.message3}</p>
                <br/>
                <p className="text"> <div className="font-weight-bold">{langStrings.line1}</div>  <div className="italic">{langStrings.code1}</div> {langStrings.message4} </p>
                <p className="text"> <div className="font-weight-bold">{langStrings.line2}</div><div className="italic">{langStrings.code2}</div> {langStrings.message5}<div className="italic">{langStrings.code2}</div>{langStrings.message55}</p>
                <br/>
                <p className="text">{langStrings.message6}</p>
                <p className="codeBlock">{langStrings.code3}</p>
                <br/>
                <p className="text"><div className="font-weight-bold">{langStrings.line4}</div>{langStrings.message7}<div className="italic">{langStrings.code4}</div>{langStrings.message77} </p>
                <p className="text"><div className="font-weight-bold">{langStrings.line5}</div><div className="italic">{langStrings.code5}</div>{langStrings.message8} <div className="italic">{langStrings.output1}</div> </p>
                <p className="text"><div className="font-weight-bold">{langStrings.line6}</div><div className="italic">{langStrings.code6}</div> {langStrings.message9} </p>
                <br/><br/><br/><br/><br/>
                <Button variant={"dark"} size="lg" className="mb-3" >
                    Take a Test!
                </Button>
                <Button variant={"light"} size="lg" className="mb-4" >
                    🠈 Previous Lesson
                </Button>
                <Button variant={"light"} size="lg" className="mb-5" >
                    Next Lesson 🠊
                </Button>
                <br/><br/><br/><br/>
            </div>
            <Footer/>
        </div>

    )
}

export default helloWord;