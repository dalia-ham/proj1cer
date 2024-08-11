// eslint-disable-next-line no-unused-vars
import React from 'react';
import './style2.css'; 

const Registration = () => {
  return (
    <div className="Regestration">
      <center>
        <form>
          <h1>LOG IN</h1>
          <label htmlFor="Username">Username</label>
          <input type="text" id="Username" name="Username" />
          <label htmlFor="Password">Password</label>
          <input type="password" id="Password" name="Password" />
          <div className="checkbox-container">
            <input type="checkbox" id="checkbox" name="checkbox" />
            <label htmlFor="checkbox">Remember me</label>
          </div>
          <button type="submit">Submit</button>
          <div className="signup-prompt">
            Don’t have an account? <a href="/signupPage">Sign up</a>
          </div>
        </form>
      </center>
    </div>
  );
};

export default Registration;
