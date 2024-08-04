import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useStateContext } from '../globalcontext/ContextProvider'

const Navbar = () => {

  const { setOpenMenu , openMenu}= useStateContext();

  return (
    // <NavbarContainer className="fixed 2xl:w-2/4 mx-auto xl:w-3/5 lg:w-3/4 md:max-lg:w-10/12">
<NavbarContainer className="relative top-5 z-20 2xl:w-full ">

      <nav className="flex justify-between items-center 2xl:w-2/4 lg:w-3/4 m-auto  p-1 gap-10  md:max-lg:mt-6 "  >

        {/* logo */}
        <div className=" flex justify-between items-center w-full ">
          {/* <Link to="/Home" className=" text-white 2xl:text-4xl font-serif xl:text-3xl lg:text-3xl  text-2xl"><img src="./assets/LOGO 1ST VERSION.png" alt="" /></Link> */}
          <Link to="/Home" className=" "><img src="./assets/LOGO MATRIX 2.0.png" alt="" className=" w-2/4 max-md:w-[200px]"/></Link>

          <button id="burgerButton" onClick={() => setOpenMenu(!openMenu)} className=" p-2 text-2xl text-white  rounded-md focus:outline-none z-50 md:hidden max-md:block">
             ☰
          </button>
        </div>

        {/* nav list */}
        <div className="inline max-md:hidden">
          <ul className="flex flex-row justify-center space-x-7">
          <li><Link to="/Home" className="text-white  hover:text-[#00ffd4]  text-lg"  target='blank'>Home</Link></li>
            <li><Link to="/Events" className="text-white  hover:text-[#00ffd4] text-lg"  target='blank'>Events</Link></li> 
            <li><Link to="/Sponsors" className="text-white hover:text-[#00ffd4] text-lg" target='blank'>Sponsors</Link></li>
            <li><Link to="/Contact" className="text-white hover:text-[#00ffd4] text-lg" target='blank'> Contact</Link></li>
          </ul>
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
