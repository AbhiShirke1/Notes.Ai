import React, { useState } from 'react'
import { RxDotFilled } from 'react-icons/rx';
import DateTime from '../DateTime/DateTime';
import { BsChevronCompactLeft , BsChevronCompactRight}from 'react-icons/bs'
import './carousel.css'
const Carousel = () => {
    const slides=[
        {
          url:'https://images.unsplash.com/photo-1532619031801-97b02fb2de1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80'
        },
        {
          url:'https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
        },
        {
          url:'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        
        },
        {
          url:'https://images.unsplash.com/photo-1585435465945-bef5a93f8849?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
      ]
      const[currentIndex,setCurrentIndex]=useState(0);
      const prevSlide=()=>{
        const isFirstSlide=currentIndex===0;
        const newIndex=isFirstSlide ? slides.length-1 : currentIndex-1;
        setCurrentIndex(newIndex);
      }
      const nextSlide=()=>{
        const isLastSlide=currentIndex===slides.length-1;
        const newIndex = isLastSlide ? 0 : currentIndex+1;
        setCurrentIndex(newIndex);
      }
      const goToSlide=(slideIndex) =>{
        setCurrentIndex(slideIndex);
      };

  return (
    <div className="main">
          <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='bgImage'>
          </div>
          <div className=' group-hover:block absolute top-[3%] -translate-x-0 -translate-y--[50%] left-auto mx-5 text-2xl rounded-full p-2 bg-black/20  text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30}></BsChevronCompactLeft>
          </div>
          <div className=' group-hover:block absolute top-[3%] -translate-x-0 -translate-y--[50%] right-auto text-2xl mx-20 rounded-full p-2 bg-black/20  text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30}></BsChevronCompactRight>
          </div>
          <div className='-my-40 text-white mx-10'>
            <span className='text-4xl font-nunito font-semibold text-white'>Good Morning, Sandeep</span>
            <DateTime></DateTime>
          </div>
          </div>
  )
}

export default Carousel