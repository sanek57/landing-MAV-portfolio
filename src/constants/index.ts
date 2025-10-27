export interface NavItem {
  label: string
  link: string
  className: string
  ref?: React.RefObject<HTMLAnchorElement | null>
}

export const aboutItems = [
  {
    label: 'Project done',
    number: 45,
  },
  {
    label: 'Years of experience',
    number: 10,
  },
]
