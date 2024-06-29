import React from 'react'
import '../Pages_css/Main.css'
import { FaInstagram, FaLinkedin, FaFacebook, FaGithub} from 'react-icons/fa'
import img1 from '../assects/WhatsApp Image 2024-06-28 at 23.04.45_78283539.jpg'
import img2 from '../assects/WhatsApp Image 2024-06-28 at 23.04.46_46340f42.jpg'

function Main() {
  return (
    <div className='main'>
        <div className="text">
            <h1>
                Hi! i am Deekshith
            </h1>
            <h3>
                I am a <span>Web Developer</span> from India
            </h3>
            <h5>
                Welcome to my page...
            </h5>
        </div>
            <div className='social'>
                <a className='fb' href="https://www.facebook.com/profile.php?id=100072631754805"><FaFacebook/></a>
                <a className='insta' href="https://www.instagram.com/dee_kshith_8_._/"><FaInstagram/></a>
                <a className='lin' href="https://www.linkedin.com/in/deekshith-m-378bb9302/"><FaLinkedin/></a>
                <a className='git' href="https://github.com/deekshith0803"><FaGithub/></a>
            </div>
            <div className="img">
                <img className='img-side1' src={img1} alt="img1" />
            </div>
            <div className="img1">
                <img className='img-side2' src={img2} alt="img2" />
            </div>
    </div>
    )
}

export default Main
