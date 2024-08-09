// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './style2.css'; // تأكد من أن المسار إلى ملف CSS صحيح

const SignUp = () => {
  const [gender, setGender] = useState('');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div className="signupPage">
      <center>
        <form className="signupForm">
          <h1>Sign Up</h1>

          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" />

          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" />

          <div>
            <label>Gender</label>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === 'male'}
                onChange={handleGenderChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === 'female'}
                onChange={handleGenderChange}
              />
              Female
            </label>
          </div>

          <button type="submit">Register</button>
          <div className="signup-prompt">
            Already have an account? <a href="/login">Log in</a>
          </div>
        </form>
      </center>
    </div>
  );
};

export default SignUp;
