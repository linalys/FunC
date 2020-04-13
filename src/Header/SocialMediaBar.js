import React from "react";
import "./SocialMediaBar.css"

class SocialMediaBar extends React.Component {
    render() {
        return (
            <div className="outPopUp">
                <div className="icon-bar" align="right">
                    <a target="_blank" href="http://facebook.com" className="facebook"><i className="fab fa-facebook"/></a>
                    <a target="_blank" href="http://twitter.com" className="twitter"><i className="fab fa-twitter-square"/></a>
                    <a target="_blank" href="http://google.com" className="google"><i className="fab fa-google"/></a>
                    <a target="_blank" href="http://linkedin.com" className="linkedIn"><i className="fab fa-linkedin"/></a>
                    <a target="_blank" href="http://youtube.com" className="youtube"><i className="fab fa-youtube"/></a>
                </div>
            </div>
        )
    }
}

export default SocialMediaBar;