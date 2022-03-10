import React from 'react'

import './GameDev.css';

const GameDev = () => {
  return (
    <section className="app__gamedev">
      <div className="container container_gamedev">
        <div className=" app__gamedev_heading">
            <h1 className="p__tech-mono_heading2 p__alt-space">Game</h1>
            <h1 className="p__tech-mono_heading2 p__alt-color_orange">Development</h1>
        </div>
        <div className="app__gamedev_grid">
            <div className="app__gamedev_grid_wrapper">
                <input className="app__gamedev_grid_img" type="image" src="https://pic.onlinewebfonts.com/svg/img_148071.png" alt="placeholder"/>
                <div class="app__gamedev_grid_overlay">
                    <p class="p__tech-mono_base app__gamedev_grid_text">text</p>
                </div>
            </div>
            <div className="app__gamedev_grid_wrapper">
                <input className="app__gamedev_grid_img" type="image" src="https://pic.onlinewebfonts.com/svg/img_148071.png" alt="placeholder"/>
                <div class="app__gamedev_grid_overlay">
                    <p class="p__tech-mono_base app__gamedev_grid_text">text</p>
                </div>
            </div>
            <div className="app__gamedev_grid_wrapper">
                <input className="app__gamedev_grid_img" type="image" src="https://pic.onlinewebfonts.com/svg/img_148071.png" alt="placeholder"/>
                <div class="app__gamedev_grid_overlay">
                    <p class="p__tech-mono_base app__gamedev_grid_text">text</p>
                </div>
            </div>
            <div className="app__gamedev_grid_wrapper">
                <input className="app__gamedev_grid_img" type="image" src="https://pic.onlinewebfonts.com/svg/img_148071.png" alt="placeholder"/>
                <div class="app__gamedev_grid_overlay">
                    <p class="p__tech-mono_base app__gamedev_grid_text">text</p>
                </div>
            </div>
            
        </div>
      </div>
        
    </section>
        

  )

}

export default GameDev;
