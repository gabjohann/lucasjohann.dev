import { formatDistanceToNow } from 'date-fns'

import profileImage from '../../assets/profile.jpg'

export function About() {
  const currentDate = formatDistanceToNow(new Date(2002, 3, 19))
  const splitDate = currentDate.split(' ')
  const age = splitDate[1]

  return (
    <main className="flex flex-grow items-center justify-evenly px-24">
      <div className="overflow-hidden rounded-md bg-indigo-300">
        <img className="h-[440px] object-cover" src={profileImage} alt="" />
      </div>

      <div className="max-w-xl pt-4 font-manrope text-lg leading-relaxed text-neutral-300/80">
        <p id="about">
          Olá, eu sou Lucas Gabriel, desenvolvedor de software de
          <strong> {age} anos </strong>
          apaixonado pelo que faz.
        </p>

        <p id="about" className="mt-6">
          Minha jornada na programação começou aos <strong>11 anos</strong>,
          quando descobri a eletrônica, e desde então, tenho explorado esse
          fascinante mundo.
        </p>
        <p id="about" className="my-4">
          Ao longo dos anos, encontrei minha verdadeira paixão no
          desenvolvimento front-end. Atualmente, estou focado em aprimorar
          minhas habilidades em
          <strong> React</strong> e <strong> React Native</strong>, para criar
          experiências digitais envolventes e funcionais.
        </p>
        <p id="about">
          Se você está em busca de um desenvolvedor comprometido, apaixonado e
          em constante evolução, estou pronto para contribuir em projetos
          desafiadores e agregar valor com meu conjunto de habilidades
          diversificadas.
        </p>
      </div>
    </main>
  )
}
