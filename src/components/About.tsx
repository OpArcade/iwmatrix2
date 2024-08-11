import React from 'react'
import styled from 'styled-components'
import Glimpses from './Glimpses'

const About = () => {
  return (
    <AboutHomeContainer className='relative z-20  lg:top-[35rem] top-[35rem]  p-2 mt-8 m-auto w-full  flex flex-col justify-center text-center'>

      <section className=''>
      <div className="glitch-wrapper ">
	              <div className="glitch " data-glitch="About Internware">About InternWare</div>
        </div>
        
        <div className='flex  flex-col lg:flex-row justify-center text-center items-center md:w-[75%] md:mt-6 w-full m-auto'>
            
           <div className='p-2 flex justify-center text-center items-center'>

            <p className='text-white text-[10px]  text-base md:text-2xl'> InternWare- Internship Cell, IITM is a student-driven college society dedicated to empowering students. We bridge the gap between academics and industry by offering a plethora of skill-building events and workshops. From technical expertise to soft skills, we equip students to excel in their professional journeys. InternWare aims to prepare students for internships and polish their young, raw, and unlimited talent into their valuable assets. </p>
           </div>
          </div>
        
      </section>
       <section className='  m-9 flex flex-col  gap-3  justify-center text-center items-center p-2'> 

        <div className="glitch-wrapper ">
	              <div className="glitch " data-glitch="About Matrix">About Matrix</div>
        </div>
        
        <div className='flex  flex-col lg:flex-row justify-center text-center items-center md:w-[95%] w-full m-auto'>
            
           <div className='p-2 flex justify-center text-center items-center'>

            <p className='text-white text-[10px]  text-base md:text-2xl'> MATRIX 2.0 is InternWare's ultimate Tech Fest designed for tech enthusiasts. This event is a melting pot of innovation, where tech prodigies can showcase their skills, learn from industry experts, and network with like-minded peers. 
SEPTEMBER 20-21, 2024
With a diverse range of competitions spanning various tech domains, MATRIX 2.0 offers a platform to explore, experiment, and excel. Join us as we redefine the boundaries of technology together. 
</p>
           </div>

           <Glimpses />
        </div>
           

          
       </section>
       
       
    </AboutHomeContainer>
  )
}



const AboutHomeContainer = styled.div`
    
  
    
`
export default About
