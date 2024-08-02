import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <AboutHomeContainer className='relative z-20 2xl:top-[40rem] xl:top-[40rem] lg:top-[35rem] top-[40rem]  p-2 mt-8 m-auto 2xl:w-4/5 xl:w-4/5 lg:w-3/4 md:max-lg:w-5/6'>
       <section className='  m-9 flex flex-col gap-3  justify-center text-center'> 

        <div className='flex flex-col justify-center text-center '>
            {/* <h1 className='text-[#00ffd4] text-5xl font-semibold 2xl:text-7xl xl:text-[7xl]  2xl:font-bold xl:font-semibold mb-10 ' >About us</h1>    */}
            <div className="glitch-wrapper mb-[20px]">
	<div className="glitch " data-glitch="About us">About us</div>
</div>
            <p className='text-white text-[15px]  2xl:text-2xl xl:text-2xl'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae nobis dolore neque aperiam enim quas voluptates similique assumenda aut molestiae, fuga illo unde quo rem repellendus repudiandae debitis esse quidem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sunt fuga laboriosam unde enim consectetur perspiciatis minima esse corporis ipsum at consequuntur et dolore repudiandae, laborum consequatur reiciendis deserunt maiores?</p>
        </div>
           

           <div className='flex flex-col justify-center text-center mt-[20px]'>
            {/* <h1 className='text-[#00ffd4] 2xl:text-7xl xl:text-[7xl] font-medium 2xl:font-semibold xl:font-semibold mb-7 text-3xl  '>September 20-21, 2024</h1> */}
            <div className="glitch-wrapper mb-[20px]">
	<div className="glitch " data-glitch="September 20-21, 2024">September 20-21, 2024</div>
</div>
            <p className=' text-[15px] text-white text-lg 2xl:text-2xl xl:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi labore veniam dolorem doloremque in esse incidunt, provident porro enim! Dolor perferendis deserunt placeat rem sunt ex modi, voluptate laudantium facere. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam libero, unde praesentium itaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita optio alias nulla praesentium, laboriosam aliquid nam quod, placeat at facilis officiis ipsum illo molestias, saepe fuga consequuntur rerum dolorem incidunt? nisi numquam voluptates corporis tempore expedita sequi nobis saepe architecto, enim asperiores eos, repudiandae minus? Dolorum, voluptatem!</p>
           </div>
           
       </section>
       
       
    </AboutHomeContainer>
  )
}



const AboutHomeContainer = styled.div`
    
  
    
`
export default About
