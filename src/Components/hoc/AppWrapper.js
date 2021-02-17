import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const AppWrapper = (props) => {
  const Component = props.component;
  console.log("This worked");
  return props.isAuthenticated ? (
    <Component />
  ) : (
    <Redirect to={{ pathname: "/signin" }} />
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};

export default connect(mapStateToProps)(AppWrapper);
