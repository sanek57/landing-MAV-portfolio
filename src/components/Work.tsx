import React from 'react'
import { works } from '../constants'
import { ProjectCard } from './ProjectCard'

export const Work = () => {
  return (
    <section
      className='section'
      id='work'
    >
      <div className='container'>
        <h2 className='headline-2 mb-8 reveal-up'>My portfolio highlights</h2>

        <div className='grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]'>
          {works.map(item => (
            <ProjectCard
              key={item.title}
              imgSrc={item.imgSrc}
              title={item.title}
              tags={item.tags}
              projectLink={item.projectLink}
              classes='reveal-up'
            />
          ))}
        </div>
      </div>
    </section>
  )
}
