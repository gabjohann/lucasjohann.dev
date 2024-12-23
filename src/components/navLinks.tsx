import { Link, useLocation } from 'react-router-dom'
import { MenuItemProps, menuItems } from '../utils/navLinksTypes'

export function NavLinks() {
  const location = useLocation() // Obtém a localização atual

  return (
    <>
      {menuItems.map(({ title, link }: MenuItemProps, index: number) => {
        const isActive = location.pathname === link

        return (
          <li key={index}>
            <Link
              to={link}
              className={`relative text-white ${isActive ? 'font-semibold text-purple-300' : 'hover:text-purple-300'} transition-colors`}
            >
              {title}
              {isActive && (
                <span className="absolute bottom-0 left-0 top-5 block h-[1px] w-full rounded-full bg-purple-300 transition-transform" />
              )}
            </Link>
          </li>
        )
      })}
    </>
  )
}
