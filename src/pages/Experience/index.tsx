import { BriefcaseIcon } from '@heroicons/react/24/outline'
import workImage from '../../assets/icons/work.svg'

interface ExperienceProps {
  companyName: string
  timeWorked: string
  description: string
}

export function Experience() {
  const experiences: ExperienceProps[] = [
    {
      companyName: 'Teagá',
      timeWorked: '+ 1 ano',
      description:
        'Atuo no desenvolvimento de uma plataforma de fintech, utilizando Next como framework web e Flutter para o desenvolvimento do aplicativo.',
    },
    {
      companyName: 'Exatron',
      timeWorked: '1 ano - 2021 à 2022',
      description:
        'No período em que estagiei na empresa, utilizando Flutter como principal tecnologia, desenvolvi aplicativos para testes internos, adicionei funcionalidades novas ao aplicativo já publicado. Realizei análise de dados a fim de comparar os resultados dos algoritmos testados, criei protocolos de testes, realizei testes de hardware e software e alguns estudos em cima da plataforma Tuya.',
    },
    {
      companyName: 'Liberato',
      timeWorked: '2 anos - 2019 à 2021',
      description:
        'Durante meu período de estágio realizei pequenas manutenções elétricas e soldas no material didático do curso, monitorias das disciplinas de eletricidade e práticas de instalações e apresentação do curso no período de visitação e durante a Mostra de Ciência e Tecnologia (MOSTRATEC).',
    },
  ]

  return (
    <main className=" flex flex-grow items-center justify-evenly px-24">
      <div className="w-96 overflow-hidden rounded-md">
        <img src={workImage} />
      </div>

      <div className="h-120 max-w-2xl overflow-y-auto px-5 pt-4">
        <ol className="relative border-l border-gray-200">
          {experiences.map((experience, index) => (
            <li key={experience.companyName} className="mb-10 ml-6">
              <div className="absolute -left-5 rounded-full bg-gray-800 p-2">
                <span className="flex h-6 w-6 items-center justify-center">
                  <BriefcaseIcon
                    width={20}
                    height={20}
                    className="text-pink-200"
                  />
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
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
    </main>
  )
}
