import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
          <h2>About Me</h2>
          <p>Still working on seeing the benefits of React</p>
          <img src={image} alt="I made this" />
        </div>;
}

export default About;
