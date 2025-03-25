import React, { useContext, useRef, useState } from 'react'
import ProductBase from "../assets/products_base.avif"
import data from "../assets/data.json"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { AppDataContext } from '../context/AppContext'

const Products = () => {
  const { isSplashScreenOpen } = useContext(AppDataContext)
  var productMainTextRef = useRef(null)
  const productBaseImage = useRef(null)
  const productDescription = useRef(null)
  const productAbout = useRef(null)

  const [openPanel, setOpenPanel] = useState("")
  const [productIndex, setProductIndex] = useState(0)
  const numProducts = data.products.length

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

  useGSAP(() => {
    if (openPanel === "description") {
      gsap.to(productDescription.current, {
        height: "auto",
        ease: "none",
        duration: 0.5,
        opacity: 1,
      })
    } else if (openPanel === "about") {
      gsap.to(productAbout.current, {
        height: "auto",
        ease: "none",
        duration: 0.5,
        opacity: 1,
      })
    } else {
      console.log("clear animatio")
      gsap.to(productDescription.current, {
        height: 0,
        duration: 0.5,
        ease: "none",
        opacity: 0,
      })

      gsap.to(productAbout.current, {
        height: 0,
        duration: 0.5,
        ease: "none",
        opacity: 0,
      })
    }

  }, [openPanel])

  console.log(openPanel)
  return (
    <div className="">
      {data.products.map((product, idx) => (
        <div key={idx}>
          {idx === productIndex && (
            <>
              <div className=' flex flex-col sm:grid sm:grid-cols-3 gap-y-15 sm:gap-3 items-center mt-12'>
                {/* left */}
                <div className='w-full '>
                  <h2 ref={e => productMainTextRef = e} className='font-medium text-6xl '>
                    {product.productName.split(' ').map((letter, idx) => (
                      <span key={idx} className='inline-block mr-3 -z-10'>{letter}  </span>
                    ))}
                  </h2>
                  <p className='mt-4 w-[80%]  text-gray-600 text-sm'>{product.productAbout}</p>

                  <button className='px-5 py-2 cursor-pointer rounded-full bg-primary-g text-white mt-5'>Get the Delivery <i className="ri-arrow-right-line"></i></button>
                </div>

                {/* center */}
                <div className="items-self-start sm:col-span-1 order-first sm:order-0 h-[60vh] w-[80vw] sm:w-auto -z-1 sm:h-[80vh] sm:max-h-[30rem] ">
                  <div className="w-[90%] h-full  rounded-t-full overflow-hidden justify-self-center border-10 border-b-0 border-secondary-g">
                    <img ref={productBaseImage} className="object-cover w-full h-full scale-[100%]"
                      src={ProductBase} alt="Product Base" />
                  </div>
                </div>

                {/* right */}
                <div className="w-full sm:w-[80%] mb-10 sm:mb-5 align-self-end">
                  <div className="flex gap-8 mb-8">
                    <i
                      onClick={() => {
                        if (productIndex !== 0) {
                          setProductIndex(productIndex - 1);
                          setOpenPanel("")
                        }
                      }}
                      className={`ri-arrow-left-line text-3xl ${productIndex !== 0 ? "text-black cursor-pointer" : "text-gray-500"}`}></i>
                    <i
                      onClick={() => {
                        if (productIndex !== numProducts - 1) {
                          console.log(productIndex, numProducts)
                          setProductIndex(productIndex + 1);
                          setOpenPanel("")
                        }
                      }}
                      className={`ri-arrow-right-line text-3xl ${productIndex !== numProducts - 1 ? " text-black cursor-pointer" : "text-gray-500"}`}></i>
                  </div>

                  {/* description */}
                  <div>

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

                    <div ref={productDescription} className={`overflow-hidden transition-all duration-300 `}>
                      <p>{product.description}</p>
                    </div>

                  </div>

                  {/* about */}
                  <div>

                    <div
                      className={`${openPanel === "about" ? "border-black" : "border-gray-500"} border-b-3 flex justify-between items-center  cursor-pointer pb-1 mb-1`}
                      onClick={() => {
                        if (openPanel !== "about") {
                          setOpenPanel("about")
                        } else {
                          setOpenPanel("")
                        }
                      }}>
                      <h3 className={`${openPanel === "about" ? "text-black" : "text-gray-500"}`}>About</h3>
                      {openPanel === "about" ?
                        <i className={`ri-subtract-fill text-2xl text-black`} ></i> :
                        <i className={`ri-add-line text-2xl text-gray-500`} ></i>}

                    </div>

                    <div ref={productAbout} className={`overflow-hidden transition-all duration-300 `}>
                      <p>{product.about}</p>
                    </div>

                  </div>
                </div>


              </div>
            </>
          )}
        </div>
        // {/* <div className="overflow-hidden w-[100vw]">
        //   <div className="bg-red-500 absolute -left-16 -z-10 rounded-t-[100%] h-[10rem] w-[110vw]"></div>
        // </div> */}
      ))}
    </div>
  )
}

export default Products