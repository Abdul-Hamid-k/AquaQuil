import React from 'react'
import assets from '../assets/assets'
import data from '../assets/data.json'
import { Circle, GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

const About = () => {
  const [map, setMap] = React.useState(null)

  const center = useMemo(() => ({
    lat: 21.826211,
    lng: 75.614188,
  }), [])


  const { isLoaded } = useLoadScript({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  })

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
    <div className='mb-10'>
      <div className="relative w-full">
        <img src={assets.aboutBG} alt="about bg" className='opacity-80 w-full h-[50vh] sm:h-[60vh] object-cover' />
        {/* TODO: ADD bottles */}
      </div>
      <div className="max-w-[75rem] mx-auto px-5 sm:px-[3%] mt-10">
        <h2 className='text-3xl font-bolf'>About Us</h2>

        {/* founders */}
        <h3 className='mt-3 text-lg text-primary-g font-medium'>Our Founders</h3>
        <div className="w-full flex flex-col md:flex-row gap-3 mt-3">
          <div className='h-[40vh]  w-full bg-zinc-100 overflow-hidden flex flex-col justify-center items-center rounded-xl'>
            <img src={assets.productsReviewerImg1} alt="co-founder-img"
              className='h-[50%] w-fit rounded-full' />
            <h3 className='mt-2 font-medium text-lg'>Sikandar Khatri</h3>
            <h3 className='mt-1/2 font-medium text-sm'>Co-founder</h3>
            {/* <p className='mt-1 text-sm text-zinc-700'>About Abdul hamid</p> */}
          </div>

          <div className='h-[40vh]  w-full bg-zinc-100 overflow-hidden flex flex-col justify-center items-center rounded-xl'>
            <img src={assets.productsReviewerImg1} alt="co-founder-img"
              className='h-[50%] w-fit rounded-full' />
            <h3 className='mt-2 font-medium text-lg'>Vahid Ali Saiyad</h3>
            <h3 className='mt-1/2 font-medium text-sm'>Co-founder</h3>
            {/* <p className='mt-1 text-sm text-zinc-700'>About Abdul hamid</p> */}
          </div>
        </div>

        {/* content */}
        <>
          {/* section1 */}
          <>
            <h3 className='mt-3 text-lg text-primary-g font-medium'>Pure. Fresh. Naturally Yours.</h3>
            <p className='mt-3 md:w-[90%]'>At AquaQuill, we believe that water is more than just hydration—it's a source of life, vitality, and well-being. Our journey began with a simple mission: to provide pure, mineral-rich water sourced from nature and bottled with the standards of purity.</p>
          </>

          {/* section2 */}
          <>
            <h3 className='mt-5 text-lg text-primary-g font-medium'>Why Choose AquaQuill?</h3>
            <p className='mt-2 md:w-[90%]'>
              <i className="ri-check-line text-xl text-purple-500 font-bold"></i>
              <span className='font-medium'>100% Natural Mineral Water – </span>
              Sourced from pristine locations, naturally enriched with essential minerals.
            </p>

            <p className='mt-1 md:w-[90%]'>
              <i className="ri-check-line text-xl text-purple-500 font-bold"></i>
              <span className='font-medium'>Stringent Quality Control – </span>
              Our water undergoes multi-stage purification to meet the highest industry standards.
            </p>

            <p className='mt-1 md:w-[90%]'>
              <i className="ri-check-line text-xl text-purple-500 font-bold"></i>
              <span className='font-medium'>Sustainable & Eco-Friendly – </span>
              Committed to reducing plastic waste with recyclable packaging.
            </p>
          </>

          {/* section3 */}
          <>
            <h3 className='mt-5 text-lg text-primary-g font-medium'>Expanding Horizons</h3>
            <p className='mt-3 md:w-[90%]'>Currently, we offer 500ml and 1L bottles of our premium mineral water, perfect for on-the-go hydration. But we’re not stopping there! Soon, we’ll be introducing a range of refreshing carbonated cold drinks in exciting new flavors—crafted to energize and revitalize you with every sip.</p>
          </>

          {/* section4 */}
          <>
            <h3 className='mt-5 text-lg text-primary-g font-medium'>Join the AquaQuill Family</h3>
            <p className='mt-3 md:w-[90%]'>We are more than just a brand; we are a movement towards better hydration, better health, and a better planet. Whether you're staying active, working hard, or simply enjoying a moment of refreshment, AquaQuill is here to quench your thirst with purity and perfection.</p>

            <div className="flex justify-center mt-5">
              <p className='font-medium'>
                <i className="ri-poker-diamonds-fill text-primary-b"></i>
                Stay Hydrated. Stay Pure. Stay AquaQuill.
                <i className="ri-poker-diamonds-fill text-primary-b"></i>
              </p>
            </div>
          </>
        </>

        {/* map and contact */}
        {/* <div className="mx-auto max-w-[75rem] bg-red-500"> */}
        <div className="mt-5 flex flex-col md:flex-row gap-3 items-center md:justify-center">
          {/* contact */}
          <div className="flex flex-col gap-4">
            {/* phone */}
            <div className="flex flex-col items-center border-[0.01rem] border-zinc-200 py-4 px-10 rounded-xl w-full  sm:w-[18rem] ">
              <i className="ri-phone-fill text-2xl"></i>
              <p className=' text-sm'>Phone</p>
              <p className='text-sm text-zinc-500 mt-1'>+91-9826-731-934</p>
              <p className='text-sm text-zinc-500'>+91-9753-022-742</p>
            </div>

            {/* whatsapp */}
            <div className="flex flex-col items-center border-[0.01rem] border-zinc-200 py-4 px-10 rounded-xl w-full  sm:w-[18rem] ">
              <i className="ri-whatsapp-line text-2xl"></i>
              <p className=' text-sm'>Whatsapp</p>
              <p className='text-sm text-zinc-500 mt-1'>+91-9826-731-934</p>
              <p className='text-sm text-zinc-500'>+91-9753-022-742</p>
            </div>

            {/* map */}
            <div className="flex flex-col items-center border-[0.01rem] border-zinc-200 py-4 px-10 rounded-xl w-full  sm:w-[18rem] ">
              <i className="ri-map-pin-line text-2xl"></i>
              <p className=' text-sm'>Address</p>
              <p className='text-sm text-zinc-500 mt-1 text-center'>Khargone, MadhyaPradesh, 451001</p>
            </div>
          </div>

          {/* map */}
          <div className="w-full h-[26rem]">
            {!isLoaded ? (
              <h1>Loading...</h1>
            ) : (
              <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100%' }}
                center={center}
                zoom={9.5}
                // onLoad={onLoad}
                onUnmount={onUnmount}
              >
                {/* Child components, such as markers, info windows, etc. */}
                <Circle
                  radius={18000}
                  center={{ lat: 21.826211, lng: 75.614188 }}
                  options={{ strokeColor: "#ff0000" }} />
              </GoogleMap>
            )}

          </div>
          {/* </div> */}

        </div>

      </div>
    </div>
  )
}

export default About