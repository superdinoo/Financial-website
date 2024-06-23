import React from "react";
import "./Testimonials.css";
import user1 from "../img/user1.jpeg";
import user2 from "../img/user2.jpeg";
import user3 from "../img/user3.jpeg";

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <div className="container2">
        <h2>Testimonials</h2>
        <span className="line2"></span>
        <div className="content2">
          <div className="card">
            <img src={user1} alt="user1"></img>
            <p>
              It is not every day that you come across a passionate and
              trustworthy financial advisor. John Doe is true professional who
              does his work really well. Thanks John!
            </p>
            <p>
              <span>Johnson.M.J.</span>
            </p>
            <p>Director of "Financial Times"</p>
          </div>
          <div className="card">
            <img src={user2} alt="user1"></img>
            <p>
              In just 2 very short meetings with John he managed to find the
              solution personally catered to my situation and expectations.
              Punctual, well informed and very reliable.
            </p>
            <p>
              <span>Carol Harper</span>
            </p>
            <p>Director at Risktec Solutions Ltd</p>
          </div>
          <div className="card">
            <img src={user3} alt="user1"></img>
            <p>
              A very professional financial advisor, who is true to his word.
              John has demonstrated a high amount of integrity in the time I
              have known him, and he is fast to respond to my concerns.
            </p>
            <p>
              <span>Snow.J.R.</span>
            </p>
            <p>Managing Director of BPW Global</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
