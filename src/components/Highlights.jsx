import React from 'react'
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from '../utils/animation';
import { watchImg, rightImg } from '../utils';

import VideoCarousel from './VideoCarousel'; 

function Highlights() {

  useGSAP(() => {
    
    animateWithGsap('#title', {
      opacity: 1,
      y: 0,
    });

    animateWithGsap('.link', {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: .1
    });

  },[]);

  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>

      <div className='screen-max-width'>
        
        <div className='flex mb-12 w-full items-end justify-between'>
          <h2 id='title' className='section-heading'>Get the highlights.</h2>
          <div className='flex flex-wrap items-end gap-5'>
            <p className='link'>
              Watch the film
              <img src={watchImg} alt='watch' className='ml-2' />
            </p>
            <p className='link'>
              Watch the event
              <img src={rightImg} alt='watch' className='ml-2' />
            </p>
          </div>
        </div>

        <VideoCarousel />

      </div>

    </section>
  )
}

export default Highlights