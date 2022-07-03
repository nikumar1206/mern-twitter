import { connect } from "react-redux";
import { logIn } from "../../actions/session_actions";
import LoginForm from "./login_form";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(logIn(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
