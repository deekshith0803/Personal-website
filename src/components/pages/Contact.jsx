import React from 'react'
import { useRef } from 'react'
import { FaLocationDot, FaRegMessage } from 'react-icons/fa6'
import '../Pages_css/Contact.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaShareAltSquare,FaGithub } from 'react-icons/fa'
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7myygls', 'template_l4d1fc4', form.current, 'fBec-tlobfYY98oiG')
      .then(
        () => {
          alert('Success!');
          console.log('SUCCESS!');
        },
        (error) => {
          alert('Failed to send email.');
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className='container'>
      <div className='contact'>
        <h1>Contact me</h1>
      </div>
      <div className='about'>
        <div className="email">
          <div className='mail-id'>
          <FaRegMessage/>
          <h6>Email me</h6>
          <p className='em'>deekshithm321@gmail.com</p>
          </div>
        </div>
        <div className="call">
          <div className='phone'>
          <i className='i'><FaPhone/></i>
          <h6>Call me</h6>
          <p className='em'>+91 9037525300</p>
          </div>
        </div>
        <div className="adress">
          <div className='place'>
          <FaLocationDot/>
          <h6>My Address</h6>
          <p className='em'>Kerala, Kannur, Payyannur</p>
          </div>
        </div>
        <div className="links">
          <div className='links-social'>
            <FaShareAltSquare/>
            <h6>Sccial Profile</h6>
              <div className='socl'>
                <a className='soc1' href="https://www.facebook.com/profile.php?id=100072631754805"><FaFacebook/></a>
                <a className='soc2' href="https://www.instagram.com/dee_kshith_8_._/"><FaInstagram/></a>
                <a className='soc3' href="https://www.linkedin.com/in/deekshith-m-378bb9302/"><FaLinkedin/></a>
                <a className='sco4' href="https://github.com/deekshith0803"><FaGithub/></a>
              </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <form ref={form} onSubmit={sendEmail}>
        <input name='from_name' className='input' type="name" placeholder='Name' required/>
        <input name='from_email' className='input' type="email" placeholder='Email'required/>
        <br />
        <textarea name='message' required className='textarea' placeholder='Message'></textarea>
        <br />
        <button>Send</button>
      </form>
    </div>
  )
}

export default Contact
