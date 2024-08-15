import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';





const Profile = () => {
  return (
    <div className='h-screen'>
      <h1 className='text-white text-[4em] font-serif items-center text-center' >Profile</h1>
      {/* profile section */}
      <section className=''>
        {/* image section */}
      <div>
        <figure className='w-[200px] md:w-[250px]'>
          <img src="./assets/profile.jpg" alt="" />
        </figure>
        <div className='text-xl md:text-3xl'>
          <p>Name</p>
          <p>Phone number</p>
          <p>Email</p>
          <p>course</p>
          <p>year</p>

        </div>
      </div>
{/* events details  */}
      <div>
        
      </div>

      
      </section>
    </div>
  )
}

export default Profile
