import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useStateContext } from '../globalcontext/ContextProvider'
import { onValue, ref } from 'firebase/database'
import { db } from '../firebase/firebase'
import Profile from '../pages/Profile'
const Navbar = () => {

  const { setOpenMenu ,currentUser, openMenu}= useStateContext();

  
  const [paymentdetails , setPaymentdetails] = useState<any>({});

  const getPaymentdetails=()=>{
    if (currentUser?.uid){
      const dbref = ref(db,`payments/${currentUser.uid}`)
    
    onValue(dbref,(snapshot)=>{
      if(snapshot?.exists()){
        let info = snapshot?.val();
        setPaymentdetails(info)
      }
    })
  }}

  useEffect(()=>{
    getPaymentdetails()
  },[currentUser])

  return (
  
<NavbarContainer className="relative w-80% m-auto top-5 z-30 md:w-[80%] lg:w-full ">

      <nav className="flex justify-between items-center 2xl:w-2/4 lg:w-3/4 m-auto  p-1 gap-10  md:max-lg:mt-6 "  >

        {/* logo */}
        <div className=" flex justify-between items-center w-full ">
         
          <Link to="/Home" className=" "><img src="./assets/LOGO MATRIX 2.0.png" alt="" className=" w-2/4 max-md:w-[180px] max-lg:w-[200px]"/></Link>

          <button id="burgerButton" onClick={() => setOpenMenu(!openMenu)} className=" p-2 text-2xl text-white  rounded-md focus:outline-none z-50 md:hidden max-md:block">
             ☰
          </button>
        </div>

        {/* nav list */}
        <div className="flex flex-row gap-[2rem] justify-center text-center items-center max-md:hidden">
          <ul className="flex flex-row justify-center space-x-7">
          <li><Link to="/Home" className="text-white  hover:text-[#00ffd4]  text-xl"  >Home</Link></li>
          { paymentdetails?.payment_status !== 'success' && 
            <li><Link to="/Events" className="text-white  hover:text-[#00ffd4] text-xl"  >Events</Link></li> 
          }
            <li><Link to="/Sponsors" className="text-white hover:text-[#00ffd4] text-xl" >Sponsors</Link></li>
            <li><Link to="/Contact" className="text-white hover:text-[#00ffd4] text-xl" > Contact</Link></li>
          </ul>
        

         {currentUser && <Link to="/Profile" className=" rounded-full w-[156px]">
            <img src={currentUser?.photoURL ?? 'https://static.vecteezy.com/system/resources/previews/013/042/571/non_2x/default-avatar-profile-icon-social-media-user-photo-in-flat-style-vector.jpg'} alt="" className='w-[50px] h-[50px] rounded-full object-cover'/>
          </Link>}
          </div>
      </nav>
    </NavbarContainer>
  )
}



const NavbarContainer = styled.div`

    nav{
      background: transparent;

     .logo{
      /* margin-right: 100px; */
     }
      .inline{
        a{
          padding: 2px;
          font-weight: 650;
          font-size: 20px;
        }
        
      }
    }
`
export default Navbar
