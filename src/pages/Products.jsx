import React, { useContext, useRef, useState } from 'react'
import ProductBase from "../assets/products_base.avif"
import data from "../assets/data.json"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { AppDataContext } from '../context/AppContext'

const Products = () => {
  const { isSplashScreenOpen } = useContext(AppDataContext)
  var productMainTextRef = useRef(null)
  var productBaseImage = useRef(null)

  const [openPanel, setOpenPanel] = useState("")

  useGSAP(() => {
    if (!isSplashScreenOpen) {
      gsap.from(productMainTextRef.childNodes, {
        y: 100,
        duration: 1.5,
        opacity: 0,
        stagger: 0.3,
        delay: 0.3,
      })

      gsap.from(productBaseImage.current, {
        scale: 4,
        duration: 3
      })
    }

    
  }, [isSplashScreenOpen])


  return (
    <div className="">
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-y-15 sm:gap-3 items-center mt-12'>
        {/* left */}
        <div className=''>
          <h2 ref={e => productMainTextRef = e} className='font-medium text-6xl '>
            {data.products.productMainText.split(' ').map((letter, idx) => (
              <span key={idx} className='inline-block mr-3 -z-10'>{letter}  </span>
            ))}
          </h2>
          <p className='mt-4 text-gray-600 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At cumque libero aliquid a molestias tempora ab. Unde libero totam aperiam?</p>

          <button className='px-5 py-2 cursor-pointer rounded-full bg-primary-g text-white mt-5'>Get the Delivery <i className="ri-arrow-right-line"></i></button>
        </div>

        {/* center */}
        <div className="items-self-start col-span-2 sm:col-span-1 order-first sm:order-0 h-[50vh]  sm:h-[80vh] sm:max-h-[30rem] ">
          <div className="w-[90%] h-full  rounded-t-full overflow-hidden justify-self-center border-10 border-b-0 border-secondary-g">
            <img ref={productBaseImage} className="object-cover w-full h-full scale-[100%]"
              src={ProductBase} alt="Product Base" />
          </div>
        </div>

        {/* right */}
        <div className="w-full sm:w-[80%] items-end">
          <div className="flex gap-8 my-8">
            <i class="ri-arrow-left-line text-3xl cursor-pointer"></i>
            <i class="ri-arrow-right-line text-3xl cursor-pointer"></i>
          </div>

          <div className="">

            <div
              className={`${openPanel === "description" ? "border-black" : "border-gray-500"} border-b-3 flex justify-between items-center  cursor-pointer pb-1 mb-1`}
              onClick={() => {
                if (openPanel !== "description") {
                  setOpenPanel("description")
                } else {
                  setOpenPanel("")
                }
              }}>
              <h3 className={`${openPanel === "description" ? "text-black" : "text-gray-500"}`}>Description</h3>
              {openPanel === "description" ?
                <i className={`ri-subtract-fill text-2xl text-black`} ></i> :
                <i className={`ri-add-line text-2xl text-gray-500`} ></i>}

            </div>

            <div className={`overflow-hidden transition-all duration-300 ${openPanel === "description" ? "h-full" : "h-0"}`}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, facere!</p>
            </div>

          </div>
        </div>


      </div>
      {/* <div className="overflow-hidden w-[100vw]">
        <div className="bg-red-500 absolute -left-16 -z-10 rounded-t-[100%] h-[10rem] w-[110vw]"></div>
      </div> */}

    </div>
  )
}

export default Products