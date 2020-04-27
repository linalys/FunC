import React from 'react';
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import {Container} from "reactstrap";
import LocalizedStrings from "react-localization";
import {useSelector} from "react-redux";


let langStrings = new LocalizedStrings({
    en:{
        pricing:"Pricing",
        signup:"SIGN UP",
        free:"FREE",
        price1:"0€ per month",
        price2:"15€ per month",
        price3:"30€ per month",
        langf:"Up to 1 Programming Language",
        langb:"Up to 10 Programming Languages",
        langp:"Unlimited Programming Languages",
        testf:"One test per lesson",
        testb:"Multiple test per lesson, escalating difficulty",
        proff:"No access to advanced lessons",
        profp:"Access to advanced lessons",
        basic:"BASIC",
        prof:"PROFESSIONAL"

    },

    gr:{
        pricing:"Τιμοκατάλογος",
        signup:"ΕΓΓΡΑΦΗ",
        free:"ΔΩΡΕΑΝ",
        price1:"0€ ανά μήνα",
        price2:"15€ ανά μήνα",
        price3:"30€ ανά μήνα",
        langf:"Μέχρι 1 Γλώσσα Προγραμματισμού",
        langb:"Μέχρι 10 Γλώσσες Προγραμματισμού",
        langp:"Απεριόριστες Γλώσσες Προγραμματισμού",
        testf:"1 Τεστ ανά μάθημα",
        testb:"Πολλαπλά Τεστ ανά μάθημα, με διαβαθμιζόμενη δυσκολία",
        proff:"Χωρίς πρόσβαση σε προχωρημένα μαθήματα",
        profp:"Με πρόσβαση σε προχωρημένα μαθήματα",
        basic:"ΒΑΣΙΚΟ",
        prof:"ΕΠΑΓΓΕΛΜΑΤΙΚΟ"
    }

})

function Pricing() {
    langStrings.setLanguage(useSelector(state => state.language));
    return (
            <>
                <Header/>
                <br/>
                <h1 className="text-white text-center">{langStrings.pricing}</h1>
                <br/>
                <PricingTable highlightColor='#ffff'>
                    <Container className="bg-dark text-white">
                        <PricingSlot buttonText={langStrings.signup} title={langStrings.free} priceText={langStrings.price1}>
                            <PricingDetail> {langStrings.langf}</PricingDetail>
                            <PricingDetail> {langStrings.testf}</PricingDetail>
                            <PricingDetail strikethrough> {langStrings.profp}</PricingDetail>
                        </PricingSlot>
                        <PricingSlot highlighted buttonText={langStrings.signup} title={langStrings.basic} priceText={langStrings.price2}
                                     highlightColor='#f44336	'>
                            <PricingDetail> {langStrings.langb}</PricingDetail>
                            <PricingDetail> {langStrings.testb}</PricingDetail>
                            <PricingDetail strikethrough>{langStrings.profp}</PricingDetail>
                        </PricingSlot>
                        <PricingSlot buttonText={langStrings.signup} title={langStrings.prof} priceText={langStrings.price3}>
                            <PricingDetail> {langStrings.langp}</PricingDetail>
                            <PricingDetail> {langStrings.testb}</PricingDetail>
                            <PricingDetail> {langStrings.profp}</PricingDetail>
                        </PricingSlot>
                    </Container>
                </PricingTable>
                <Footer/>
            </>
        )

}

export default Pricing;