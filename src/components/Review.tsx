import React from 'react'

// components
import { ReviewCard } from './ReviewCard'

// constants
import { reviews } from '../constants'

export const Review = () => {
  return (
    <section
      className='section overflow-hidden'
      id='reviews'
    >
      <div className='container'>
        <h2 className='headline-2 mb-8'>What our customers say</h2>

        <div className='flex items-stretch gap-3 w-fit'>
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
