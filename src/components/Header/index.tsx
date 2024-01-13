import { useLocation } from 'react-router-dom'

export function Header() {
  const currentRoute = useLocation()

  return (
    <header className="flex items-center justify-between px-24 py-7">
      <a href="/" className="font-baloo text-lg text-white/60" id="logo">
        &lt;johann_dev/&gt;
      </a>

      <nav>
        <ul className="flex items-center gap-12 text-white/50">
          <li className="font-baloo text-base hover:font-bold">
            <a href="/artigos">Artigos</a>
          </li>
          <li className="font-baloo text-base hover:font-bold">
            <a href="/experiencias">Experiências</a>
          </li>

          {currentRoute.pathname !== '/' && (
            <>
              <li className="font-baloo text-base hover:font-bold">
                <a href="/projetos">Projetos</a>
              </li>
              <li className="font-baloo text-base hover:font-bold">
                <a href="/tecnologias">Tecnologias</a>
              </li>
            </>
          )}

          <li className="font-baloo text-base hover:font-bold">
            <a href="/sobre">Sobre</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
