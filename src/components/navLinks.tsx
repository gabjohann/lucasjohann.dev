import { Link } from 'react-router-dom'
import { MenuItemProps, menuItems } from '../utils/navLinksTypes'

export function NavLinks() {
  return (
    <>
      {menuItems.map(({ title, link }: MenuItemProps, index: number) => (
        <li key={index}>
          <Link
            to={link}
            className="text-white hover:font-semibold hover:text-purple-300"
          >
            {title}
          </Link>
        </li>
      ))}
    </>
  )
}
