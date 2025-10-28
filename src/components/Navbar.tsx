import { useEffect, useMemo, useRef, type FC } from 'react'

// constants
import type { NavItem } from '../constants'

interface NavbarProps {
  navOpen: boolean
}

export const Navbar: FC<NavbarProps> = ({ navOpen }) => {
  // активная ссылка
  const activeLink = useRef<HTMLAnchorElement>(null)
  // бокс подсветки активной ссылки
  const activeBox = useRef<HTMLDivElement>(null)

  const initActiveBox = () => {
    if (activeBox.current) {
      activeBox.current.style.top = activeLink.current?.offsetTop + 'px'
      activeBox.current.style.left = activeLink.current?.offsetLeft + 'px'

      activeBox.current.style.width = activeLink.current?.offsetWidth + 'px'
      activeBox.current.style.height = activeLink.current?.offsetHeight + 'px'
    }
  }

  useEffect(() => {
    initActiveBox()
  }, [])
  window.addEventListener('resize', initActiveBox)

  const activeCurrentLink = (
    e: React.MouseEvent<HTMLAnchorElement> | undefined
  ) => {
    activeLink.current?.classList.remove('active')

    e?.currentTarget.classList.add('active')

    activeLink.current = e?.currentTarget as HTMLAnchorElement

    if (activeBox.current) {
      activeBox.current.style.top = e?.currentTarget?.offsetTop + 'px'
      activeBox.current.style.left = e?.currentTarget?.offsetLeft + 'px'

      activeBox.current.style.width = e?.currentTarget?.offsetWidth + 'px'
      activeBox.current.style.height = e?.currentTarget?.offsetHeight + 'px'
    }
  }

  const navItems = useMemo(() => {
    const items: NavItem[] = [
      {
        label: 'Home',
        link: '#home',
        className: 'nav-link active',
        ref: activeLink,
      },
      {
        label: 'About',
        link: '#about',
        className: 'nav-link',
      },
      {
        label: 'Work',
        link: '#work',
        className: 'nav-link',
      },
      {
        label: 'Reviews',
        link: '#reviews',
        className: 'nav-link',
      },
      {
        label: 'Contact',
        link: '#contact',
        className: 'nav-link md:hidden',
      },
    ]

    return items
  }, [activeLink])

  return (
    <nav className={`navbar ${navOpen ? 'active' : ''}`}>
      {navItems.map((item: NavItem) => (
        <a
          key={item.link}
          href={item.link}
          className={item.className}
          ref={item?.ref}
          onClick={activeCurrentLink}
        >
          {item.label}
        </a>
      ))}

      <div
        className='active-box'
        ref={activeBox}
      ></div>
    </nav>
  )
}
