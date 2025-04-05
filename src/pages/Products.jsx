import React, { useContext, useRef, useState } from 'react'
import { AppDataContext } from '../context/AppContext'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import ProductBase from "../assets/products_base.avif"
import data from "../assets/data"
import assets from '../assets/assets'


const Products = () => {
  const { isSplashScreenOpen } = useContext(AppDataContext)
  var productMainTextRef = useRef(null)
  const bottleRef = useRef(null)
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
        scale: 0,
        duration: 3
      })

      gsap.from(bottleRef.current, {
        scale: 0,
        duration: 3,
        x: 200,
        rotate: "-50"
      })
    }
  }, [isSplashScreenOpen])

  useGSAP(() => {
    console.log("openPanel", openPanel)

    if (openPanel === "description") {
      gsap.to(productDescription.current, {
        height: "auto",
        ease: "power1.out",
        duration: 0.5,
        opacity: 1,
      })
      gsap.to(productAbout.current, {
        height: 0,
        duration: 1,
        ease: "power1.out",
        opacity: 0,
      })
    } else if (openPanel === "about") {
      gsap.to(productAbout.current, {
        height: "auto",
        ease: "power1.out",
        duration: 1,
        opacity: 1,
      })
      gsap.to(productDescription.current, {
        height: 0,
        duration: 1,
        ease: "power1.out",
        opacity: 0,
      })
    } else if (openPanel == "") {
      console.log("clear animatio")
      gsap.to(productDescription.current, {
        height: 0,
        duration: 1,
        ease: "power1.out",
        opacity: 0,
      })

      gsap.to(productAbout.current, {
        height: 0,
        duration: 0.5,
        ease: "power1.out",
        opacity: 0,
      })
    }
  }, [openPanel])

  console.log(openPanel)
  return (
    <>
      <div className="relative max-w-[75rem] flex justify-center items-center mx-auto px-5 sm:px-[3%] mb-20">
        {data.products.map((product, idx) => (
          <div key={idx}>
            {idx === productIndex && (
              <>
                <div className=' flex flex-col lg:grid lg:grid-cols-3 gap-y-15 md:gap-12 items-center mt-12'>
                  {/* left */}
                  <div className='w-full mt-10 lg:mt-0'>
                    <h2 ref={e => productMainTextRef = e} className='font-medium text-6xl '>
                      {product.productName.split(' ').map((letter, idx) => (
                        <span key={idx} className='inline-block mr-3 -z-10'>{letter}  </span>
                      ))}
                    </h2>
                    <p className='mt-4 w-[80%]  text-gray-600 text-sm'>{product.productAbout}</p>

                    <button className='px-5 py-2 cursor-pointer rounded-full bg-primary-g text-white mt-5'>Get the Delivery <i className="ri-arrow-right-line"></i></button>
                  </div>

                  {/* center */}
                  <div className="relative flex items-center justify-center items-self-start w-full order-first lg:order-0 -z-1 ">

                    <div className="relative  h-[60vh] w-[80vw] md:w-[60vw] lg:w-auto  md:h-[90vh] lg:h-[80vh] md:max-h-[30rem] ">
                      <div className="w-[90%] h-full  rounded-t-full overflow-hidden justify-self-center border-10 border-b-0 border-secondary-g">
                        {/* base bg */}
                        <img ref={productBaseImage} className="object-cover w-full h-full scale-[400%]"
                          src={ProductBase} alt="Product Base" />
                        <div className="absolute overflow-x-hidden -bottom-18 h-full flex items-end justify-center w-[85%]">
                          {/* water bottle */}
                          <img ref={bottleRef} src={product?.image} alt="Water Bottle" className='h-full sm:h-[98%] ' />
                        </div>
                      </div>



                      {/* design components-1 */}
                      <div className="rounded-full w-fit bg-primary-b/10 backdrop-blur p-1.5 flex gap-3 absolute top-[20%] -left-[5%] md:-left-[10%]">
                        <div>
                          <img src={assets.productsReviewerImg1} alt="reviewer-1" className='rounded-full h-10 w-10' />
                        </div>

                        <div className="flex flex-col pe-1">
                          <h4 className='font-medium text-sm'>Abdul Hamid</h4>
                          <p className='text-xs text-gray-700'>Fresh and refreshing!!</p>
                        </div>
                      </div>

                      {/* design components-2 */}
                      <div className="rounded-full w-fit bg-primary-b/10 backdrop-blur p-1.5 flex gap-3 absolute top-[80%] -right-[5%] md:-right-[20%] lg:-right-[30%]">
                        <div className='order-1 md:order-0'>
                          <img src={assets.review2} alt="reviewer-1" className='rounded-full h-10 w-10' />
                        </div>

                        <div className="flex flex-col ps-2 md:pe-1">
                          <h4 className='font-medium text-sm text-white md:text-black'>Shrinivas Joshi</h4>
                          <p className='text-xs text-gray-300 md:text-gray-700'>Fresh and refreshing!!</p>
                        </div>
                      </div>


                    </div>

                    {/* bottom green platform */}
                    <div className="absolute lg:hidden -bottom-19 -z-10 overflow-hidden w-full h-[8rem]">
                      <div className="ml-[-50%] h-[500px] w-[200%] rounded-t-[100%] bg-primary-g/80">
                      </div>
                    </div>

                  </div>

                  {/* right */}
                  <div className="w-full md:w-[80%] mb-10 md:mb-5 align-self-end">
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

                      <div ref={productDescription} className={`overflow-hidden h-0 transition-all duration-300 `}>
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

                      <div ref={productAbout} className={`overflow-hidden h-0 transition-all duration-300 `}>
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

      {/* bottom green platform for lg-screen */}
      <div className="absolute hidden lg:block top-[34.5rem] -z-10 overflow-hidden w-full h-[8rem]">
        <div className="ml-[-50%] h-[500px] w-[200%] rounded-t-[100%] bg-primary-g/80">
        </div>
      </div>


    </>
  )
}

export default Products