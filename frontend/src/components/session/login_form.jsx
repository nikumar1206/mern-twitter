import React, { useState } from "react";
import { withRouter } from "react-router-dom";

function LoginForm(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    errors: {},
  });
  //   useEffect(() => {
  //     props.history.push("/tweets");
  //     setState((state) => ({ ...state, errors: {} }));
  //   }, [props.currentUser]);

  const update = (field) => {
    return (e) => setState(() => ({ ...state, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      email: state.email,
      password: state.password,
    };
    props.login(user);
    props.history.push("/tweets");
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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={state.email}
            onChange={update("email")}
            placeholder="Email"
          />
          <br />
          <input
            type="password"
            value={state.password}
            onChange={update("password")}
            placeholder="Password"
          />
          <br />
          <input type="submit" value="Submit" />
          {renderErrors()}
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
