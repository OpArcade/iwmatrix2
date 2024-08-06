import React, { useEffect } from 'react'
import styled from 'styled-components'



const Faq = () => {
  return (

    


    <FAQContainer className=' relative z-20 top-[40rem] p-2 mt-[10rem] m-auto 2xl:w-4/5 xl:w-4/5 lg:w-3/4 md:max-lg:w-5/6'>

      <main className='flex flex-col justify-center text-center'>
        {/* <h1 className='text-[#00ffd4] 2xl:text-7xl xl:text-[7xl]  2xl:font-bold xl:font-semibold mb-10 text-5xl font-semibold '>FAQS</h1> */}
        <div className="glitch-wrapper mb-[20px]">
	<div className="glitch " data-glitch="FAQ">FAQ</div>
</div>
        
        <div className="faq-section  w-8/12 m-auto">
  {/* 1 */}
  <details className='cursor-pointer'>
    <summary className='text-[20px] lg:text-[35px] text-[#00ffd4] flex justify-between items-center mb-[25px] marker::hidden' >
      <h4 className=' lg:w-8/12 text-left'>How many events are there in Matrix 2.0?</h4>
            <button id="myButton" className=''>+</button>
      
    </summary >
    <p className='max-w-8/12 text-left text-white text-[85%]  lg:text-[175%] mb-[10px] pl-[10px]'>There are 9 events in Matrix 2.0 namely- Hackathon, Live Project, Data Science, Pitchers, News Flash, Inside Edge, UI/UX Design, Gaming Tournament, and Gaming Parlour. 
    
    </p>

  </details>
  
  <hr className='border-[1px] border-white'/>
{/* 2 */}
  <details className='cursor-pointer'>
  <summary className='text-[20px] lg:text-[35px] text-[#00ffd4] flex justify-between items-center mb-[25px] marker::hidden' >
      <h4 className='w-8/12 text-left'>Is there a participation fee for the events?</h4>
            <button id="myButton" className=''>+</button>
      
    </summary >
    <p className='max-w-8/12 text-left text-white text-[85%]  lg:text-[175%] mb-[10px] pl-[10px]'>We think of Raycast as a productivity layer that everybody should use to get work done faster. To make it accessible, we don't charge for the individual plan. The plan covers all built-in extensions, such as Clipboard History, Calendar or Window Management and provides access to all public extensions built by our community.
    
    </p>

  </details>
  
  <hr className='border-[1px] border-white'/>
{/* 3 */}
  <details className='cursor-pointer'>
  <summary className='text-[20px] lg:text-[35px] text-[#00ffd4] flex justify-between items-center mb-[25px] marker::hidden' >
      <h4 className='w-8/12 text-left'>Is there any reward or prize for these events?</h4>
            <button id="myButton" className=''>+</button>
      
    </summary >
    <p className='max-w-8/12 text-left text-white text-[85%]  lg:text-[175%] mb-[10px] pl-[10px]'>There is a pool prize for Hackathon and Gaming Tournament. All events offer other rewards such as certificates, trophies, etc.
    
    </p>

  </details>
  
  <hr className='border-[1px] border-white'/>
{/* 4 */}
  <details className='cursor-pointer'>
  <summary className='text-[20px] lg:text-[35px] text-[#00ffd4] flex justify-between items-center mb-[25px] marker::hidden' >
      <h4 className='w-8/12 text-left'>Can I take part in multiple events?</h4>
            <button id="myButton" className=''>+</button>
      
    </summary >
    <p className='max-w-8/12 text-left text-white text-[85%]  lg:text-[175%] mb-[10px] pl-[10px]'>Yes, students can participate in multiple events.
    
    </p>

  </details>
  
  <hr className='border-[1px] border-white'/>

{/* 5 */}
  <details className='cursor-pointer'>
  <summary className='text-[20px] lg:text-[35px] text-[#00ffd4] flex justify-between items-center mb-[25px] marker::hidden' >
      <h4 className='w-8/12 text-left'>How can I get all the event details and instructions?</h4>
            <button id="myButton" className=''>+</button>
      
    </summary >
    <p className='max-w-8/12 text-left text-[white] text-[85%]  lg:text-[175%] mb-[10px] pl-[10px]'>Stay tuned on the official instagram channel of Matrix 2.0 for all details, updates and guidelines. 
    
    </p>

  </details>
  
  <hr className='border-[1px] border-white'/>


 
  
 
 
</div>


      </main>
    </FAQContainer>
  )
}


const FAQContainer=styled.div`

summary::marker {
  display: none;
  content: "";
}





`

export default Faq
