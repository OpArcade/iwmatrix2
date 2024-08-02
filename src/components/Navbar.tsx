import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  return (
    // <NavbarContainer className="fixed 2xl:w-2/4 mx-auto xl:w-3/5 lg:w-3/4 md:max-lg:w-10/12">
<NavbarContainer className="relative top-5 z-20 2xl:w-full ">

      <nav className="flex justify-between items-center 2xl:w-2/4 lg:w-3/4 m-auto  p-1 gap-10  md:max-lg:mt-6 "  >

        {/* logo */}
        <div className="logo">
          <Link to="/Home" className=" text-white 2xl:text-4xl font-serif xl:text-3xl lg:text-3xl  text-2xl">Matrix</Link>
        </div>

        {/* nav list */}
        <div className="inline">
          <ul className="flex flex-row justify-center space-x-7">
          <li><Link to="/Home" className="text-white  hover:text-[#00ffd4]  text-lg" >Home</Link></li>
            <li><Link to="/Events" className="text-white  hover:text-[#00ffd4] text-lg" >Events</Link></li> 
            <li><Link to="/Sponsors" className="text-white hover:text-[#00ffd4] text-lg">Sponsors</Link></li>
            <li><Link to="/Contact" className="text-white hover:text-[#00ffd4] text-lg">Contact</Link></li>
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
