export interface NavItem {
  label: string
  link: string
  className: string
  ref?: React.RefObject<HTMLAnchorElement | null>
}
