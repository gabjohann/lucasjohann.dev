import { BriefcaseBusiness } from 'lucide-react'
import workImage from '../assets/work.svg'

interface ExperienceProps {
  companyName: string
  timeWorked: string
  description: string
}

export function Experience() {
  const experiences: ExperienceProps[] = [
    {
      companyName: 'No One',
      timeWorked: '6 meses',
      description:
        'Atuo como analista de TI, gerenciando o Google Workspace dos colaboradores e oferecendo suporte com relação às ferramentas utilizadas no dia a dia de trabalho.',
    },

    {
      companyName: 'Teagá',
      timeWorked: '1 ano e 6 meses - 2022 à 2024',
      description:
        'Atuei no desenvolvimento de uma plataforma de fintech, utilizando Next como framework web e Flutter para o desenvolvimento mobile.',
    },
    {
      companyName: 'Exatron',
      timeWorked: '1 ano - 2021 à 2022',
      description:
        'Desenvolvi aplicativos para testes de produtos utilizando Flutter e adicionei novas funcionalidades ao aplicativo já publicado. Realizei análise de dados a fim de encontrar o melhor algoritmo entre os desenvolvidos. Criei protocolos de testes e realizei testes de hardware e software.',
    },
  ]

  return (
    <div className="flex flex-grow items-center justify-evenly px-24">
      <div className="w-96 overflow-hidden rounded-md">
        <img src={workImage} alt="" />
      </div>

      <div className="h-120 max-w-2xl pt-4">
        <ol className="relative border-l border-gray-200">
          {experiences.map((experience, index) => (
            <li key={experience.companyName} className="mb-10 ml-6">
              <div className="absolute -left-5 rounded-full bg-gray-800 p-2">
                <span className="flex h-6 w-6 items-center justify-center">
                  <BriefcaseBusiness width={20} className="text-purple-200" />
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white">
                {experience.companyName}
                {index === 0 && (
                  <span className="ml-3 mr-2 rounded border border-white/40 px-2.5 py-1 text-sm font-medium text-pink-200 ">
                    Atual
                  </span>
                )}
              </h3>
              <time className="mb-3 block text-sm font-normal leading-none text-gray-500">
                {experience.timeWorked}
              </time>
              <p className="text-base font-normal text-gray-400">
                {experience.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
