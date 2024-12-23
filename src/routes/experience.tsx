import { BriefcaseBusiness } from 'lucide-react'
import workImage from '../assets/work.svg'
import { differenceInMonths } from 'date-fns'

interface ExperienceProps {
  companyName: string
  timeWorked: () => string
  description: string
  isActualWork?: boolean
}

function calculateTimeWorked(startDate: string, endDate?: string) {
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : new Date()

  const totalMonths = differenceInMonths(end, start)
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  const yearString = years > 0 ? `${years} ano${years > 1 ? 's' : ''}` : ''
  const monthString = months > 0 ? `${months} mês${months > 1 ? 'es' : ''}` : ''

  return (
    [yearString, monthString].filter(Boolean).join(' e ') || 'Menos de um mês'
  )
}

export function Experience() {
  const experiences: ExperienceProps[] = [
    {
      companyName: 'Senac',
      timeWorked: () => calculateTimeWorked('2024-09-09'),
      description:
        'Auto como professor de desenvolvimento front-end e lógica de programação.',
      isActualWork: true,
    },
    {
      companyName: 'No One',
      timeWorked: () => calculateTimeWorked('2024-05-06'),
      description:
        'Atuo como analista de TI, gerenciando o Google Workspace dos colaboradores e oferecendo suporte com relação às ferramentas utilizadas no dia a dia de trabalho.',
      isActualWork: true,
    },
    {
      companyName: 'Teagá',
      timeWorked: () => calculateTimeWorked('2022-09-05', '2024-02-20'),
      description:
        'Atuei no desenvolvimento de uma plataforma de fintech, utilizando Next como framework web e Flutter para o desenvolvimento mobile.',
    },
    {
      companyName: 'Exatron',
      timeWorked: () => calculateTimeWorked('2021-11-01', '2022-06-04'),
      description:
        'Desenvolvi aplicativos para testes de produtos utilizando Flutter e adicionei novas funcionalidades ao aplicativo já publicado. Realizei análise de dados a fim de encontrar o melhor algoritmo entre os desenvolvidos. Criei protocolos de testes e realizei testes de hardware e software.',
    },
  ]

  return (
    <div className="flex max-w-7xl flex-grow items-center justify-evenly md:px-10">
      <div className="mr-20 hidden rounded-md md:mr-10 md:block">
        <img className="h-48 object-cover" src={workImage} alt="" />
      </div>

      <div className="ml-10 max-w-xl lg:ml-0">
        <ol className="relative border-l border-gray-200">
          {experiences.map(
            ({ companyName, timeWorked, description, isActualWork }) => (
              <li key={companyName} className="mb-10 ml-6">
                <div className="absolute -left-5 rounded-full bg-gray-800 p-2">
                  <span className="flex h-6 w-6 items-center justify-center">
                    <BriefcaseBusiness width={20} className="text-purple-200" />
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {companyName}
                  {isActualWork === true && (
                    <span className="ml-3 mr-2 rounded border border-white/40 px-2.5 py-1 text-sm font-medium text-pink-200 ">
                      Atual
                    </span>
                  )}
                </h3>
                <time className="mb-3 block text-sm font-normal leading-none text-gray-500">
                  {timeWorked()}
                </time>
                <p className="text-sm font-normal text-gray-400 md:text-base">
                  {description}
                </p>
              </li>
            ),
          )}
        </ol>
      </div>
    </div>
  )
}
