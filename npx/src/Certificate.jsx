// eslint-disable-next-line no-unused-vars
import React from 'react';
import './index.css';

const Certificate = () => {
  return (
    <div className="mother">
      <div className="certificate-container">
        <center>
          <img src="bzu3.png" alt="logobzu" width="150px" />
          <h1>Certificate Birzeit University</h1>
          <form action="index.html" method="post">
            <input type="text" name="name" placeholder="student name" />
            <input type="text" name="teacher" placeholder="teacher name" />
            <input type="text" name="numb" placeholder="Certificate number" />
            <input type="submit" value="Generate now!!!" />
          </form>
        </center>
      </div>
    </div>
  );
};

export default Certificate;
