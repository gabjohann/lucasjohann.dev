export function Home() {
  return (
    <main className=" flex flex-grow items-center pl-80">
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl font-bold text-white">Lucas Gabriel</h1>
        <p id="description" className="font-roboto font-normal">
          Desenvolvedor Front-end | Web & Mobile
        </p>
        <ul className="flex gap-5 text-xl font-medium text-white">
          <li>
            <a href="/projetos">Projetos</a>
          </li>
          <li>
            <a href="/tecnologias">Tecnologias</a>
          </li>
        </ul>
      </div>
    </main>
  )
}
