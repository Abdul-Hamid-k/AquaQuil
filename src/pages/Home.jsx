import React, { useContext, useRef } from 'react'
import RotatingCircleText from './RotatingCircleText'
import data from "../assets/data.js"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { AppDataContext } from '../context/AppContext'
import { Link } from 'react-router'
import assets from '../assets/assets.js'

gsap.registerPlugin(ScrollTrigger)


const Home = () => {
  var heroTextRef = useRef(null)
  var bottleRef = useRef(null)
  const { isSplashScreenOpen } = useContext(AppDataContext)

  useGSAP(() => {

    console.log(isSplashScreenOpen)
    if (!isSplashScreenOpen) {
      gsap.from(heroTextRef.childNodes, {
        y: 100,
        duration: 1.5,
        opacity: 0,
        stagger: 0.3,
        delay: 0.3,
      })

      gsap.from(bottleRef.current, {
        y: 600,
        duration: 2,
        delay: 0.3,
      })
    }
  }, [isSplashScreenOpen])
  console.log(heroTextRef)

  return (

    <div className="max-w-[1200px] mx-auto px-5 sm:px-[3%] mb-20">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-3 min-h-[calc(100vh-80px)] items-center">
        <div className="order-1 md:order-0 -z-2">
          <h2 ref={e => heroTextRef = e} className='text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-medium font-hero -z-1 overflow-hidden'>
            {data.home.heroMainText.split(' ').map((letter, idx) => (
              <span key={idx} className='inline-block mr-3'>{letter}  </span>
            ))}
          </h2>
          <p className='mt-4 text-gray-600'>Experience the freshness of crystal-clear, mineral-rich water, sourced from the heart of nature.</p>
          {/* todo */}
          <Link to='/about'
            // onClick={() => window.scrollTo(0, 0)}
            className='px-5 py-2 inline-block rounded-full bg-primary-g text-white mt-5 cursor-pointer'
          >
            Contact Us
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>

        <div className="select-none -z-10 mx-3 mt-10 md:mt-0">
          <div className="relative">

            <div className="">

              {/* <img className='absolute z-10' src={waterBottle} /> */}

              <div className="relative overflow-hidden rounded-[8rem] sm:rounded-b-[10rem] h-85 xs:h-108 sm:h-130 flex items-end" >
                <div className="h-auto relative ">

                  <div className="absolute z-10 -right-0  md:right-15 -top-15 w-[160px] ">
                    <RotatingCircleText />
                  </div>

                  <img
                    className='rounded-[13rem] h-[60vw] sm:h-[384px] w-[100vw]  object-cover'
                    src="https://images.unsplash.com/photo-1607284170102-f09142a2c733?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Hero image" />

                </div>

                <div className="flex overflow-hidden absolute justify-center h-[130%] xs:h-[130%] w-full -bottom-25 sm:-bottom-30">
                  <img ref={bottleRef} src={assets.waterBottle} alt="water bottle" className='w-fit  ' />
                </div>


              </div>


              <div className="h-[60vw] sm:h-[384px] w-[80vw] sm:w-[90%] border-4 border-primary-g/40 -z-1 rounded-[208px] absolute -bottom-5 -left-3 sm:-left-5"></div>
            </div>

          </div>

        </div >
      </div >
    </div >
  )
}

export default Home