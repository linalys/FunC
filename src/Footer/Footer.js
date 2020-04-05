import React from "react";

import "./Footer.css"
import SocialMediaBar from "../Header/SocialMediaBar";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <SocialMediaBar/>
                <div className="copyrightText">
                    &copy; Copyright 2020 PSPI
                </div>
            </footer>
        )
    }
}

export default Footer;