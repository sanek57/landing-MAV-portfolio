import React from 'react'

// components
import { ButtonPrimary } from './Buttons/ButtonPrimary'
import Logo from '../assets/logo.svg'

// constants
import { sitemap, socials } from '../constants'

export const Footer = () => {
  return (
    <footer className='section'>
      <div className='container'>
        <div className='lg:grid lg:grid-cols-2'>
          <div className='mb-10'>
            <h2 className='headline-1 mb-8 lg:max-w-[8ch] reveal-up'>
              Let&apos;s work together today!
            </h2>

            <ButtonPrimary
              href='mailto:sanekofblack@gmail.com'
              label='Start project'
              icon='chevron_right'
              className='reveal-up'
            />
          </div>

          <div className='grid grid-cols-2 gap-4 lg:pl-20'>
            <div>
              <p className='mb-2 reveal-up'>Sitemap</p>
              <ul>
                {sitemap.map(item => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up'
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className='mb-2 reveal-up'>Socials</p>
              <ul>
                {socials.map(item => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target='_blank'
                      className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up'
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-between pt-10 mb-8'>
          <a
            href='/'
            className='logo reveal-up'
          >
            <img
              src={Logo}
              width={40}
              height={40}
              alt='Logo'
            />
          </a>
          <p className='text-zinc-500 text-sm reveal-up'>
            &copy; 2025 <span className='text-zinc-200'>sanekofblack</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
