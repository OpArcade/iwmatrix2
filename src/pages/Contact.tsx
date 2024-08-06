import React from 'react'
import styled from 'styled-components'
import { CiFacebook, CiInstagram, CiLinkedin, CiLocationOn } from "react-icons/ci";
import { IoIosMail } from "react-icons/io";
import { FaFacebook, FaInstagramSquare, FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin, FaLocationDot, FaSquareXTwitter, FaXTwitter } from "react-icons/fa6";
import Layout from '../layout/Layout';



// Type assertion for the NodeList returned by querySelectorAll
const inputs = document.querySelectorAll<HTMLInputElement>(".input");

// Define the event handler functions with proper type annotations
function focusFunc(this: HTMLInputElement) {
  // Use 'this' with type 'HTMLInputElement'
  const parent = this.parentNode as HTMLElement | null;
  if (parent) {
    parent.classList.add("focus");
  }
}

function blurFunc(this: HTMLInputElement) {
  // Use 'this' with type 'HTMLInputElement'
  const parent = this.parentNode as HTMLElement | null;
  if (parent && this.value === "") {
    parent.classList.remove("focus");
  }
}

// Ensure that inputs is a NodeList of HTMLInputElement
inputs.forEach((input) => {
  // Add event listeners with proper type annotations
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


const Contact = () => {
  return (
    <ContactContainer className='bg-white z-50'>
        <Layout>
         <div className=''>
          <video autoPlay muted loop id="myVideo" className="brightness-50 z-10 fixed right-0 bottom-0 w-full h-full object-cover   top-0 ">
            <source src="./assets/3.mov" type="video/mp4" className='w-full h-full object-contain'/>
          </video>
          <div className=' absolute z-20  w-full h-full object-cover  top-0 '> 
    <img src="./assets/7.png" alt=""  className='blur-[350px] bg-no-repeat w-full h-full object-cover'/>
          </div>
    </div>

    <div className="container m-auto">
    <span className="big-circle"></span>
    <img src="img/shape.png" className="square" alt="" />
    <div className="form">
      <div className="contact-info">
        <h3 className="title">Let's get in touch</h3>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          dolorum adipisci recusandae praesentium dicta!
        </p>

        <div className="info">
          <div className="information">
             <FaLocationDot 
             className='text-2xl m-1 text-[#00ffda]'/>

            <p>D-29, Institutional Area, Janakpuri, New Delhi Pincode - 110058</p>
          </div>
          <div className="information">
            <IoIosMail  className='text-2xl m-1 text-[#00ffda]'/>

            <p>internware@gmail.com</p>
          </div>
          <div className="information">
            <FaPhoneAlt className='text-2xl m-1 text-[#00ffda]' />

            <p>+91 95995 84815</p>
          </div>
          <div className="information">
            <FaPhoneAlt className='text-2xl m-1 text-[#00ffda]' />

            <p>+91 98918 65001</p>
          </div>
        </div>

        <div className="social-media">
          <p>Connect with us :</p>
          <div className="social-icons">
            <a href="#"   className='text-[#000000] text-4xl '>
            <CiFacebook />
            </a>
            
            <a href="#"  className='text-[#000000] text-4xl '>
            <CiInstagram />
            </a>
            <a href="#"  className='text-[#000000] text-4xl '>
            <CiLinkedin />
            </a>
          </div>
        </div>

      </div>

      <div className="contact-form">
        <span className="circle one"></span>
        <span className="circle two"></span>

        <form action="index.html" autoComplete="off">
          <h3 className="title">Contact us</h3>
          <div className="input-container">
            <input type="text" name="name" className="input" />
            <label htmlFor="">Username</label>
            <span>Username</span>
          </div>
          <div className="input-container">
            <input type="email" name="email" className="input" />
            <label htmlFor="">Email</label>
            <span>Email</span>
          </div>
          <div className="input-container">
            <input type="tel" name="phone" className="input" />
            <label htmlFor="">Phone</label>
            <span>Phone</span>
          </div>
          <div className="input-container textarea">
            <textarea name="message" className="input"></textarea>
            <label htmlFor="">Message</label>
            <span>Message</span>
          </div>
          <input type="submit" value="Send" className="btn" />
        </form>
      </div>
    </div>
  </div>
  </Layout>
  </ContactContainer>
  )
}

const ContactContainer = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap");


body,
input,
textarea {
  font-family: "Poppins", sans-serif;
}

.container {
  position: relative;
  width: 100%;
  top: 20px;
  /* left: 12%; */
  height: 100vh;
  padding: 2rem;
  background-color: black;
  
/* #00ffda
#00ffd4  */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form {
  width: 100%;
  max-width: 820px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.contact-form {
  background-color: #00af92;
  position: relative;
}

.circle {
  border-radius: 50%;
  background: linear-gradient(135deg, transparent 20%, #149279);
  position: absolute;
}

.circle.one {
  width: 130px;
  height: 130px;
  top: 130px;
  right: -40px;
}

.circle.two {
  width: 80px;
  height: 80px;
  top: 10px;
  right: 30px;
}

.contact-form:before {
  content: "";
  position: absolute;
  width: 26px;
  height: 26px;
  background-color: #1abc9c;
  transform: rotate(45deg);
  top: 50px;
  left: -13px;
}

form {
  padding: 2.3rem 2.2rem;
  z-index: 10;
  overflow: hidden;
  position: relative;
}

.title {
  color: #fff;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1;
  margin-bottom: 0.7rem;
}

.input-container {
  position: relative;
  margin: 1rem 0;
}

.input {
  width: 100%;
  outline: none;
  border: 2px solid #fafafa;
  background: none;
  padding: 0.6rem 1.2rem;
  color: #fff;
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  border-radius: 5px;
  transition: 0.3s;
}

textarea.input {
  padding: 0.8rem 1.2rem;
  min-height: 150px;
  border-radius: 5px;
  resize: none;
  overflow-y: auto;
}

.input-container label {
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  padding: 0 0.4rem;
  color: #fafafa;
  font-size: 0.9rem;
  font-weight: 400;
  pointer-events: none;
  z-index: 1000;
  transition: 0.5s;
}

.input-container.textarea label {
  top: 1rem;
  transform: translateY(0);
}

.btn {
  padding: 0.6rem 1.3rem;
  background-color: #fff;
  border: 2px solid #fafafa;
  font-size: 0.95rem;
  color: #1abc9c;
  line-height: 1;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  margin: 0;
  width: 100%;
}

.btn:hover {
  background-color: transparent;
  color: #fff;
}

.input-container span {
  position: absolute;
  top: 0;
  left: 25px;
  transform: translateY(-50%);
  font-size: 0.8rem;
  padding: 0 0.4rem;
  color: transparent;
  pointer-events: none;
  z-index: 500;
}

.input-container span:before,
.input-container span:after {
  content: "";
  position: absolute;
  width: 10%;
  opacity: 0;
  transition: 0.3s;
  height: 5px;
  background-color: #1abc9c;
  top: 50%;
  transform: translateY(-50%);
}

.input-container span:before {
  left: 50%;
}

.input-container span:after {
  right: 50%;
}

.input-container.focus label {
  top: 0;
  transform: translateY(-50%);
  left: 25px;
  font-size: 0.8rem;
}

.input-container.focus span:before,
.input-container.focus span:after {
  width: 50%;
  opacity: 1;
}

.contact-info {
  padding: 2.3rem 2.2rem;
  position: relative;
}

.contact-info .title {
  color: #1abc9c;
}

.text {
  color: #333;
  margin: 1.5rem 0 2rem 0;
}

.information {
  display: flex;
  color: #555;
  margin: 0.7rem 0;
  align-items: center;
  font-size: 0.95rem;
}

.information i {
  color: #1ABC9C;
}

.icon {
  width: 28px;
  margin-right: 0.7rem;
}

.social-media {
  padding: 2rem 0 0 0;
}

.social-media p {
  color: #333;
}

.social-icons {
  display: flex;
  margin-top: 0.5rem;
  /* justify-content: center; */
  text-align: center;
  align-items: center;
}

.social-icons a {
  display: flex;
  justify-content: center;
    align-items: center;
    text-align: center;
  width: 35px;
  height: 35px;
  border-radius: 5px;
  background: linear-gradient(45deg, #1abc9c, #149279);
  color: #fff;
  text-align: center;
  line-height: 35px;
  margin-right: 0.5rem;
  transition: 0.3s;
}

.social-icons a:hover {
  transform: scale(1.05);
}

.contact-info:before {
  content: "";
  position: absolute;
  width: 110px;
  height: 100px;
  border: 22px solid #1abc9c;
  border-radius: 50%;
  bottom: -77px;
  right: 50px;
  opacity: 0.3;
}

.big-circle {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: linear-gradient(to bottom, #1cd4af, #159b80);
  bottom: 50%;
  right: 50%;
  transform: translate(-40%, 38%);
}

.big-circle:after {
  content: "";
  position: absolute;
  width: 360px;
  height: 360px;
  background-color: #fafafa;
  border-radius: 50%;
  top: calc(50% - 180px);
  left: calc(50% - 180px);
}

.square {
  position: absolute;
  height: 400px;
  top: 50%;
  left: 50%;
  transform: translate(181%, 11%);
  opacity: 0.2;
}

@media (max-width: 900px) {
    .container{
        left: 4%;
    }
}

@media (max-width: 850px) {
    .container{
        left: 4%;
    }
  .form {
    grid-template-columns: 1fr;
  }

  .contact-info:before {
    bottom: initial;
    top: -75px;
    right: 65px;
    transform: scale(0.95);
  }

  .contact-form:before {
    top: -13px;
    left: initial;
    right: 70px;
  }

  .square {
    transform: translate(140%, 43%);
    height: 350px;
  }

  .big-circle {
    bottom: 75%;
    transform: scale(0.9) translate(-40%, 30%);
    right: 50%;
  }

  .text {
    margin: 1rem 0 1.5rem 0;
  }

  .social-media {
    padding: 1.5rem 0 0 0;
  }
}

@media (max-width: 480px) {
  .container {
    /* padding: 1.5rem; */
    padding: 5px;
    top: 80px;
    left: 0px;
    height: 100%;
    margin-bottom: 10rem;
  }

  .contact-info:before {
    display: none;
  }

  .square,
  .big-circle {
    display: none;
  }

  form,
  .contact-info {
    padding: 1.7rem 1.6rem;
  }

  .text,
  .information,
  .social-media p {
    font-size: 0.8rem;
  }

  .title {
    font-size: 1.15rem;
  }

  .social-icons a {
    width: 40px;
    height: 40px;
    line-height: 30px;
    display: flex;
    justify-content: center;
  }

  .icon {
    width: 23px;
  }

  .input {
    padding: 0.45rem 1.2rem;
  }

  .btn {
    padding: 0.45rem 1.2rem;
  }
}

`

export default Contact
