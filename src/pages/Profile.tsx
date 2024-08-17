import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import Layout from '../layout/Layout';





const Profile = () => {
  return (

    <Layout>
    <div className='h-screen'>
      <h1 className='text-[#00ffd4] md:text-[3.5em] font-serif items-center text-center mt-10' >Profile</h1>
      {/* profile section */}
      <section className='w-full flex md:flex-row justify-center md:justify-around text-center  mt-16'>
        {/* image section */}
      <div className='flex flex-col justify-center text-center  '>
        <figure className='w-[200px] md:w-[200px] bg-red-500 m-auto '>
          <img src="./assets/profile.jpg" alt="" />
        </figure>
        <div className='text-xl md:text-2xl  text-white m-10  '>
          <p className='m-2'>Name</p>
          <p className='m-2'>Phone number</p>
          <p className='m-2'>Email</p>
          <p className='m-2'>course</p>
          <p className='m-2'>year</p>

        </div>
      </div>
{/* events details  */}
      <div className='text-center gap-2 md:w-2/4'>
        <h1 className='text-[#00ffd4] md:text-[3em] font-serif' >Selected Events</h1>
        
        <div>
        <div className='flex flex-wrap w-3/4 gap-2 p-2  border-0  m-auto border-black rounded-2xl  mt-3'>
          <span className='bg-neutral-200 border border-opacity-10 rounded-lg cursor-default inline-block text-base font-semibold mr-1 px-10 py-8 transition duration-300 ease-in-out'>Java</span>
          <span className='bg-neutral-200 border border-opacity-10 rounded-lg cursor-default inline-block text-base font-semibold mr-1 px-10 py-8 transition duration-300 ease-in-out'>Python</span>
          <span className='bg-neutral-200 border border-opacity-10 rounded-lg cursor-default inline-block text-base font-semibold mr-1 px-10 py-8 transition duration-300 ease-in-out'>C</span>
          <span className='bg-neutral-200 border border-opacity-10 rounded-lg cursor-default inline-block text-base font-semibold mr-1 px-10 py-8 transition duration-300 ease-in-out'>C++</span>
          <span className='bg-neutral-200 border border-opacity-10 rounded-lg cursor-default inline-block text-base font-semibold mr-1 px-10 py-8 transition duration-300 ease-in-out'>SQL</span>
          <span className='bg-neutral-200 border border-opacity-10 rounded-lg cursor-default inline-block text-base font-semibold mr-1 px-10 py-8 transition duration-300 ease-in-out'>DSA</span>
          <span className='bg-neutral-200 border border-opacity-10 rounded-lg cursor-default inline-block text-base font-semibold mr-1 px-10 py-8 transition duration-300 ease-in-out'>Javascript</span>
          <span className='bg-neutral-200 border border-opacity-10 rounded-lg cursor-default inline-block text-base font-semibold mr-1 px-10 py-8 transition duration-300 ease-in-out'>Typescript</span>

           </div>
        </div>
      </div>

      
      </section>
    </div>
    </Layout>
  )
}

export default Profile
