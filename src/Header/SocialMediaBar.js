import React from "react";
import {Link} from 'react-router-dom';

import "./SocialMediaBar.css"

class SocialMediaBar extends React.Component {
    render() {
        return (
            <div className="outPopUp">
                <div className="icon-bar" align="right">
                    <Link to="" className="facebook"><i className="fab fa-facebook"/></Link>
                    <Link to="" className="twitter"><i className="fab fa-twitter-square"/></Link>
                    <Link to="" className="google"><i className="fab fa-google"/></Link>
                    <Link to="" className="linkedIn"><i className="fab fa-linkedin"/></Link>
                    <Link to="" className="youtube"><i className="fab fa-youtube"/></Link>
                </div>
            </div>
        )
    }
}

export default SocialMediaBar;