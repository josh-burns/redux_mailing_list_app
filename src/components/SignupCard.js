import React from "react";
import { connect } from "react-redux";
import { submitNewUserInfo } from "../actions/index";

function SignupCard(dispatch) {
  let input;

  function handleChange(evt) {
    const value = evt.target.value;
    console.log("new value", evt.target.value);
  }
  return (
    <div>
      {" "}
      Signup Card
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            dispatch(submitNewUserInfo(input.value));
            input.value = "";
          }}
        >
          Email Address:
          <input
            type="text"
            value="emailaddress"
            onChange={handleChange}
            ref={(node) => (input = node)}
          />{" "}
          <br />
          <input type="submit" value="submit" /> <br />
        </form>
      </div>
      {React.children}
    </div>
  );
}

export default connect()(SignupCard);
