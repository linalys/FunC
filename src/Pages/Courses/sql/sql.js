//Library Imports
import React from "react";
import LocalizedStrings from 'react-localization';
import {useSelector} from "react-redux";

//Component Imports
import StartPage from "../StartPage";


let langStrings = new LocalizedStrings({
    gr: {
        intro: "H SQL είναι μία γλώσσα υπολογιστών στις βάσεις δεδομένων, που σχεδιάστηκε για τη διαχείριση δεδομένων, σε ένα σύστημα διαχείρισης " +
            "σχεσιακών βάσεων δεδομένων και η οποία, αρχικά, βασίστηκε στη σχεσιακή άλγεβρα. Η γλώσσα περιλαμβάνει δυνατότητες ανάκτησης και ενημέρωσης δεδομένων, " +
            "δημιουργίας και τροποποίησης σχημάτων και σχεσιακών πινάκων, αλλά και ελέγχου πρόσβασης στα δεδομένα.\n" ,
        reasons: "Λόγοι για να χρησιμοποιήσετε SQL",
        reasonsList1: "Η SQL μπρεί να προσπελάσει στοιχεία σε μια βάση δεδομένων.",
        reasonsList2: "Η SQL μπορεί να εισάγει, να ενημερώσει και να διαγράψει στοιχεία σε μια βάση δεδομένων.",
        reasonsList3: "Η SQL μπορεί να εκτελέσει ερωτήματα σε μια βάση δεδομένων.",
        reasonsList4: "Η SQL δημιουργεί καινούριες βάσεις δεδομένων.",
        reasonsList5: "Η SQL δημιουργεί πίνακες σε βάσεις δεδομένων.",
        reasonsList6: "Η SQL μπορεί να αποθηκευσει διαδικασίες σε μια βάση δεδομένων.",
        reasonsList7: "Η SQL μπορεί να δημιουργήσει όψεις.",
        reasonsList8: "Η SQL μπορεί να ορίσει διακαιώματα χρήσης σε πίνακες, διαδικασίες και όψεις.",
        messageLesson:"Μέσω των μαθημάτων μας μπορείτε να μάθετε:",
        learn1:"Την λογική της SQL και πώς αυτή λειτουργεί.",
        learn2:"Πώς να χρησιμοποιείτε έναν πίνακα.",
        learn3:"Πώς να προσπελαύνετε μια βάση δεδομένων και τους πίνακές της.",
        learn4:"Πώς να ενημερώνετε δεδομένα.",
        learn5:"Πώς να συντάσσετε ερωτήματα σε SQL.",
        learn6: "Πώς να χρησιμοποιείτε την SQL σε διάφορα συστήματα βάσεων δεδομένων.",
        start:"Ξεκινήστε τα Μαθήματα"

    },
    en: {

        intro: "SQL (stands for Structured Query Language) is a domain-specific language used in programming and designed for managing " +
            "data held in a relational database management system (RDBMS), or for stream processing in a relational data stream " +
            "management system. It is particularly useful in handling structured data, i.e. data incorporating relations among entities " +
            "and variables. \n",
        reasons: "Why Use SQL",
        reasonsList1: "SQL can retrieve data from a database.",
        reasonsList2: "SQL can insert, update ans delete records in a database.",
        reasonsList3: "SQL can execute queries against a database.",
        reasonsList4: "SQL can create new databases.",
        reasonsList5: "SQL can create new tables in a database.",
        reasonsList6: "SQL can create stored procedures in a database.",
        reasonsList7: "SQL can create views in a database.",
        reasonsList8: "SQL can set permissions on tables, procedures, and views.",
        messageLesson:"Through our lessons you can learn about:",
        learn1:"SQL logic and how it works.",
        learn2:"How to use a table.",
        learn3:"How to access a database and its tables.",
        learn4:"How to update data.",
        learn5:"Writing SQL queries.",
        learn6: "Using SQL in various database systems.",
        start:"Start Learning"

    }
});


function sql() {
    const language = useSelector(state => state.language);
    langStrings.setLanguage(language);

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

    return (
        <StartPage
            title="SQL"
            language={language}
            intro={langStrings.intro}
            reasonsMessage={reasons}
            learnMessage={learn}
        />
    )
}

export default sql;
