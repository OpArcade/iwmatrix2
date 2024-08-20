import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import UseWindowDimension from '../hooks/UseWindowDimension'
import Burger from '../components/Burger'
import { useStateContext } from '../globalcontext/ContextProvider'

const Layout = ({children} : {children:React.ReactNode}) => {

    const {width}  = UseWindowDimension();
    const { setOpenMenu , openMenu}= useStateContext();
  return (
    <LayoutContainer>
       <Navbar /> 
        {/* { width < 868 && <Burger />} */}
        {
           openMenu && <Burger />

        }
        {children}
       
    </LayoutContainer>
  )
}

const LayoutContainer = styled.div`
    
`

export default Layout