import React, { useEffect, useState } from 'react'

const getWindowDimensions=()=>{
    const {innerWidth:width,innerHeight:height} = window; // innerwidth and innerheight is datatypes created 
    return {width,height};
}

const UseWindowDimension = () => {

    const [windowDimension,setWindowDimension] = useState(
        getWindowDimensions()
    )

    useEffect(()=>{
        function handleResize(){
            setWindowDimension(getWindowDimensions)
        }
        window.addEventListener("resize",handleResize);
        return() => window.removeEventListener("resize",handleResize);
    },[])

  return windowDimension
}

export default UseWindowDimension