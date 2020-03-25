//Library Imports
import React from "react";

//CSS Imports
import "./SearchBox.css"

class SearchBox extends React.Component {
    render() {
        return (
            <div className="search-box">
                <input type="text" name="" className="search-txt" placeholder="Search..."/>
                <a className="search-btn">
                    <i className="fas fa-search"/>
                </a>
            </div>
        )
    }
}

export default SearchBox;