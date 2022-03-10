import React from 'react'

import images from '../../constants/images';
import './WebDev.css';

const WebDev = () => {
  return (
    <section className="app__webdev">
      <div className="container container_webdev" id='web-dev'>
        <div className=" app__webdev_heading">
            <h1 className="p__tech-mono_heading2 p__alt-color_orange p__alt-space">Web</h1>
            <h1 className="p__tech-mono_heading2">Development</h1>
        </div>
        <div className="app__webdev_grid">
            <div className="app__webdev_grid_wrapper">
                <a href="https://restaurant-derean.netlify.app" target="blacnk">
                    <img className="app__webdev_grid_img" src={images.website_SS} alt="placeholder"/>
                    <div class="app__webdev_grid_overlay">
                        <p class="p__tech-mono_base app__webdev_grid_text">Restaurant Site</p>
                    </div>
                </a>
            </div>
            <div className="app__webdev_grid_wrapper">
                <a href="https://restaurant-derean.netlify.app" target="blacnk">
                    <img className="app__webdev_grid_img" src={images.website_SS} alt="placeholder"/>
                    <div class="app__webdev_grid_overlay">
                        <p class="p__tech-mono_base app__webdev_grid_text">Employee Manager App</p>
                    </div>
                </a>
            </div>
            <div className="app__webdev_grid_wrapper">
                <a href="https://restaurant-derean.netlify.app" target="blacnk">
                    <img className="app__webdev_grid_img" src={images.website_SS} alt="placeholder"/>
                    <div class="app__webdev_grid_overlay">
                        <p class="p__tech-mono_base app__webdev_grid_text">Video Game Store App</p>
                    </div>
                </a>
            </div>
            <div className="app__webdev_grid_wrapper">
                <a href="https://restaurant-derean.netlify.app" target="blacnk">
                    <img className="app__webdev_grid_img" src={images.website_SS} alt="placeholder"/>
                    <div class="app__webdev_grid_overlay">
                        <p class="p__tech-mono_base app__webdev_grid_text"></p>
                    </div>
                </a>
            </div>
        </div>
      </div>
        
    </section>
        

  )

}

export default WebDev;
