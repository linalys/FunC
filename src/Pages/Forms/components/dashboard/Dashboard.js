import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {Helmet} from "react-helmet";
import Row from "react-bootstrap/Row";
import {Button} from "react-bootstrap";
import {Container} from "reactstrap";
import defaultProfileImage from "./profileDefault.png";
import LocalizedStrings from "react-localization";
import LanguageCourseBoxProfile from "./LanguageCourseBoxProfile";
import cppIcon from "../../../Home/CplusplusIcon.png";
import javaIcon from "../../../Home/javaIcon.png";
import sqlIcon from "../../../Home/SQLIcon.png";
import Footer from "../../../../Footer/Footer";
import Header from "../../../../Header/Header";
import SearchBox from "../../../../Header/SearchBox";


let langStrings = new LocalizedStrings({
    en: {
        keepLearning: "Keep Learning!",
        SettingText: "Account UserPasswordSettings",
        leftAt: "You're left at:",
        testsCompletedText1: "Tests",
        testsCompletedText2: "Completed",
        continueText: "Continue!",
        startText: "Start!"
    },
    gr: {
        keepLearning: "Συνέχισε να μαθαίνεις!",
        SettingText: "Ρυθμίσεις Λογαριασμού",
        leftAt: "Μείνατε στο:",
        testsCompletedText1: "Συμπληρωμένα",
        testsCompletedText2: "Tests",
        continueText: "Συνεχίστε!",
        startText: "Ξεκινήστε!"
    }
});

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div>
        <div>
          <div>
              <Header />
              <br/>
              <Container>
                  <SearchBox/>
              </Container>
              <br/>
              <Container fluid={true} className="profileInfoArea">
                  <b><Helmet><title>{"Profile | FunC"}</title></Helmet></b>
                  <Row>
                      <img className="profileImage"
                           src={defaultProfileImage}
                           alt="Profile Image"/>
                      <div className="profileNameText">
                          <h1 >{"Maria"}</h1>
                          <h3>{"Free Member"}</h3>
                          <Button
                              href="/accountSettings"
                              variant="info"
                              className="text-white outlinedText"
                              size="lg">
                              {langStrings.SettingText}
                          </Button>
                      </div>

                      <div className="testsCompleted">
                          <h2>{"10"}</h2>
                          <h4>{langStrings.testsCompletedText1}<br/>{langStrings.testsCompletedText2}</h4>
                      </div>
                  </Row>
              </Container>

              <br/>
              <br/>
              <br/>
              <br/>
              <h1 className="text-center font-weight-bold text-white">{langStrings.keepLearning}</h1>

              <Container fluid={true}>
                  <Row>
                      <LanguageCourseBoxProfile
                          IconURL={cppIcon}
                          StartMessage={langStrings.continueText}
                          progress={"20"}
                          currentSubject={"variables"}
                      />
                      <LanguageCourseBoxProfile
                          IconURL={javaIcon}
                          StartMessage={langStrings.continueText}
                          progress={"10"}
                          currentSubject={`"Hello World"`}
                      />
                      <LanguageCourseBoxProfile
                          IconURL={sqlIcon}
                          StartMessage={langStrings.startText}
                          progress={"0"}
                      />
                  </Row>
              </Container>

                      <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
              <br/>
              <Footer/>
          </div>
        </div>
      </div>

    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
