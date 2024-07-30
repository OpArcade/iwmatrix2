import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import UseWindowDimension from '../components/hooks/UseWindowDimension'
import Burger from '../components/Burger'

const Layout = ({children} : {children:React.ReactNode}) => {
    const {width}  = UseWindowDimension();
  return (
    <LayoutContainer>
        { width > 900 && <Navbar /> }
        { width < 868 && <Burger />}
        {children}
       
    </LayoutContainer>
  )
}

const LayoutContainer = styled.div`
    
`

export default Layout