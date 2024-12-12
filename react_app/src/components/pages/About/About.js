import React from 'react';
import './AboutPage.css';
import Container from '../../Container'; // Assuming you have this reusable Container component

export const About = () => {
  return (
    <main className="main__about">
      <div className="pageContainer">
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


        <HowItWorks />
        <FAQ />
        <Testimonials />
        <AboutUs />
        </div>
    </main>
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


function HowItWorks() {
  return (
    <section className="infoSection">
      <h2 className="sectionHeading">How It Works</h2>
      <p className="sectionText">
        Our calculator is simple to use! Just input your age, weight, height, gender, and activity level, and you'll get
        personalized recommendations for your daily calorie intake. It helps you stay on track with your fitness goals!
      </p>
    </section>
  );
}

function FAQ() {
  return (
    <section className="infoSection">
      <h2 className="sectionHeading">FAQ</h2>
      <ul className="faqList">
        <li className="faqItem">
          <strong>What is a calorie calculator?</strong>
          <p className="faqText">
            A calorie calculator helps you estimate how many calories your body needs to function based on your personal details
            and activity level.
          </p>
        </li>
        <li className="faqItem">
          <strong>Is the calculator free?</strong>
          <p className="faqText">
            Yes, our calorie calculator is completely free to use!
          </p>
        </li>
        <li className="faqItem">
          <strong>Can I track my progress?</strong>
          <p className="faqText">
            Yes, you can log your daily calories and monitor your progress over time to help you stay on target.
          </p>
        </li>
      </ul>
    </section>
  );
}


function Testimonials() {
  return (
    <section className="infoSection">
      <h2 className="sectionHeading">User Testimonials</h2>
      <div className="testimonial">
        <p className="testimonialText">"This app helped me understand my eating habits and stay on track with my fitness goals!"</p>
        <p className="testimonialAuthor">- Agnieszka I.</p>
      </div>
      <div className="testimonial">
        <p className="testimonialText">"The personalized recommendations are exactly what I needed to make healthier choices."</p>
        <p className="testimonialAuthor">- Szymon B.</p>
      </div>
    </section>
  );
}



function AboutUs() {
  return (
    <section className="infoSection">
      <h2 className="sectionHeading">About Us</h2>
      <p className="sectionText">
        We are a students.
      </p>
    </section>
  );
}

function Lol() {
  return (
    <section className="LolSection">
      <h2>asdasd</h2>
      <p>asdasdasd</p>
    </section>
  );
}