import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  const styleObject = {
    color: "firebrick",
  }
  // update the JSX being returned!
  return <div id="home"><h1 style={styleObject}>{name} is a Web Developer from {city}</h1></div>;
}

export default Home;