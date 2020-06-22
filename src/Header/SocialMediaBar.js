import React from "react";
import "./SocialMediaBar.css"

class SocialMediaBar extends React.Component {
    render() {
        return (
            <div className="outPopUp">
                <div className="icon-bar" align="right">
                    <a target="_blank" href="https://www.facebook.com/FunC-109714970791852/" className="facebook"><i className="fab fa-facebook"/></a>
                    <a target="_blank" href="http://83.212.77.175/comingsoon" className="twitter"><i className="fab fa-twitter-square"/></a>
                    <a target="_blank" href="http://linkedin.com" className="linkedIn"><i className="fab fa-linkedin"/></a>
                    <a target="_blank" href="http://83.212.77.175/comingsoon" className="youtube"><i className="fab fa-youtube"/></a>
                </div>
            </div>
        )
    }
}

export default SocialMediaBar;