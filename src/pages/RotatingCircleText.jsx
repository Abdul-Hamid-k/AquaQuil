import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const RotatingCircleText = () => {
  const circleTextRef = useRef(null);

  useGSAP(() => {
    gsap.to(circleTextRef.current, {
      duration: 10,
      rotation: 360,
      repeat: -1,
      ease: 'none'
    })
  }, [])

  return (
    <div ref={circleTextRef}>
      <svg
        viewBox="0 0 100 100"
        className=''
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="circlePath"
          d="M 10, 50 a 40,40 0 1,1 80,0 40,40 0 1,1 -80,0"
          fill='none'
        />
        <text>
          <textPath href="#circlePath" className='font-bold text-xs'>
            EXPERIENCE THE NATURAL FRESHNESS
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default RotatingCircleText;