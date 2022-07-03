import React, { useState } from "react";
import { withRouter } from "react-router";
function SignUp(props) {
  const [state, setState] = useState({
    email: "",
    handle: "",
    password: "",
    password2: "",
    errors: {},
  });
  const update = (field) => {
    return (e) => setState(() => ({ ...state, [field]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      email: state.email,
      handle: state.handle,
      password: state.password,
      password2: state.password2,
    };

    props.signup(user, props.history);
  };
  const renderErrors = () => {
    return (
      <ul>
        {Object.keys(state.errors).map((error, i) => (
          <li key={`error-${i}`}>{state.errors[error]}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="signup-form-container">
      <form onSubmit={handleSubmit}>
        <div className="signup-form">
          <br />
          <input
            type="text"
            value={state.email}
            onChange={update("email")}
            placeholder="Email"
          />
          <br />
          <input
            type="text"
            value={state.handle}
            onChange={update("handle")}
            placeholder="Handle"
          />
          <br />
          <input
            type="password"
            value={state.password}
            onChange={update("password")}
            placeholder="Password"
          />
          <br />
          <input
            type="password"
            value={state.password2}
            onChange={update("password2")}
            placeholder="Confirm Password"
          />
          <br />
          <input type="submit" value="Submit" />
          {renderErrors()}
        </div>
      </form>
    </div>
  );
}

export default withRouter(SignUp);
