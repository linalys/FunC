import React from "react";

class SearchBox extends React.Component {

    render() {
        return (
            <div className="search-box">
                <input type="text" name="" className="search-txt" placeholder="Search..."/>
                <a className="search-btn">
                    <i className="far fa-search"/>
                </a>
            </div>
        )
    }
}

export default SearchBox;