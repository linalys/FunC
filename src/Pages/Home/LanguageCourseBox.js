//Library Imports
import React from "react";
import {Link} from 'react-router-dom';

class LanguageCourseBox extends React.Component {
    render() {
        return (
            <Link className="box" to={this.props.LinkReference}>
                <div className="imgBx">
                    <img src={this.props.IconURL}
                         alt={this.props.IconURL.name}/>
                </div>
                <div className="content">
                    <h2>{this.props.Title}</h2>
                    <p>{this.props.Description}</p>
                    <div>START</div>
                </div>
            </Link>
        )
    }

}

export default LanguageCourseBox;