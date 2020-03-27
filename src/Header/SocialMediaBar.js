import React from "react";

import "./SocialMediaBar.css"

class SocialMediaBar extends React.Component{
    render() {
        return(
            <div className="icon-bar">
                <a href="" className="facebook"><i className="fab fa-facebook"/></a>
                <a href="" className="twitter"><i className="fab fa-twitter-square"/></a>
                <a href="" className="google"><i className="fab fa-google"/></a>
                <a href="" className="linkedin"><i className="fab fa-linkedin"/></a>
                <a href="" className="youtube"><i className="fab fa-youtube"/></a>
            </div>
        )
    }
}

export default SocialMediaBar;