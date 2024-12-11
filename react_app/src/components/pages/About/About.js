import React from 'react';
import './AboutPage.css';
import Container from '../../Container'; // Assuming you have this reusable Container component


export const About = () => {
  return (
    <div className="pageContainer">
      <main className="mainPadding">
        <div className="mainContent">
          <div className="textSection">
            <h1 className="heading">Get Start Now</h1>
            <ul className="list">
              <li className="listItem">
                <strong>1. Control over nutrition</strong>
                <p className="text">
                  The calculator allows you to accurately track how many calories you consume throughout the day,
                  helping you better understand your eating habits.
                </p>
              </li>
              <li className="listItem">
                <strong>2. Personalized recommendations</strong>
                <p className="text">
                  Based on your age, weight, height, gender, and activity level, the calculator provides
                  personalized advice on how many calories you need to reach your goals.
                </p>
              </li>
              <li className="listItem">
                <strong>3. Easy to use</strong>
                <p className="text">
                  Most calorie calculators are available as smartphone apps or online, making them easy to use anytime,
                  anywhere.
                </p>
              </li>
            </ul>
          </div>

          <div className="formSection">
            <SignUpForm />
          </div>
        </div>
      </main>
    </div>
  );
};

function SignUpForm() {
  return (
    <form className="formContainer">
      <label className="label">Name</label>
      <input type="text" placeholder="Enter your name" className="input" />

      <label className="label">Email address</label>
      <input type="email" placeholder="name@gmail.com" className="input" />

      <label className="label">Password</label>
      <input type="password" placeholder="*********" className="input" />

      <button type="submit" className="button">Sign-On</button>
    </form>
  );
}
