

import React, { useState } from "react";
import './App.css';

const App = () => {
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    successMsg: "",
  });

  const [formError, setFormError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validationFormInput = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formInput;
    const errors = {};

    if (!email || !email.includes("@")) {
      errors.email = "Invalid email";
    }

    if (!password || password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    if (!confirmPassword || confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(errors).length === 0) {
      setFormInput({ ...formInput, successMsg: "Form submitted successfully!" });
    } else {
      setFormError(errors);
    }
  };

  const handleChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
    setFormError({ ...formError, [e.target.name]: "" });
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h4 className="title">Password Validation</h4>
        </div>
        <div className="card-body">
          <form onSubmit={validationFormInput}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formInput.email}
                onChange={handleChange}
              />
              {formError.email && <p style={{ color: "red" }}>{formError.email}</p>}
            </div>

            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formInput.password}
                onChange={handleChange}
              />
              {formError.password && <p style={{ color: "red" }}>{formError.password}</p>}
            </div>

            <div className="form-group">
              <label>Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                value={formInput.confirmPassword}
                onChange={handleChange}
              />
              {formError.confirmPassword && <p style={{ color: "red" }}>{formError.confirmPassword}</p>}
            </div>

            <button type="submit">Submit</button>
            {formInput.successMsg && <p style={{ color: "green" }}>{formInput.successMsg}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
