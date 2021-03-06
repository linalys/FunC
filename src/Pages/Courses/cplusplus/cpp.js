//Library Imports
import React from "react";
import LocalizedStrings from 'react-localization';
import {useSelector} from "react-redux";

//Component Imports
import StartPage from "../StartPage";


let langStrings = new LocalizedStrings({
    en: {
        intro: "C++ is a high-level, general-purpose programming language created by Bjarne Stroustrup as an " +
            "extension of the C programming language, also referred to as \"C with Classes\". The language has" +
            " expanded significantly over time, and modern C++ has object-oriented, generic, and functional features" +
            " in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language. ",
        reasonsList1: "C++ is one of the world's most popular programming languages.",
        reasonsList2: "C++ can be found in today's operating systems, Graphical User Interfaces, and embedded systems.",
        reasonsList3: "C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused, lowering development costs.",
        reasonsList4: "C++ is portable and can be used to develop applications that can be adapted to multiple platforms.",
        reasonsList5: "C++ is fun and easy to learn.",
        reasonsList6: "As C++ is close to C# and Java, it makes it easy for programmers to switch to C++ or vice versa.",
        learn1:"Printing simple text.",
        learn2:"Reading numbers and text.",
        learn3:"Variables and their use.",
        learn4:"Calculating simple functions.",
        learn5:"Conditional logic.",
        learn6: "Loop functions.",
    },
    gr: {
        intro: "Η C++ είναι μία γλώσσα προγραμματισμού υψηλού επιπέδου και γενικού σκοπού, που δημιουργήθηκε από προγραμματισμού C, " +
            "τον Bjarne Stroustrup ως μια επέκταση της γλώσσας  και είναι γνωστή και ως \"C με Κλάσεις\".  Η γλώσσα έχει επεκταθεί " +
            "σημαντικά με την πάροδο του χρόνου, και η μοντέρνα C++ έχει αντικειμενο-κεντρικά και συναρτησιακά χαρακτηριστικά" +
            "εκτός της δυνατότητας διαχείρισης μνήμης χαμηλού επιπέδου. Είναι σχεδόν πάντα μετφράσιμη γλώσσα.",
        reasonsList1: "Η C++ είναι μια από τις πιο δημοφιλείς προγραμματιστικές γλώσσες.",
        reasonsList2: "Η C++ μπορεί να βρεθεί στα σημερινά λειτουργικά συστήματα, σε γραφικά πειβάλλοντα διεπαφής χρήστη, και σε ενσωματωμένα συστήματα.",
        reasonsList3: "Η C++ είναι μια αντικειμενο-κεντρική γλώσσα προγραμματισμού, που δινει πιο καθαρή δομή στα προγράμματα και επιτρέπει στον κώδικα να "+
            "επαναχρησιμοποιηθεί,  περιορίζοντας το κόστος παραγωγής.",
        reasonsList4: "Η C++ είναι μετακινήσιμη και μπορεί να χρησιμοποιηθεί για την συγγραφή προγραμμάτων που προσαρμόζονται σε διάφορες πλατφόρμες.",
        reasonsList5: "Η C++ είναι ευχάριστη και εύκολη στην μάθηση.",
        reasonsList6: "Καθώς η C++ είναι κοντά στις C# και Java, δίνει στους προγραμματιστές την ευκολία να γυρίσουν σε αυτή, ή και το ανάποδο.",
        learn1:"Την εμφάνιση ενός απλού κειμένου.",
        learn2:"Την ανάγνωση αριθμών και λέξεων.",
        learn3:"Τις μεταβλητές και τις χρήσεις τους.",
        learn4:"Τον υπολογισμό απλών συναρτήσεων.",
        learn5:"Την υποθετική λογική.",
        learn6: "Τις δομές επανάληψης.",
    }
});


function cpp() {
    const language = useSelector(state => state.language);
    langStrings.setLanguage(language);


    const reasons = [
        langStrings.reasonsList1,
        langStrings.reasonsList2,
        langStrings.reasonsList3,
        langStrings.reasonsList4,
        langStrings.reasonsList5,
        langStrings.reasonsList6
    ];

    const learn = [
        langStrings.learn1,
        langStrings.learn2,
        langStrings.learn3,
        langStrings.learn4,
        langStrings.learn5,
        langStrings.learn6
    ];


    return (
        <StartPage
            title="C++"
            language={language}
            intro={langStrings.intro}
            reasonsMessage={reasons}
            learnMessage={learn}
        />
    )

}

export default cpp;