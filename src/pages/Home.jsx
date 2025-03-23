import React from 'react'
import RotatingCircleText from './RotatingCircleText'
import { waterBottle } from '../assets/assets'

const Home = () => {
  return (
    // <div className='grid grid-cols-3 gap-15 items-end'>
    //   <div className=''>
    //     <h2 className='font-medium text-6xl'>Mineral Water Bottle</h2>
    //     <p className='mt-4 text-gray-600 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At cumque libero aliquid a molestias tempora ab. Unde libero totam aperiam?</p>

    //     <button className='px-3 py-1 rounded-lg bg-primary-g text-white mt-5'>Contact Us</button>
    //   </div>

    //   <div className="items-self-start h-[70vh] ">
    //     <div className="w-full h-full bg-red-500 rounded-t-full"></div>
    //   </div>
    // </div>

    <div className="flex flex-col sm:grid sm:grid-cols-2 gap-10 sm:gap-3 h-[calc(100vh-5rem)] items-center">
      <div className="order-1 sm:order-0">
        <h2 className='text-5xl sm:text-5xl md:text-7xl font-medium font-hero'>Pure Essence of Nature in Every Drop</h2>
        <p className='mt-4 text-gray-600'>Experience the freshness of crystal-clear, mineral-rich water, sourced from the heart of nature.</p>
        {/* todo */}
        <button className='px-5 py-2 cursor-pointer rounded-full bg-primary-g text-white mt-5'>Contact Us <i className="ri-arrow-right-line"></i></button>
      </div>

      <div className="select-none -z-10 mx-3 mt-25 sm:mt-0">
        <div className="relative ">

          <div className="absolute z-1 -right-0  sm:right-15 -top-15 w-[10rem] ">
            <RotatingCircleText />
          </div>

          <div className="relative">
            {/* <img className='absolute z-10' src={waterBottle} /> */}

            <div className="relative">
              <img
                className='rounded-[13rem] h-[60vw] sm:h-[24rem] w-[100vw] sm:w-[90%] object-cover'
                src="https://images.unsplash.com/photo-1607284170102-f09142a2c733?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="" />


            </div>
            <div className="h-[60vw] sm:h-[24rem] w-[80vw] sm:w-[90%] border-4 border-primary-g/40 -z-1 rounded-[13rem] absolute top-5 -left-3 sm:-left-5"></div>
          </div>

        </div>

      </div >
    </div >
  )
}

export default Home