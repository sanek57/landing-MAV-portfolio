import React from 'react'
import { skillItem } from '../constants'
import { SkillCard } from './SkillCard'

export const Skill = () => {
  return (
    <section className='section'>
      <div className='container'>
        <h2 className='headline-2'>Essential Tools I use</h2>

        <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch]'>
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        {/* auto-fill - растягивает до полной упаковки */}
        <div className='grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]'>
          {skillItem.map(item => (
            <SkillCard
              key={item.label}
              label={item.label}
              imgSrc={item.imgSrc}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
