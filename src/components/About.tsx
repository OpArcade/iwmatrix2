import React from 'react'
import styled from 'styled-components'
import Glimpses from './Glimpses'

const About = () => {
  return (
    <AboutHomeContainer className='relative z-20 2xl:top-[40rem] xl:top-[40rem] lg:top-[35rem] top-[43rem]  p-2 mt-8 m-auto w-full'>
       <section className='  m-9 flex flex-col lg:flex-row gap-3  justify-center text-center items-center'> 

        <div className='flex flex-col justify-center text-center '>
            
            <div className="glitch-wrapper mb-[20px]">
	<div className="glitch " data-glitch="About Matrix">About Matrix</div>
</div>
            <p className='text-white text-[10px]  text-base md:text-2xl'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae nobis dolore neque aperiam enim quas voluptates similique assumenda aut molestiae, fuga illo unde quo rem repellendus repudiandae debitis esse quidem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sunt fuga laboriosam unde enim consectetur perspiciatis minima esse corporis ipsum at consequuntur et dolore repudiandae, laborum consequatur reiciendis deserunt maiores?</p>
        </div>
           

           {/* <div className='flex flex-col justify-center text-center mt-[20px]'>
            
            <div className="glitch-wrapper mb-[20px]">
	<div className="glitch glitch3 " data-glitch="Matrix">Matrix</div>
</div>
            <p className=' text-[10px] text-white text-base md:text-2xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi labore veniam dolorem doloremque in esse incidunt, provident porro enim! Dolor perferendis deserunt placeat rem sunt ex modi, voluptate laudantium facere. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam libero, unde praesentium itaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita optio alias nulla praesentium, laboriosam aliquid nam quod, placeat at facilis officiis ipsum illo molestias, saepe fuga consequuntur rerum dolorem incidunt? nisi numquam voluptates corporis tempore expedita sequi nobis saepe architecto, enim asperiores eos, repudiandae minus? Dolorum, voluptatem!</p>
           </div> */}
           <Glimpses />
       </section>
       
       
    </AboutHomeContainer>
  )
}



const AboutHomeContainer = styled.div`
    
  
    
`
export default About
