import React from 'react'
import styled from 'styled-components'
import Glimpses from './Glimpses'

const About = () => {
  return (
    <AboutHomeContainer className='relative z-20 2xl:top-[40rem] xl:top-[40rem] lg:top-[35rem] top-[43rem]  p-2 mt-8 m-auto w-full'>
       <section className='  m-9 flex flex-col  gap-3  justify-center text-center items-center p-2'> 

        <div className="glitch-wrapper ">
	              <div className="glitch " data-glitch="About Matrix">About Matrix</div>
        </div>
        
        <div className='flex  flex-col lg:flex-row justify-center text-center items-center md:w-[95%] w-full m-auto'>
            
           <div className='p-2 flex justify-center text-center items-center'>

            <p className='text-white text-[10px]  text-base md:text-2xl'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae nobis dolore neque aperiam enim quas voluptates similique assumenda aut molestiae, fuga illo unde quo rem repellendus repudiandae debitis esse quidem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sunt fuga laboriosam unde enim consectetur perspiciatis minima esse corporis ipsum at consequuntur et dolore repudiandae, laborum consequatur reiciendis deserunt maiores?</p>
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
