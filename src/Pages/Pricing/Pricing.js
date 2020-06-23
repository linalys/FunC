import React from 'react';
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import {Container} from "reactstrap";
import LocalizedStrings from "react-localization";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {setCurrentUser} from "../../actions/authActions";

let langStrings = new LocalizedStrings({
    en:{
        pricing:"Pricing",
        signup:"SIGN UP",
        free:"FREE",
        price1:"0€ per month",
        price2:"15€ per month",
        price3:"30€ per month",
        langf:"Classic white logo",
        langb:"Black Logo",
        langp:"Unlimited Programming Languages",
        testf:"One test per lesson",
        testb:"Multiple test per lesson, escalating difficulty",
        proff:"No access to advanced lessons",
        profp:"Access to advanced lessons",
        basic:"PREMIUM",
        prof:"PROFESSIONAL",
        successAlert:"You are now a premium member",
        errorAlert:"Please sign up first"
    },

    gr:{
        pricing:"Τιμοκατάλογος",
        signup:"ΕΓΓΡΑΦΗ",
        free:"ΔΩΡΕΑΝ",
        price1:"0€ ανά μήνα",
        price2:"15€ ανά μήνα",
        price3:"30€ ανά μήνα",
        langf:"Κλασσικό Άσπρο logo",
        langb:"Το logo γίνεται μαύρο",
        langp:"Απεριόριστες Γλώσσες Προγραμματισμού",
        testf:"1 Τεστ ανά μάθημα",
        testb:"Πολλαπλά Τεστ ανά μάθημα, με διαβαθμιζόμενη δυσκολία",
        proff:"Χωρίς πρόσβαση σε προχωρημένα μαθήματα",
        profp:"Με πρόσβαση σε προχωρημένα μαθήματα",
        basic:"PREMIUM",
        prof:"ΕΠΑΓΓΕΛΜΑΤΙΚΟ",
        successAlert:"Είστε τώρα ένα premium μέλος",
        errorAlert:"Παρακαλώ εγγραφτείτε πρώτα"
    }

});

function Pricing() {
    langStrings.setLanguage(useSelector(state => state.language));

    const user = useSelector(state => state.auth);

    function FreePlan() {
        if(user.isAuthenticated){
            window.location.href = '/profile';
        }else {
            window.location.href = '/signUp';
        }
    }

    const dispatch = useDispatch();
    function PremiumPlan() {
        if(user.isAuthenticated){
            axios.patch("/api/usermodel/patch/" + user.user.id, {isPremium: true})
                .then(() => {
                    const newUser = {...user.user, isPremium: true};
                    dispatch(setCurrentUser(newUser));
                    alert(langStrings.successAlert);
                    window.location.href = '/profile';
                })
                .catch(err => console.log(err));
        }else {
            alert(langStrings.errorAlert);
            window.location.href = '/signUp';
        }
    }

    return (
            <>
                <Header/>
                <br/>
                <h1 className="text-white text-center">{langStrings.pricing}</h1>
                <br/>
                <PricingTable>
                    <Container className="bg-dark text-white">
                        <PricingSlot onClick={FreePlan} buttonText={langStrings.signup} title={langStrings.free} priceText={langStrings.price1}>
                            <PricingDetail> {langStrings.langf}</PricingDetail>
                            {/*<PricingDetail> {langStrings.testf}</PricingDetail>*/}
                            {/*<PricingDetail strikethrough> {langStrings.profp}</PricingDetail>*/}
                        </PricingSlot>
                        <PricingSlot onClick={PremiumPlan} highlighted buttonText={langStrings.signup} title={langStrings.basic} priceText={langStrings.price2}
                                     >
                            <PricingDetail> {langStrings.langb}</PricingDetail>
                            {/*<PricingDetail> {langStrings.testb}</PricingDetail>*/}
                            {/*<PricingDetail strikethrough>{langStrings.profp}</PricingDetail>*/}
                        </PricingSlot>
                    </Container>
                </PricingTable>
                <Footer/>
            </>
        )

}

export default Pricing;