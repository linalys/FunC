//Library Imports
import React from "react";
import LocalizedStrings from 'react-localization';
import {useSelector} from "react-redux";

//Component Imports
import StartPage from "../StartPage";


let langStrings = new LocalizedStrings({
    gr: {
        intro: "Η Java είναι μία σύγχρονη και υψηλού επιπέδου γλώσσα προγραμματισμού που σχεδιάστηκε στις αρχές της δεκαετίας του 1990 από την Sun Microsystems, και σήμερα ανήκει στην oracle. Επί του παρόντος, είναι μία από τις πιο ευρείες γλώσσες προγραμματισμού.\n" +
            "Η Java είναι μία αντικειμενοστραφής γλώσσα, πράγμα που σημαίνει ότι χρησιμοποιεί τους όρους των κλάσεων και αντικειμένων. Είναι επίσης φορητή, έτσι αρκεί μόνο να γράψετε το πρόγραμμα μιά φορά για να το τρέξετε σε διάφορες διαφορετικές πλατφόρμες.",
        reasons: "Λόγοι για να χρησιμοποιήσετε Java",
        reasonsList1: "Η Java λειτουργεί σε διαφορετικές πλατφόρμες (Windows, Mac, Linux, Raspberry Pi, κ.λπ.).",
        reasonsList2: "Είναι μια από τις πιο δημοφιλείς γλώσσες προγραμματισμού στον κόσμο.",
        reasonsList3: "Είναι εύκολη στην εκμάθηση και απλό στη χρήση.",
        reasonsList4: "Είναι ανοικτού κώδικα και δωρεάν.",
        reasonsList5: "Είναι ασφαλής, γρήγορη και ισχυρή.",
        reasonsList6: "Έχει τεράστια υποστήριξη από την κοινότητα (δεκάδες εκατομμύρια προγραμματιστές).",
        reasonsList7: "Η Java είναι μία αντικείμενο-προσανατολισμένη γλώσσα που δίνει μια σαφή δομή στα προγράμματα και επιτρέπει την επαναχρησιμοποίηση του κώδικα, μειώνοντας το κόστος ανάπτυξης.",
        reasonsList8: "Δεδομένου ότι η Java είναι κοντά σε C++ και C#, το καθιστά εύκολο για τους προγραμματιστές να μεταπηδήσουν στην Java ή αντίστροφα.",
        messageLesson:"Μέσω των μαθημάτων μας μπορείτε να μάθετε για:",
        learn1:"Την εμφάνιση ενός απλού κειμένου.",
        learn2:"Την ανάγνωση αριθμών και λέξεων.",
        learn3:"Τις μεταβλητές και τις χρήσεις τους.",
        learn4:"Τον υπολογισμό απλών συναρτήσεων.",
        learn5:"Την υποθετική λογική.",
        learn6: "Τις δομές επανάληψης.",
        start:"Ξεκινήστε τα Μαθήματα"

    },
    en: {

        intro: "Java is a high level, modern programming language designed in the early 1990s by Sun Microsystems, and currently owned by Oracle. It currently is one of the most wide-spread programming languages. \n" +
            "Java is an object-oriented languages, which means that it uses the terms of classes and objects. It is also portable, so you only have to write the program once to able to run it on a number of different platforms.\n",
        reasons: "Why Use Java",
        reasonsList1: "Java works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.)",
        reasonsList2: "It is one of the most popular programming language in the world.",
        reasonsList3: "It is easy to learn and simple to use.",
        reasonsList4: "It is open-source and free.",
        reasonsList5: "It is secure, fast and powerful.",
        reasonsList6: "It has a huge community support (tens of millions of developers).",
        reasonsList7: "Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs.",
        reasonsList8: "As Java is close to C++ and C#, it makes it easy for programmers to switch to Java or vice versa.",
        messageLesson:"Through our lessons you can learn about:",
        learn1:"Printing simple text.",
        learn2:"Reading numbers and text.",
        learn3:"Variables and their use.",
        learn4:"Calculating simple functions.",
        learn5:"Conditional logic.",
        learn6: "Loop functions.",
        start:"Start Learning"

    }
});

const items = [
    {
        path: '/helloWord',
        name : 'Java Lesson 1',
        key: 1
    },
    {
        path: '/input',
        name: 'Lesson 2',
        key: 2
    },
    {
        path:'/comments',
        name: 'You get the idea',
        key: 3
    },
    {
        path:'/variables',
        name: 'how it works',
        key: 4
    },
    {
        path:'/strings',
        name: 'right?',
        key: 5
    },
    {
        path:'/arrays',
        name: 'Arrays',
        key: 6
    }, {
        path:'/if',
        name: 'Conditional Statements',
        key: 7
    },
    {
        path:'/switch',
        name: 'Switch Case',
        key: 8
    },
    {
        path:'/while',
        name: 'While Loop',
        key: 9
    }
    ];

const reasons = [
    langStrings.reasonsList1,
    langStrings.reasonsList2,
    langStrings.reasonsList3,
    langStrings.reasonsList4,
    langStrings.reasonsList5,
    langStrings.reasonsList6,
    langStrings.reasonsList7,
    langStrings.reasonsList8
];

const learn = [
    langStrings.learn1,
    langStrings.learn2,
    langStrings.learn3,
    langStrings.learn4,
    langStrings.learn5,
    langStrings.learn6
];

function java() {
    const language = useSelector(state => state.language);
    langStrings.setLanguage(language);
    return (
        <StartPage
            title="Java"
            language={language}
            intro={langStrings.intro}
            reasonsMessage={reasons}
            learnMessage={learn}
            lessonList={items}
        />
    )
}

export default java;
