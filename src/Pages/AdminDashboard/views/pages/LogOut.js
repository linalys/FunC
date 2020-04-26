import React from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function LogOut() {
    return (
        <>
            <h1>Are you sure you want to log out?</h1>
            <Button variant="success" size="lg" className="text-white mb-2">
                <a href="/">Yes</a>
            </Button>
            <Button variant="danger" size="lg" className="text-white mb-2">
                <Link to="/dashboard/home">No</Link>
            </Button>
        </>
    )
}

export default LogOut