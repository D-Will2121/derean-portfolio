import React from 'react'

import './About.css';

const About = () => {
  return (
    <section className="app__about" id="about">
      <div className="container container_about">
        <div className="p__tech-mono_heading2 app__about_heading">About...</div>
        <div className="p__tech-mono app__about_info-box">
            <p>
              Hello, my name is Derean Williamson and I am a graduate of the University of Central Florida with a major in Digital Media and a minor in Computer Science.
              I am a Java fullstack developer with experience creating REST Apis using Springboot and Angular, as well as more static applications like this site 
              using ReactJS. I've recently finished an internship at Digital Resource in Palm Beach and am currently looking for employment. Thanks for reading!
            </p>
            <a className="p__tech-mono app__about_info-button" href="#contact" >Contact</a>
        </div>
      </div>
        
    </section>
        

  )

}

export default About;
