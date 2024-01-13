import { Helmet } from 'react-helmet-async'

import underConstructionImg from '../../assets/under_construction.svg'

export function Projects() {
  return (
    <>
      <Helmet title="Projetos" />

      <main className="flex flex-grow flex-col items-center">
        <div className="flex items-center justify-center text-3xl text-white">
          <h1>Meu Portfólio</h1>
        </div>
        <div className="flex w-1/4 flex-1">
          <img src={underConstructionImg} alt="" className="animate-pulse" />
        </div>
        {/* <div className="grid grid-cols-4 gap-8 gap-y-6 pt-8">
         <ProjectCard />
      </div>  */}
      </main>
    </>
  )
}
