import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../../../Header/Header";
import Footer from "../../../../Footer/Footer";

class Landing extends Component {
  render() {
    return (
          <div>
          <Header/>
            <h4>
              <b>Trying</b> something new{" "}
              <span >fkjdvklldfjll</span> dfgfdgdf
              scratch
            </h4>
            <p>
              This is a text.
            </p>
            <br />
            <div >
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
              >
                Register
              </Link>
            </div>
            <div >
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
              >
                Log In
              </Link>
            </div>
              <Footer/>
      </div>
    );
  }
}

export default Landing;
