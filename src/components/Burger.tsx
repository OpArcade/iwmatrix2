import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


document.addEventListener('DOMContentLoaded', () => {
  // Ensure that the elements exist and are of type HTMLElement or null
  const burgerButton = document.getElementById('burgerButton') as HTMLButtonElement | null;
  const sidebar = document.getElementById('sidebar') as HTMLElement | null;

  // Check if the elements exist before adding event listeners
  if (burgerButton && sidebar) {
      burgerButton.addEventListener('click', () => {
          // Toggle classes on the sidebar element
          sidebar.classList.toggle('translate-x-0');
          sidebar.classList.toggle('-translate-x-full');
          sidebar.classList.toggle('w-60');  // Toggle width when open
          sidebar.classList.toggle('left-full');
      });
  } else {
      console.error('Element(s) not found: burgerButton or sidebar');
  }
});
const Burger = () => {
  return (
    <BurgerContainer>
      <div className="logo absolute z-50 top-6 p-2 pl-6">
          <Link to="/Home" className=" text-white 2xl:text-4xl font-serif xl:text-2xl lg:text-3xl md:max-xl:text-3xl text-2xl">Matrix</Link>
        </div>

      <div>
 <button id="burgerButton" className="absolute top-6 left-[22rem] p-2 text-2xl text-white  rounded-md focus:outline-none z-50 2xl:hidden xl:hidden lg:hidden">
      ☰
  </button>
    <div id="sidebar" className="absolute top-0 left-0 w-full h-full bg-gray-800 text-white transform -translate-x-full transition-transform duration-300 ease-in-out z-40">
      <aside className="w-64 h-full bg-gray-800">
          <div className="px-3 py-4 overflow-y-auto bg-gray-800">
              <ul className="space-y-2 mt-20 ml-10">

              <li><Link to="/Home" className="text-white  hover:text-[#00ffd4]  text-lg" >Home</Link></li>
            <li><Link to="/Events" className="text-white  hover:text-[#00ffd4] text-lg" >Events</Link></li> 
            <li><Link to="/Sponsors" className="text-white hover:text-[#00ffd4] text-lg">Sponsors</Link></li>
            <li><Link to="/Contact" className="text-white hover:text-[#00ffd4] text-lg">Contact</Link></li>
              </ul>
          </div>
      </aside>
  </div>
  </div>
    </BurgerContainer>
  )
}


const BurgerContainer = styled.div`

  @media (max-width:900px){
    #burgerButton{
      left: 48rem;
    }
  }
  @media (max-width:850px){
    #burgerButton{
      left: 45rem;
    }
  }
  @media (max-width:800px){
    #burgerButton{
      left: 42rem;
    }
  }

  @media (max-width:750px){
    #burgerButton{
      left: 37rem;
    }
  }
  @media (max-width:700px){
    #burgerButton{
      left: 35rem;
    }
  }

  @media (max-width:650px){
    #burgerButton{
      left: 33rem;
    }
  }

  @media (max-width:600px){
    #burgerButton{
      left: 31rem;
    }
  }

  @media (max-width:550px){
    #burgerButton{
      left: 29rem;
    }
  }

  @media (max-width:500px){
    #burgerButton{
      left: 27rem;
    }
  }

  
  
  @media (max-width:460px){
    #burgerButton{
      left: 23rem;
    }
  }
  
  @media (max-width:385px){
    #burgerButton{
      left: 20rem;
    }
  }
`
export default Burger
