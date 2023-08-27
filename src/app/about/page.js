"use client"
import React, {useRef, useEffect, useState} from 'react'
import { gsap } from 'gsap'

const About = () => {
  const [background, setBackground]= useState("#5d7e95")
  const headerRef=useRef(null)
  const toggleBackground=()=>{
    const color=background !== "#5d7e95"? "#5d7e95":"#1b3943"
    setBackground(color);
  }
  useEffect(()=>{
  gsap.to(
    headerRef.current,
    {
      duration: 1,
      backgroundColor:background,
      ease:"none"
    }
  )
  },[background])
  useEffect(()=>{
    gsap.from(
      headerRef.current,
      {
        duration:1,
        autoAlpha:0,
        ease:"none",
        delay:1
      }
      )  
  },[])
  return (
    <div ref={headerRef} className='h-screen text-black'>
      <h2 className='text-3xl text-black'>All about H2</h2>
      <button onClick={()=>toggleBackground()}>Toggle Background</button>
    </div>
  )
}

export default About