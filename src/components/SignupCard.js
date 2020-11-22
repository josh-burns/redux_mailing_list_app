/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import { connect } from "react-redux";
import { submitFinalUserInfo } from "../actions/index";

function SignupCard({ dispatch }) {
  let value;

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    value = event.target.value;

    switch (name) {
      case "email":
        return setEmail(value);
      case "name":
        return setName(value);
      default:
        null;
    }
    return;
  };

  const handleSubmission = (event) => {
    if (!email.trim() || !name.trim()) {
      return;
    }
    dispatch(submitFinalUserInfo(email, name));
    event.preventDefault();

    setEmail("");
    setName("");
  };

  return (
    <div>
      <h2>Signup Card</h2>
      <div>
        <form onSubmit={handleSubmission}>
          <label>
            Email Address:{"  "}
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <br />
          </label>
          <label>
            name: {"  "}
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>
          <br />
          <input type="submit" value="submit" /> <br />
        </form>
      </div>
      {React.children}
    </div>
  );
}

export default connect()(SignupCard);
