import { useRef, useState, useEffect } from 'react';
import './Contact.css';
import { IoMailOpenOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import Image from '../../assets/birthday.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const form = useRef();
  const [promptMessage, setPromptMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rg9onpc', 'template_rmee6di', form.current, {
        publicKey: '_UbQcV2NdthlXPpxw',
      })
      .then(
        () => {
          setPromptMessage('Message sent successfully!');
        },
        (error) => {
          setPromptMessage('Failed to send message. Please try again later.');
          console.log('FAILED...', error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact">
      <div className="header">Get in <span>touch</span></div>
      <div className={`dataInfo ${mounted ? 'fade-in' : ''}`}>
        <div className="midDiv">
          <div className="infoMess">
            <div className="subheader">Connect with me!</div>
            <p className="mess">Thank you for visiting my portfolio! I'm eager to connect and explore exciting job opportunities. Feel free to reach out using the form below or connect with me through the provided contact details. Let's discuss how my skills can contribute to your team.</p>
          </div>
          <div className="bottomMess">
            <img src={Image} alt="" />
            <div className="contactInfoLink">
              <div className="contactInfo">
                <div className="messageCOntact">
                  <p className="label">
                    <span className="iconn"><IoMailOpenOutline /></span>
                    Email Me:
                  </p>
                  <p className="info">
                    vhoneyvhen@gmail.com
                  </p>
                </div>
                <div className="messageCOntact">
                  <p className="label"> 
                    <span className="iconn"><IoCallOutline /></span>
                    Call Me:
                  </p>
                  <p className="info">
                    09394303968            
                  </p>
                </div>
              </div>
              <div className="socialMedia">
              <a href='https://discord.com/xxnina#8626' target="_blank" className="socialLink"><FaDiscord /></a>
                <a href="https://www.facebook.com/honeyvhen.villaluz/" target="_blank" className="socialLink"><GrFacebookOption /></a>
                <a href='https://www.linkedin.com/in/honeyvhen-villaluz-708019265/</div>' target="_blank" className="socialLink"><FaLinkedinIn /></a>
                <a href="https://github.com/vlemonade" target="_blank" className="socialLink"><FaGithub /></a>
              </div>
            </div>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contactForm">
          <div className="inputGroup">
            <div className="inputBox">
              <input 
                type="text" 
                placeholder='Your Name'
                name='user_name' 
                className='formControl'
                required
              />
            </div>
            <div className="inputBox">
              <input 
                type="text" 
                placeholder='Your Email'
                name='user_email' 
                className='formControl'
                required
              />
            </div>
            <div className="inputBox">
              <input 
                type="text" 
                placeholder='Your Subject'
                name='subject' 
                className='formControl'
                required
              />
            </div>
          </div>
          <div className="inputMess">
            <textarea
              placeholder='Your Message'
              className='formControTextarea'
              name='message'
              required
            ></textarea>
          </div>
          <button className='SButton'>
            Send Message {''}
            <span className="sendButtonIcon"><IoMdSend /></span>
          </button>
          {promptMessage && <div className="promptMessage">{promptMessage}</div>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
