import React from 'react'

import './Home.css';

const Home = () => {
  return (
    <div className="app__home flex__center" id='home'>
        <div className="app__home_title">
            <h1 className="p__tech-mono_heading1 app__home_title-left">Welcome to</h1>
            <h1 className="p__tech-mono_heading1 p__alt-color_orange app__home_title-center">Derean Williamson's</h1>
            <h1 className="p__tech-mono_heading1 app__home_title-right">Developer Portfolio</h1>            
        </div>
        <div className="app__home_subtitle">
          <p className="p__tech-mono app__home_subtitle_p p__alt-space">I am a full stack developer, specializing in</p>
          <p className="p__tech-mono p__alt-color_orange app__home_subtitle_p p__alt-space">java</p> 
          <p className="p__tech-mono app__home_subtitle_p p__alt-space">and</p>
          <p className="p__tech-mono p__alt-color_orange app__home_subtitle_p">js.</p>
        </div>
        <div className="app__home_info">
          <a className="app__home_info_button" href="#about">
            <h2 className="p__tech-mono_heading2 p__alt-space">Click</h2>
            <h2 className="p__tech-mono_heading2 p__alt-color_orange p__alt-space">Here</h2>
            <h2 className="p__tech-mono_heading2">for More Info</h2>
            <h2 className="p__tech-mono_heading2 p__alt-color_orange ">!</h2>
          </a>
        </div>
    </div>
        

  )

}

export default Home;
