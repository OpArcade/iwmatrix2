import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Register = () => {
  return (
    <RegisterContainer className='relative z-30 md:w-[90%] m-auto top-[40rem] '>
    {/* // How to register */}
    <div className='  flex flex-col   justify-center text-center'>
          <div className="glitch-wrapper mb-[20px]">
	<div className="glitch " data-glitch="How To Register">How To Register</div>
</div>
        <div className='flex md:flex-row flex-col justify-center text-center mt-[2.5rem]'>
        <button className='glowing-btn mx-3 max-md:my-[20px] max-md:mb-[60px] flex justify-center' >
        <Link to='#' className='text-white  my-[10px] md:text-lg text-base'><span className='glowing-txt'>Resgiter<span className='faulty-letter'>For</span>Event</span> </Link></button>

        <button className='glowing-btn mx-3 max-md:my-[20px] max-md:mb-[60px] flex justify-center' >
        <Link to='#' className='text-white  my-[10px] md:text-lg text-base'><span className='glowing-txt'>Resgiter<span className='faulty-letter'>For</span>Hackathon <br /> Solo</span> </Link></button>

        <button className='glowing-btn max-md:my-[20px] mx-3 max-md:mb-[60px] flex justify-center' >
        <Link to='#' className='text-white  my-[10px] text-base md:text-lg '><span className='glowing-txt'>Resgiter<span className='faulty-letter'>For</span>Hackathon  <br /> Team </span> </Link></button>
        </div>
      
    </div>
    </RegisterContainer>
  )
}

const RegisterContainer = styled.div`
.gradient-border{
  border: 4px solid #00ffd4;
  border-radius: 30%;
  
}

.gradient-boder:hover{
  background-color: #00ffd4;
}


--glow-color: #00ffd4;

.glowing-btn {
  position: relative;
  color: var(--glow-color);
  cursor: pointer;
  padding: 0.35em 1em;
  border: 2px solid var(--glow-color);
  border-radius: 0.45em;
  background: none;
  perspective: 2em;
  font-family: "Raleway", sans-serif;
  font-size: 1em;
  font-weight: 900;
  letter-spacing: 0.5em;
  /* margin:10px; */

  -webkit-box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
    0px 0px 0.5em 0px var(--glow-color);
  -moz-box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
    0px 0px 0.5em 0px var(--glow-color);
  box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
    0px 0px 0.5em 0px var(--glow-color);
  animation: border-flicker 2s linear infinite;
}

.glowing-txt {
  float: left;
  margin-right: -0.8em;
  -webkit-text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
    0 0 0.45em var(--glow-color);
  -moz-text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
    0 0 0.45em var(--glow-color);
  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em var(--glow-color);
  animation: text-flicker 3s linear infinite;
}

.faulty-letter {
  opacity: 0.5;
  animation: faulty-flicker 2s linear infinite;
}

.glowing-btn::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.7;
  filter: blur(1em);
  transform: translateY(90%) rotateX(70deg) scale(.8, 0.20);
  background: var(--glow-color);
  pointer-events: none;
}

.glowing-btn::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  z-index: -1;
  background-color: var(--glow-color);
  box-shadow: 0 0 1em 0.1em var(--glow-color);
  transition: opacity 100ms linear;
}

.glowing-btn:hover {
  color: rgba(0, 0, 0, 0.8);
  text-shadow: none;
  animation: none;
}

.glowing-btn:hover .glowing-txt {
  animation: none;
}

.glowing-btn:hover .faulty-letter {
  animation: none;
  text-shadow: none;
  opacity: 1;
}

.glowing-btn:hover:before {
  filter: blur(1.5em);
  opacity: 1;
}

.glowing-btn:hover:after {
  opacity: 1;
}

@keyframes faulty-flicker {
  0% {
    opacity: 0.1;
  }
  2% {
    opacity: 0.1;
  }
  4% {
    opacity: 0.5;
  }
  19% {
    opacity: 0.5;
  }
  21% {
    opacity: 0.1;
  }
  23% {
    opacity: 1;
  }
  80% {
    opacity: 0.5;
  }
  83% {
    opacity: 0.4;
  }

  87% {
    opacity: 1;
  }
}

@keyframes text-flicker {
  0% {
    opacity: 0.1;
  }

  2% {
    opacity: 1;
  }

  8% {
    opacity: 0.1;
  }

  9% {
    opacity: 1;
  }

  12% {
    opacity: 0.1;
  }
  20% {
    opacity: 1;
  }
  25% {
    opacity: 0.3;
  }
  30% {
    opacity: 1;
  }

  70% {
    opacity: 0.7;
  }
  72% {
    opacity: 0.2;
  }

  77% {
    opacity: 0.9;
  }
  100% {
    opacity: 0.9;
  }
}

@keyframes border-flicker {
  0% {
    opacity: 0.1;
  }
  2% {
    opacity: 1;
  }
  4% {
    opacity: 0.1;
  }

  8% {
    opacity: 1;
  }
  70% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}

@media only screen and (max-width: 600px) {
  .glowing-btn{
    font-size: 1em;
  }
}



`
export default Register
