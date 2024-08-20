import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import Layout from '../layout/Layout';
import { useStateContext } from '../globalcontext/ContextProvider';
import { auth, db } from '../firebase/firebase';
import { onValue, ref } from 'firebase/database';
import { signOut } from 'firebase/auth';

const Profile = () => {

  const {currentUser} = useStateContext()
  const [userData,setUserData] = useState<any>({})
  const [userEventsDetails,setUserEventsDetails] = useState<any>({})
  const [userEvents,setUserEvents] = useState<string[]>([])
  // let uid = currentUser.uid

  const getUseDetails=()=>{
    if (currentUser?.uid){
      const user = ref(db,`users/${currentUser?.uid}`)
      const eventData = ref(db,`events/`)
      const UI = ref(db,'events/UI/UX Design')
    
    onValue(user,(snapshot)=>{
      if(snapshot?.exists()){
        let info = snapshot?.val();
        setUserData(info)
      }
    })
    onValue(eventData,(snapshot)=>{
      if(snapshot?.exists()){
        let info = snapshot?.val();
        setUserEventsDetails(info)
      }
    })
    onValue(UI,(snapshot)=>{
      if(snapshot?.exists()){
        let info = snapshot?.val();
      }
    })
  }
}


  useEffect(()=>{
    getUseDetails()
  },[currentUser])


  // console.log(userEventsDetails)
  console.log(userEvents)

  return (

    <Layout>
    <div className='h-full'>
      <h1 className='text-[#00ffd4] md:text-[3.5em] font-serif items-center text-center mt-10' >Profile</h1>
      {/* profile section */}
      <section className='w-full flex md:flex-row justify-center md:justify-around text-center  mt-16'>
        {/* image section */}
      <div className='flex flex-col justify-center text-center  '>

          <img src={currentUser?.photoURL ?? 'https://static.vecteezy.com/system/resources/previews/013/042/571/non_2x/default-avatar-profile-icon-social-media-user-photo-in-flat-style-vector.jpg'} alt="profile-image" className='rounded-full' />

        <div className='text-xl md:text-2xl  text-white m-10  '>
          <p className='m-2'>Name : {currentUser?.displayName}</p>
          <p className='m-2'>Phone number : {userData.phoneNumber} </p>
          <p className='m-2'>Email : {currentUser?.email} </p>
          <p className='m-2'>course : {userData?.course} </p>
          <p className='m-2'>year : {userData?.year}  </p>
          <p className='m-2'>College : {userData?.college}  </p>
          {userData?.teamname !== '' && <p className='m-2'>Team Name : {userData?.teamname}  </p>}
          <button className='bg-red-600 px-6 py-2 mt-8 hover:bg-red-700 rounded-md text-center'  onClick={()=>signOut(auth)} >Logout</button>
        </div>
      </div>
{/* events details  */}
      <div className='text-center gap-2 md:w-2/4'>
        <h1 className='text-[#00ffd4] md:text-[3em] font-serif'>Selected Events</h1>
        
        <div>
        <div className='flex flex-wrap w-3/4 gap-2 p-2  border-0  m-auto border-black rounded-2xl  mt-3'>

          {userEventsDetails['Data Science']  && <span className='bg-neutral-200 border border-opacity-10 rounded-lg cursor-default inline-block text-base font-semibold mr-1 px-10 py-8 transition duration-300 ease-in-out'>Data Science</span>}
          {/* {userEventsDetails['Gaming tournament'][currentUser?.uid]["event_name"] === 'Gaming tournament'  && <span className='bg-neutral-200 border border-opacity-10 rounded-lg cursor-default inline-block text-base font-semibold mr-1 px-10 py-8 transition duration-300 ease-in-out'>Gaming tournament</span>}
          {userEventsDetails['Inside Edge'][currentUser?.uid]["event_name"] === 'Inside Edge'  && <span className='bg-neutral-200 border border-opacity-10 rounded-lg cursor-default inline-block text-base font-semibold mr-1 px-10 py-8 transition duration-300 ease-in-out'>Inside Edge</span>}
          {userEventsDetails['Live Project'][currentUser?.uid]["event_name"] === 'Live Project'  &&<span className='bg-neutral-200 border border-opacity-10 rounded-lg cursor-default inline-block text-base font-semibold mr-1 px-10 py-8 transition duration-300 ease-in-out'>Live Project</span>}
          {userEventsDetails['News Surge'][currentUser?.uid]["event_name"] === 'News Surge'  &&<span className='bg-neutral-200 border border-opacity-10 rounded-lg cursor-default inline-block text-base font-semibold mr-1 px-10 py-8 transition duration-300 ease-in-out'>News Surge</span>}
          {userEventsDetails['Pitchers'][currentUser?.uid]["event_name"] === 'Pitchers'  &&<span className='bg-neutral-200 border border-opacity-10 rounded-lg cursor-default inline-block text-base font-semibold mr-1 px-10 py-8 transition duration-300 ease-in-out'>Pitchers</span>}
          {userEventsDetails?.UI['UX Design'][currentUser?.uid]["event_name"] === 'UI/UX Design'  &&<span className='bg-neutral-200 border border-opacity-10 rounded-lg cursor-default inline-block text-base font-semibold mr-1 px-10 py-8 transition duration-300 ease-in-out'>UI/UX Design</span>} */}

      </div>
      </div>
    </div>
      </section>
    </div>
    </Layout>
  )
}

export default Profile
