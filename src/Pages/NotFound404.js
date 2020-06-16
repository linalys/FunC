import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {useSelector} from "react-redux";
import LocalizedStrings from "react-localization";

let langStrings = new LocalizedStrings({
    en: {
        missing: "Sorry, the page you're looking for seems to be missing!"
    },
    gr: {
        missing: "Συγγνώμη, φαίνεται πως η σελίδα που ψάχνετε δεν υπάρχει!"
    }
});

function NotFound404() {
    const lang = useSelector(state => state.language);
    langStrings.setLanguage(lang);
    return(
        <>
            <Header/>
            <div className="text-white outlinedText m-5 text-center">
            <h1 className="font-weight-bold">Error 404</h1>
            <h2>
                {langStrings.missing}
            </h2>
            </div>
            <Footer/>
        </>
    )

}

export default NotFound404;