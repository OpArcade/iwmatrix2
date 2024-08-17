import React from 'react'
import styled from 'styled-components'
import Layout from '../layout/Layout'
import { Link } from 'react-router-dom'

const Sponsor = () => {
  return (
    <SponsorContainer className='relative z-[1000]'>
      <Layout>
      <div className=''>
          <video autoPlay muted loop id="myVideo" className="brightness-50 blur-[4px] z-10 fixed right-0 bottom-0 w-full h-full object-cover min-w-full min-h-full top-0 max-w-0">
            <source src="./assets/3.mov" type="video/mp4" />
          </video>
          <div className='bg-black fixed  z-10 blur-[400px] w-full h-full object-cover'> 
    <img src="./assets/7.png" alt="" className='w-full h-full object-cover'/>
          </div>
    </div>


    <div className='z-40 relative top-[4rem] m-auto'>
      {/* Heading */}
      <div>
      <div className="glitch-wrapper w-2/4 max-md:w-full m-auto text-center flex flex-col items-center ">
	<div className="glitch text-center max-sm:text-[45px] max-sm:font-bold text-[1em]" data-glitch="Sponsor Us">Sponsor Us</div>
  <h1 className='text-center text-white text-md md:text-xl max-sm:text-[20px] font-semibold mt-[20px]'>DOWNLOAD THE PROPOSAL</h1>

 
  <button className='glowing-btn md:mx-[20px] max-sm:my-[20px] mt-[20px] w-[12rem] flex justify-center text-center'>
    <Link to='https://drive.google.com/file/d/1Uos5CAX5JHrWfIsVOk6p5dd6Jvbbm0_D/view?usp=sharing' target='_blank' className='text-white mx-[25px] my-[10px] text-xl '><span className='glowing-txt'>Do<span className='faulty-letter'>wn</span>load</span> </Link>
    </button>
</div>
      </div>

      {/* about us and about event */}
      <div className='flex flex-col md:flex-row gap-5 mt-[60px] w-[75%] m-auto'>
        {/* About us */}
        <div className=' p-4 text-center lg:w-2/4  border-4 border-[#00ffd4] rounded-[20px]'>
          <h1 className='text-[#00ffd4] text-xl md:text-4xl font-bold'>About Matrix</h1>
          <p className='text-white p-2 text-center'>MATRIX 2.0 is InternWare's ultimate Tech Fest designed for tech enthusiasts. This event is a melting pot of innovation, where tech prodigies can showcase their skills, learn from industry experts, and network with like-minded peers. 
SEPTEMBER 20-21, 2024
With a diverse range of competitions spanning various tech domains, MATRIX 2.0 offers a platform to explore, experiment, and excel. Join us as we redefine the boundaries of technology together. 
</p>
        </div>

        {/* Matrix about */}
        <div className=' p-4 text-center lg:w-2/4 border-4 border-[#00ffd4] rounded-[20px]'>
        <h1 className='text-[#00ffd4] text-xl md:text-4xl font-bold'>Why sponsor us?</h1>
        <p className='text-white p-2 text-center'>Partner with InternWare and gain access to a vibrant and tech-savvy audience. By sponsoring Matrix 2.0, you can showcase your brand to a dynamic group of young, innovative minds. Build lasting relationships through networking and position your company as a unique and problem-solving brand. Let's collaborate to create an unforgettable experience that benefits us all.</p>
        </div>
      </div>

      {/* Contact person details  */}
      <div className='w-full flex flex-col md:flex-row gap-5 mt-[60px]'>
      <div className='flex flex-col md:flex-row justify-center text-center gap-5 max-sm:w-full md:w-[25%] m-auto'>
        
        <div className='md:px-7 max-sm:w-2/4 m-auto md:py-4 text-center border-4 border-[#00ffd4] rounded-[20px]'>
        <h1 className='text-[#00ffd4] text-xl md:text-2xl font-bold'>Diya Kalra</h1>
        <p className='text-white p-2 text-center'>+91 96500 78119</p>
        </div>

        <div className='max-sm:w-2/4 m-auto md:px-7 md:py-4 text-center  border-4 border-[#00ffd4] rounded-[20px]'>
        <h1 className='text-[#00ffd4] text-xl md:text-2xl font-bold'>Suhani Gupta</h1>
        <p className='text-white p-2 text-center'>+91 98704 24494</p>
        </div>

      </div>
      </div>


 {/* current sponsors */}
 <div className='w-full flex flex-col  gap-5 mt-[60px] justify-center text-center'>

 <div className="glitch text-center text-lg max-sm:text-[26px] max-sm:font-bold" data-glitch="Our Current Sponsors">Our Current Sponsors</div>
{/* <h1 className='text-[#00ffd4] text-xl md:text-5xl font-bold'>Our Current Sponsors</h1> */}

<div className='container md:w-[75%] m-auto'>
 
  <div className="sponsor w-full rounded-full">
  <img src="./assets/fresca.png" alt="" />
  </div>
  <div className="sponsor w-full rounded-full">
  <img src="./assets/giani.png" alt="" />
  </div>
  <div className="sponsor w-full rounded-full">
  <img src="./assets/jamboree.png" alt="" />
  </div>
  
  
</div>
</div>


      {/* previous sponsors */}
      <div className='w-full flex flex-col  gap-5 mt-[60px] justify-center text-center'>

      <div className="glitch text-center text-lg max-sm:text-[26px] max-sm:font-bold" data-glitch="Our Previous Sponsors">Our Previous Sponsors</div>
      {/* <h1 className='text-[#00ffd4] text-xl md:text-5xl font-bold'>Our Previous Sponsors</h1> */}

      <div className='container md:w-[75%] m-auto'>
       
        <div className="sponsor w-full rounded-full">
        <img src="./assets/fresca.png" alt="" />
        </div>
        <div className="sponsor w-full rounded-full">
        <img src="./assets/giani.png" alt="" />
        </div>
        <div className="sponsor w-full rounded-full">
        <img src="./assets/jamboree.png" alt="" />
        </div>
        <div className="sponsor w-full rounded-full">
        <img src="./assets/news.png" alt="" />
        </div>
        <div className="sponsor w-full rounded-full">
        <img src="./assets/maac.png" alt="" />
        </div>
        <div className="sponsor w-full rounded-full">
        <img src="./assets/career.png" alt="" />
        </div>
        <div className="sponsor w-full rounded-full">
        <img src="./assets/gillette.png" alt="" />
        </div>
        <div className="sponsor w-full rounded-full">
        <img src="./assets/amul.png" alt="" />
        </div>
        
      </div>
      </div>
    </div>
      </Layout>
    </SponsorContainer>
  )
}


const SponsorContainer = styled.div`

.container{
  max-width:100%;
  display:grid;
  grid-template-columns:repeat(auto-fill, minmax(170px , 1fr));
  gap:1rem;
}
.sponsor{
  margin: 10px;
    padding: 10px;
    /* background-color: white; */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sponsor img {
    max-width: 100px;
    height: auto;
}
  
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
  /* font-size: 1em; */
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
  transform: translateY(100%) rotateX(95deg) scale(1, 0.15);
  background:  var(--glow-color);
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
  box-shadow: 0 0 0 0 var(--glow-color);
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
export default Sponsor
