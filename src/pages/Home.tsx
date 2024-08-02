import React from 'react'
import styled from 'styled-components'
import Layout from '../layout/Layout'
import About from '../components/About'
import Glimpses from '../components/Glimpses'
import Faq from '../components/Faq'

const Home = () => {
  return (
    <HomeContainer>


    <div className=''>
          <video autoPlay muted loop id="myVideo" className="blur-[10px] z-10 fixed right-0 bottom-0 w-full h-full object-cover min-w-full min-h-full top-0 max-w-0">
            <source src="./assets/3.mov" type="video/mp4" />
          </video>
          <div className='bg-black fixed  z-20 blur-[400px] w-full h-full'> 
    <img src="./assets/7.png" alt="" />
          </div>
    </div>

    <Layout>
      


    <div className=" relative z-30 top-[15rem] flex p-2 flex-col  justify-center text-center m-auto w-full ">
      <div></div>
      {/* <h1 className="text-8xl 2xl:text-9xl xl:text-9xl mt-[30px] md:mt-[-20px] font-semibold text-white xl:my-16 ">Matrix</h1> */}

      <div className="glitch-wrapper mb-[20px]">
	<div className="glitch glitch2 text-8xl 2xl:text-9xl xl:text-9xl mt-[30px] md:mt-[-20px] font-semibold text-white xl:my-16" data-glitch="Matrix">Matrix</div>
</div>
      <h2 className="text-2xl 2xl:text-3xl xl:text-3xl font-semibold text-white 2xl:mt-[-60px] "> Tech Fest</h2>
  </div>

    </Layout>

    <About />
    <Glimpses />
    <Faq />


    </HomeContainer>
  )
}


const HomeContainer = styled.div`



`

export default Home
