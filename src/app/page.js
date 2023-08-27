import Header from "./components/Header";
import React from 'react'

import Link from "next/link";
import Banner from "./components/home/Banner";
import Features from "./components/home/Features";
import Blogs from "./components/home/Blogs";
import Resume from "./components/home/Resume";
import Testimonial from "./components/home/Testimonial";
import TryTestimonial from "./components/home/TryTestimonial";



export default function Home() {
  return (
    <>
    <div className="">     
 
      {/* <Header /> */}
      {/* <div className="relative w-full  z-40 sm:w-10/12 mx-auto ">
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
              <div className="mx-5 sm:mx-0 self-center">
                <h4>Welcome to My World</h4>
                <h1 className="text-white text-3xl sm:text-4xl mb-0 sm:mb-4 tracking-tight font-extrabold leading-tight">
                Hi, I'm <span className="text-designColor">Dr Qazi Arifuddin</span> 
                </h1>              
                <div className="mt-3 sm:mt-10">
                  <Link
                    className="py-3 px-5 border border-white rounded-sm bg-transparent text-white text-lg font-semibold hover:bg-white hover:text-[#004368] hover:border-white"
                    href=""
                  >
                    Start Now
                  </Link>
                </div>
              </div>
              <div className="justify-self-end self-start ">
              
                <img alt="DrArif" src="/images/frontPage.png" className="" />
              </div>
            </div>
          </div> */}
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Blogs />
        <Resume />
        {/* <TryTestimonial /> */}
        <Testimonial />
      </div>
 
    </div>
     
    </>
  )
}
