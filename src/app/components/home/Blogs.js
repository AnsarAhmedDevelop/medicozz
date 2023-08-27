"use client"
import React from 'react'
import Title from '../Title'
// import {projectOne, projectTwo, projectThree } from "../public/index.js"
import BlogsCard from './BlogsCard'

const Blogs = () => {
  return (
    <section
    id="projects"
    className="w-full py-20 border-b-[1px] border-b-black"
  >
    <div className="flex justify-center items-center text-center">
      <Title
        title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
        des="My Blogs"
      />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
      <BlogsCard
        title="SOCIAL MEDIA CLONE"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src="/images/home/projectOne.jpg"
      />
      <BlogsCard
        title="E-commerce Website"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src="/images/home/projectTwo.jpg"
      />
      <BlogsCard
        title="Chatting App"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src="/images/home/projectThree.jpeg"
      />
      <BlogsCard
        title="SOCIAL MEDIA CLONE"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src="/images/home/projectThree.jpeg"
      />
      <BlogsCard
        title="E-commerce Website"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src="/images/home/projectOne.jpg"
      />
      <BlogsCard
        title="Chatting App"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src="/images/home/projectTwo.jpg"
      />
    </div>
  </section>
  )
}

export default Blogs