import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {useSelector} from "react-redux";
import LocalizedStrings from "react-localization";
import {Link} from "react-router-dom";

let langStrings = new LocalizedStrings({
    en: {
        header: "Coming Soon!",
        text: "The site is under construction.",
        contact: "Please contact us for more information in the following link."
    },
    gr: {
        header: "Συγγνώμη, φαίνεται πως η σελίδα που ψάχνετε δεν υπάρχει!",
        text: "H ιστοσελίδα βρίσκεται υπό κατασκευή",
        contact: "Παρακαλούμε επικοινωνήστε μαζί μας για περισσότερες πληροφορίες στο ακόλουθο link"
    }
});

function ComingSoon() {
    const lang = useSelector(state => state.language);
    langStrings.setLanguage(lang);
    return(
        <>
            <Header/>
            <div className="text-white outlinedText m-5 text-center">
                <h1 className="font-weight-bold">{langStrings.header}</h1>
                <h2>
                    {langStrings.text}
                </h2>
                {langStrings.contact}  <Link to="/contactUs">Contact Us</Link>
            </div>
            <Footer/>
        </>
    )

}

export default ComingSoon;