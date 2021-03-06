import { connect } from "react-redux";
import { signUp } from "../../actions/session_actions";
import SignupForm from "./signup_form";

const mapStateToProps = (state, ownProps) => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signUp(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
