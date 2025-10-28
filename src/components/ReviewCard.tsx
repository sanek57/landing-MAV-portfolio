import React, { useMemo, type FC } from 'react'

interface ReviewCardProps {
  content: string
  name: string
  imgSrc: string
  company: string
  classes?: string
}

export const ReviewCard: FC<ReviewCardProps> = ({
  content,
  name,
  imgSrc,
  company,
  classes,
}) => {
  const ratings = useMemo(() => {
    const rat = new Array(5)
    rat.fill({
      icon: 'star',
    })

    return rat
  }, [])

  return (
    <div className='bg-zinc-800 p-5 rounded-xl min-w-[320px] flex-col lg:min-w-[420px]'>
      <div className='flex items-center gap-1 mb-3'>
        {ratings.map((r, i) => (
          <span
            key={i}
            className='material-symbols-rounded text-yellow-300 text-[18px]'
          >
            {r.icon}
          </span>
        ))}
      </div>

      <p className='text-zinc-400 mb-8'>{content}</p>

      <div className='flex items-center gap-2 mt-auto'>
        <figure className='img-box rounded-lg'>
          <img
            src={imgSrc}
            alt={name}
            width={44}
            height={44}
            loading='lazy'
            className='img-cover'
          />
        </figure>

        <div>
          <p>{name}</p>
          <p className='text-xs text-zinc-400 tracking-wider'>{company}</p>
        </div>
      </div>
    </div>
  )
}
