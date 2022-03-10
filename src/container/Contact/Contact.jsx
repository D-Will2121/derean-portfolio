import React from 'react'

import './Contact.css';

const Contact = () => {
  return (
    <section className="app__contact">
      <div className="container">
        <div className="p__tech-mono_heading2 app__contact_heading">Contact</div>            
        <div className="app__contact_subheading">
          <h2 className="p__tech-mono_heading">Want to hear more?</h2>
          <h2 className="p__tech-mono_heading">Feel free to reach out at...</h2>  
        </div>
        <div className="app__contact_email">  
          <a href="mailto:de.will2121@gmail.com?subject=Reach Out">
            <button className="p__tech-mono_heading2 p__alt-color_orange app__contact_email-button">de.will2121@gmail.com</button>            
          </a>   
        </div> 
      </div>
    </section>
  )

}

export default Contact;
