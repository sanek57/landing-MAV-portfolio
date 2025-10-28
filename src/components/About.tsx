import React from 'react'
import { aboutItems } from '../constants'

// components
import Logo from '../assets/logo.svg'

// constants

export const About = () => {
  return (
    <section
      id='about'
      className='section'
    >
      <div className='container'>
        <div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up'>
          <p className='text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]'>
            Welcome! I&apos;m Henry, a professional web developer with a knack
            for crafting visually stunning and highly functional websites.
            Combining creativity and technical expertise. I transform your
            vision into digital masterpiece that excels in both appearance and
            performance.
          </p>
          <div className='flex flex-wrap items-center gap-4 md:gap-7'>
            {aboutItems.map(item => (
              <div key={item.label}>
                <div className='flex items-center md:mb-2'>
                  <span className='text-2xl font-bold md:text-4xl'>
                    {item.number}
                  </span>
                  <span className='text-sky-400 font-semibold md:text-3xl'>
                    +
                  </span>
                </div>
                <p className='text-sm text-zinc-400'>{item.label}</p>
              </div>
            ))}

            <img
              src={Logo}
              alt=''
              width={30}
              height={30}
              className='ml-auto md:w-10 md:h-10'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
