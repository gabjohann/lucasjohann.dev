import { Link } from 'react-router-dom'

export function Home() {
  return (
    <main className="flex flex-grow items-center pl-16 md:pl-80">
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl font-bold text-white">Lucas Gabriel</h1>
        <p id="description" className="font-roboto font-normal">
          Desenvolvedor Front-end | Web & Mobile
        </p>
        <ul className="flex gap-5 text-xl font-medium text-white">
          <li className="hover:font-semibold hover:text-purple-300">
            <Link to="/projects">Projetos</Link>
          </li>
          <li className="hover:font-semibold hover:text-purple-300">
            <Link to="/technologies">Tecnologias</Link>
          </li>
        </ul>
      </div>
    </main>
  )
}
