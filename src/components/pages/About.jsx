import React from 'react'
import "../Pages_css/About.css"
import img from '../assects/WhatsApp Image 2024-06-28 at 23.04.45_78283539.jpg'
import { Link } from 'react-router-dom'

function About() {
  return (
    <section>
      <main>
        <h3 className='heading'>About Me</h3>
        <div className="image">
          <img className='side-image' src={img} alt="" />
        </div>
        <div className="details">
          <h3 className='about-head'>Artist & Web Developer</h3>
          <p className='about-data'>
          My name is Deekshith M, and I am an artist and web developer with a unique blend of creativity 
          and technical expertise. With a background in both the arts and technology As an artist, I have a 
          deep appreciation for aesthetics and design. My artwork spans various mediums, including digital art, painting
          I draw inspiration from the world around me and strive to infuse my creations with emotion and originality 
          In my role as a web developer, I specialize in building responsive and user-friendly websites. I am proficient 
          in HTML, CSS, JavaScript, and various web development frameworks
          </p>
          <ul className='about-bio'>
            <li><span>Name:</span> Deekshith M</li>
            <li><span>D O B:</span> 08/03/2005</li>
            <li><span>Age:</span> 19</li>
            <li><span>Place:</span> kannur, kerala</li>
            <li><span>phone:</span> +91 9037525300</li>
            <li><span>Email:</span> deekshithm321@gmail.com</li>
            <li><span>Degree:</span> B C A(Bachelor of computer application)</li>
          </ul>
          <p className='about-data'>
          Feel free to explore my portfolio and connect with me on platforms to discuss 
          potential collaborations or projects. Let's create something amazing together!
          </p><div className="btn-alin">
            <Link className='about-btn' to='/Contact' >Connect Me</Link>
          </div>
        </div>
      </main>
    </section>
  )
}

export default About
