import type { FC } from 'react'
import type { ButtonProps } from '.'


export const ButtonOutline: FC<ButtonProps> = ({
  href,
  target,
  label,
  icon,
  className,
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={`btn btn-outline ${className}`}
      >
        {label}

        {icon ? (
          <span className='material-symbols-rounded aria-hidden:true'>
            {icon}
          </span>
        ) : undefined}
      </a>
    )
  } else {
    return (
      <button className={`btn btn-outline ${className}`}>
        {label}

        {icon ? (
          <span className='material-symbols-rounded aria-hidden:true'>
            {icon}
          </span>
        ) : undefined}
      </button>
    )
  }
}
