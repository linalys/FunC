import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import Footer from "../../../../Footer/Footer";
import Header from "../../../../Header/Header";
import LocalizedStrings from "react-localization";


const langStrings = new LocalizedStrings({
  en: {
    login: "Login",
    typeEmail: "Type your email",
    typePassword: "Type your password",
    loginButton: "Login",
    oops: "Oops!",
    failedToLogin: "The email or password is incorrect."
  },
  gr: {
    login: "Σύνδεση",
    typeEmail: "Εισάγετε το email σας",
    typePassword: "Εισάγετε τον κωδικό σας",
    loginButton: "Σύνδεση",
    oops: "Ουπς!",
    failedToLogin: "Το email ή ο κωδικός είναι λάθος."
  }
});
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/profile");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/profile");
    }

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

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
        <div>
          <Header />
          <div className="container">
            <div style={{ marginTop: "4rem" }} className="row">
              <div className="col s8 offset-s2" style={{color: "white"}}>
                <h1 className="text-center mb-4" style={{color: "white"}}>{langStrings.login}</h1>

                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                  Don't have an account? <Link to="/register">Register</Link>
              </div>
                <br />

                <form noValidate onSubmit={this.onSubmit}>
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
                        invalid: errors.email || errors.emailnotfound
                      })}
                  />
                  <br />
                  <span style={{color: "red"}}>
                    <i>
                  {errors.email}
                      {errors.emailnotfound}</i>
                </span>
                </div>
                <div className="input-field col s12">
                  <label htmlFor="password">Password:</label>
                  <br />
                  <input
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="password"
                      type="password"
                      className={classnames("", {
                        invalid: errors.password || errors.passwordincorrect
                      })}
                  />
                  <br />
                  <span style={{color: "red"}}>
                    <i>
                  {errors.password}
                    {errors.passwordincorrect}
                    </i>
                </span>
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
                    Login
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
    mapStateToProps,
    { loginUser }
)(Login);
