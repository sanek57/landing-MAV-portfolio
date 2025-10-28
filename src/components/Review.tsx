import React from 'react'

// components
import { ReviewCard } from './ReviewCard'

// constants
import { reviews } from '../constants'

// node modules
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

// register GSAP plugin
gsap.registerPlugin(useGSAP, ScrollTrigger)

export const Review = () => {

  useGSAP(() => {
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: '.scrub-slide',
        start: '-200% 80%',
        end: '400% 80%',
        scrub: true,
        markers: true,
      },
      x: -1000
    })
  })

  return (
    <section
      className='section overflow-hidden'
      id='reviews'
    >
      <div className='container'>
        <h2 className='headline-2 mb-8 reveal-up'>What our customers say</h2>

        <div className='flex items-stretch gap-3 w-fit scrub-slide'>
          {reviews.map(item => (
            <ReviewCard
              key={item.name}
              name={item.name}
              content={item.content}
              company={item.company}
              imgSrc={item.imgSrc}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
