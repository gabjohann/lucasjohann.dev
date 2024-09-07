import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { title: 'Projetos', link: '' },
    { title: 'Tecnologias', link: '' },
    { title: 'Artigos', link: '' },
    { title: 'Experiências', link: '' },
    { title: 'Sobre', link: '' },
  ]

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
          <li>About</li>
          <li>Contact</li>
          <li>Help</li>
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
          {menuItems.map(({ title, link }, index) => (
            <li key={index} className="py-4 text-left">
              <a
                href={link}
                className="block rounded-md px-10 text-lg text-white hover:font-semibold hover:text-purple-300"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
