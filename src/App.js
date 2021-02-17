import React from "react";
import "./App.css";
import SignIn from "./Components/SignIn/SignIn";
import { connect } from "react-redux";
import UserProfile from "./Components/UserProfile/UserProfile";
import { BrowserRouter } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        {props.isAuthenticated ? <UserProfile /> : <SignIn />}
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};

export default connect(mapStateToProps)(App);
