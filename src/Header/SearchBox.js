//Library Imports
import React from "react";

//CSS Imports
import "./SearchBox.css"
import NavItem from "react-bootstrap/NavItem";
import Button from "react-bootstrap/Button";

function SearchBox() {
    return (
        <NavItem>
            <form className="form-inline">
                <input className="form-control mr-sm-1" type="search" placeholder="Search" aria-label="Search"/>
                <Button type="submit" className="d-none d-sm-block">
                    <i className="fa fa-search"/>
                </Button>
            </form>
        </NavItem>
    );
}

export default SearchBox;