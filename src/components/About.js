import React from "react";
import { image } from "../data/data";
import { render } from "@testing-library/react";

function About() {
  return (
    <div id="about">
       <h2>About Me</h2>
       <p>{render}</p>
       <img onScroll={image} alt="I made this"/>
  </div>
)
}

export default About;
