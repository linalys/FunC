import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import Header from "../../../../Header/Header";
import Footer from "../../../../Footer/Footer";
import LocalizedStrings from "react-localization";


const langStrings = new LocalizedStrings({
  en: {
    register: "Register",
    typeEmail: "Type your email",
    typePassword: "Type your password",
    loginButton: "Login",
    oops: "Oops!",
    failedToLogin: "The email or password is incorrect."
  },
  gr: {
    register: "Εγγραφή",
    typeEmail: "Εισάγετε το email σας",
    typePassword: "Εισάγετε τον κωδικό σας",
    loginButton: "Σύνδεση",
    oops: "Ουπς!",
    failedToLogin: "Το email ή ο κωδικός είναι λάθος."
  }
});


class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
        <div>
          <Header />
          <div className="container">
            <div style={{ marginTop: "4rem" }} className="row">
              <div className="col s8 offset-s2" style={{color: "white"}}>
                <h1 className="text-center mb-4" style={{color: "white"}}>{langStrings.register}</h1>

                <div className="col s12"  style={{ paddingLeft: "11.250px" }}>
                  Already have an account? <Link to="/login">Login</Link>
              </div>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="input-field col s12">
                  <label htmlFor="name">Name: </label>
                  <br />
                  <input
                      onChange={this.onChange}
                      value={this.state.name}
                      error={errors.name}
                      id="name"
                      type="text"
                      className={classnames("", {
                        invalid: errors.name
                      })}
                  />
                  <br />

                  <span style={{color: "red"}}>
                    <i>{errors.name}</i></span>
                </div>
                <div className="input-field col s12">
                  <label htmlFor="email">Email: </label>
                  <br />

                  <input
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      id="email"
                      type="email"
                      className={classnames("", {
                        invalid: errors.email
                      })}
                  />
                  <br />

                  <span style={{color: "red"}}>
                    <i>{errors.email}</i></span>
                </div>
                <div className="input-field col s12">
                  <label htmlFor="password">Password: </label>
                  <br />

                  <input
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="password"
                      type="password"
                      className={classnames("", {
                        invalid: errors.password
                      })}
                  />
                  <br />

                  <span style={{color: "red"}}>
                    <i>{errors.password}</i></span>
                </div>
                <div className="input-field col s12">
                  <label htmlFor="password2">Confirm Password: </label>
                  <br />

                  <input
                      onChange={this.onChange}
                      value={this.state.password2}
                      error={errors.password2}
                      id="password2"
                      type="password"
                      className={classnames("", {
                        invalid: errors.password2
                      })}
                  />
                  <br />

                  <span style={{color: "red"}}>
                    <i>{errors.password2}</i></span>
                </div>
                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                  <br />
                  <button
                      style={{
                        width: "150px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                        marginTop: "1rem"
                      }}
                      type="submit"
                      className="w-100 outlinedText"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
            </div>
          </div>
          <Footer />
        </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));
