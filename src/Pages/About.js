import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" data-aos="zoom-in" data-aos-duration="1200">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <div className="aboutcontent">
              <h2>About Me</h2>
              <p>
              I'm a Information Systems Analyst and Developer. I love to solve design problems, 
              develop new features and design prototypes using different mediums.
              My work is mainly focused on Software Development. As for software designs, 
              my work mainly involves creation of web applications. besides,
              I also like doing manuals and video tutorials, where I can express my creative thought process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
