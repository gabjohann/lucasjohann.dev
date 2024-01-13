import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { LightBulbIcon } from '@heroicons/react/24/outline'

import html from '../../assets/icons/html.svg'
import css from '../../assets/icons/css.svg'
import javascript from '../../assets/icons/javascript.svg'
import next from '../../assets/icons/next.svg'
import radix from '../../assets/icons/radix.svg'
import react from '../../assets/icons/react.svg'
import styledComponents from '../../assets/icons/styled-components.svg'
import tailwindcss from '../../assets/icons/tailwindcss.svg'
import typescript from '../../assets/icons/typescript.svg'
import storybook from '../../assets/icons/storybook.svg'
import shadcnUI from '../../assets/icons/shadcnui.svg'
import docker from '../../assets/icons/docker.svg'
import mysql from '../../assets/icons/mysql.svg'

interface TechnologiesCardProps {
  imgSrc: string
  description: string
}

export function Technologies() {
  const technologies: TechnologiesCardProps[] = [
    {
      imgSrc: html,
      description:
        'HTML é uma linguagem de marcação utilizada para criação de páginas web por meio de elementos.',
    },
    {
      imgSrc: css,
      description:
        'CSS é uma linguagem de marcação, assim como o HTML, mas visa a estilização da página, também conhecido como estilização em cascata.',
    },
    {
      imgSrc: javascript,
      description:
        'JavaScript é uma linguagem de programação interpretada cujo objetivo é trazer maior iteratividade as páginas, como animações, atualizações em tempo real, etc.',
    },

    {
      imgSrc: react,
      description:
        'React JS é uma biblioteca JavaScript que visa a criação de interfaces web a partir de componentes.',
    },
    {
      imgSrc: next,
      description:
        'Next.JS é um framework para React que traz como principal funcionalidade o roteamento e o SSR (server side rendering/ renderização pelo lado do servidor).',
    },
    {
      imgSrc: typescript,
      description:
        'TypeScript é um superconjunto sintático ao JavaScript utilizado para adicionar tipagem ao JS puro.',
    },
    {
      imgSrc: tailwindcss,
      description:
        'Tailwind CSS é um framework CSS que fornece classes declarativas pré-definidas (utility-first).',
    },
    {
      imgSrc: styledComponents,
      description:
        'Styled Components é uma biblioteca CSS in JS, seu principal objetivo era a criação de componentes reaproveitáveis tanto em comportamento/estado quanto em estilização.',
    },
    {
      imgSrc: storybook,
      description:
        'Storybook é uma ferramenta para documentação (style guide) e teste de componentes.',
    },
    {
      imgSrc: radix,
      description:
        'Radix UI é uma biblioteca de componentes sem estilização prévia e focada em acessibilidade.',
    },
    {
      imgSrc: shadcnUI,
      description:
        'Shadcn UI é uma biblioteca de componentes reutilizáveis com base no Tailwind CSS e Radix UI.',
    },
    {
      imgSrc: docker,
      description: 'Docker é uma ferramenta de orquestração de containers.',
    },
    {
      imgSrc: mysql,
      description:
        'MySQL é um sistema de gerenciamento de banco de dados relacionais.',
    },
  ]

  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  return (
    <>
      <Helmet title="Tecnologias" />

      <main className="flex flex-grow flex-col items-center px-12">
        <div className="flex items-center justify-center text-3xl text-white">
          <h1>Tecnologias</h1>
        </div>

        <div className="grid grid-cols-2 justify-items-end gap-20">
          <div className="w-max p-4">
            <div className="grid cursor-pointer grid-cols-4 gap-8 gap-y-6 pt-8">
              {technologies.map((technology) => (
                <div
                  key={technology.imgSrc}
                  className="hover:blur-xs flex w-[76px] items-center rounded-md bg-gray-700 px-2 py-2 hover:scale-110"
                  onMouseEnter={() => setHoveredTech(technology.description)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <img src={technology.imgSrc} alt="" width={60} />
                </div>
              ))}
            </div>
          </div>

          <div id="technologies" className="p-4 pt-12 text-lg text-white/50">
            {hoveredTech !== null ? (
              <p>{hoveredTech}</p>
            ) : (
              <div className="flex items-center gap-2">
                <LightBulbIcon className="h-7 w-7 text-amber-300" />
                <p>Passe o cursor sobre o card para saber mais!</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
