import React, { useContext, useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { AppDataContext } from '../context/AppContext';

gsap.registerPlugin(useGSAP);

const SplashScreen = () => {
  const bgCircleRef = useRef(null);
  let textMainRef = useRef(null);
  const exploreRef = useRef(null);
  const splashScreenRef = useRef(null);

  const { isSplashScreenOpen, setIsSplashScreenOpen } = useContext(AppDataContext)

  // Disable scrolling when splash screen is open
  useEffect(() => {
    if (isSplashScreenOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isSplashScreenOpen]);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(bgCircleRef.current, {
      opacity: 0,
      duration: 1.3,
      width: 0,
      height: 0,
      ease: 'elastic.out'
    })

    tl.from(textMainRef.childNodes, {
      y: 100,
      duration: 0.7,
      opacity: 0,
      stagger: 0.1,
    })

    tl.from(exploreRef.current, {
      opacity: 0,
      duration: 2,
      y: 20,
      ease: 'elastic.out'
    })
  }, [])

  useGSAP(() => {
    if (isSplashScreenOpen) {
      gsap.to(splashScreenRef.current, {
        duration: 1,
        translateX: '0',
        position: 'fixed',
      })
    } else {
      gsap.to(splashScreenRef.current, {
        // opacity: 0,
        duration: 1,
        translateX: '-150%',
        position: 'static',
      })
    }
  }, [isSplashScreenOpen])

  return (
    <div ref={splashScreenRef} className='fixed z-100 top-0 left-0'>
      <div className="overflow-hidden w-screen">
        <div className="z-[8] fixed left-20 h-screen w-screen bg-secondary-g"></div>
        <div className=" z-[10] fixed left-10 h-screen w-screen bg-primary-g"></div>
        <div className='z-[20] h-screen w-screen fixed bg-white flex justify-center items-center'>
          <div ref={bgCircleRef}
            onClick={() => setIsSplashScreenOpen(false)} className="bg-primary-g rounded-full h-[10rem] w-[10rem] sm:h-[20rem] sm:w-[20rem]"></div>

          <div className="absolute flex overflow-hidden leading-none">
            <p onClick={() => setIsSplashScreenOpen(false)}
              ref={e => { textMainRef = e }}
              className='text-center text-[3.5rem] font-medium select-none sm:text-[10rem] md:text-[11rem] capitalize'>
              {"ESSENCE".split("").map((char, index) => (
                <span key={index} className='inline-block'>
                  {char}
                </span>
              ))}
            </p>
          </div>
          <p
            ref={exploreRef}
            className='absolute bottom-15 text-xl cursor-pointer'
            onClick={() => setIsSplashScreenOpen(false)} >
            Explore
            <i className="ri-send-plane-fill fill-primary-g"></i>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SplashScreen