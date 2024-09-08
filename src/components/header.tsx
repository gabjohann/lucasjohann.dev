import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { NavLinks } from './navLinks'
import { MinNavLinks } from './minNavLinks'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const currentRoute = useLocation()

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="relative w-screen">
      {/* Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-10 bg-black/20 backdrop-blur-sm" />
      )}

      {/* Navbar */}
      <div className="relative flex w-screen items-center justify-between px-4 py-7 lg:px-24">
        <a href="/" className="font-baloo text-lg text-white/60" id="logo">
          &lt;johann_dev/&gt;
        </a>

        <ul className="hidden items-center space-x-5 md:flex">
          {currentRoute.pathname !== '/' ? <NavLinks /> : <MinNavLinks />}
        </ul>

        {/* Hamburger menu */}
        <button
          className="absolute right-4 top-1/2 z-30 -translate-y-1/2 transform md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="text-white" strokeWidth={1.5} />
          ) : (
            <Menu className="text-white" strokeWidth={1.5} />
          )}
        </button>

        {/* Menu items */}
        <ul
          className={`absolute right-0 top-0 z-20 flex w-3/6 flex-col items-start rounded-bl-md border-b-2 border-l-2 border-white/15 bg-zinc-950/70 pb-2 pt-12 duration-150 ${
            isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
          }`}
        >
          {currentRoute.pathname !== '/' ? <NavLinks /> : <MinNavLinks />}
        </ul>
      </div>
    </header>
  )
}
