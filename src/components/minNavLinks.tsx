import { Link } from 'react-router-dom'
import { MenuItemProps, minMenuItems } from '../utils/navLinksTypes'

interface MinNavLinkProps {
  handleLinkClick?: () => void
}

export function MinNavLinks({ handleLinkClick }: MinNavLinkProps) {
  return (
    <>
      {minMenuItems.map(({ title, link }: MenuItemProps, index: number) => (
        <li key={index} className="py-4 text-left">
          <Link
            to={link}
            onClick={handleLinkClick}
            className="text-lg text-white hover:font-semibold hover:text-purple-300"
          >
            {title}
          </Link>
        </li>
      ))}
    </>
  )
}
