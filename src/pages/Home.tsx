import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return (
    <HomeContainer>

    <div className=''>
          <video autoPlay muted loop id="myVideo" className="blur-[5px] fixed right-0 bottom-0 w-full h-full object-cover min-w-full min-h-full top-0 max-w-0">
            <source src="./assets/vecteezy_binary-code-with-numbers-moving-downward-on-screen_2015336.mov" type="video/mp4" />
          </video>
    </div>



    <div className=" fixed flex p-2 flex-col top-1/4 justify-center text-center m-auto w-full ">
      <h1 className="text-9xl font-semibold text-white xl:my-16">Matrix</h1>
  </div>


    </HomeContainer>
  )
}


const HomeContainer = styled.div`

/* position: relative; */

`

export default Home
