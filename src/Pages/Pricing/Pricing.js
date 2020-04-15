import React from 'react';
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
document.body.style.backgroundColor = "#6B737B";


class Pricing extends React.Component {

    render() {
        return(
            <div>
                <Header/>
                <br></br>
                <PricingTable  highlightColor='#ffff' >
                <PricingSlot buttonText='TRY IT FREE' title='FREE' priceText='$0/month'>
                    <PricingDetail> 15 projects</PricingDetail>
                    <PricingDetail> <b>5 GB</b> storage</PricingDetail>
                    <PricingDetail> <b>5</b> users</PricingDetail>
                    <PricingDetail strikethrough> <b>Time tracking</b></PricingDetail>
                </PricingSlot>
                <PricingSlot highlighted buttonText='SIGN UP' title='BASIC' priceText='$24/month' highlightColor='#f44336	'>
                    <PricingDetail> <b>35</b> projects</PricingDetail>
                    <PricingDetail> <b>15 GB</b> storage</PricingDetail>
                    <PricingDetail> <b>Unlimited</b> users</PricingDetail>
                    <PricingDetail> <b>Time tracking</b></PricingDetail>
                </PricingSlot>
                <PricingSlot buttonText='SIGN UP' title='PROFESSIONAL' priceText='$99/month'>
                    <PricingDetail> <b>100</b> projects</PricingDetail>
                    <PricingDetail> <b>30 GB</b> storage</PricingDetail>
                    <PricingDetail> <b>Unlimited</b> users</PricingDetail>
                    <PricingDetail> <b>Time tracking</b></PricingDetail>
                </PricingSlot>
            </PricingTable>
                <Footer/>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

            </div>
        )
    }
}
export default Pricing;