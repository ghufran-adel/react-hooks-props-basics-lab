import React from "react";

function About(props) {

  if (!props.bio){
    return null;}
  else{
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <h3>Links</h3>
      <a href={props.links.github}>{props.links.github}</a>
      <a href={props.links.linkedin}>{props.links.linkedin}</a>
    </div>
  );
  }
  
}

export default About;
