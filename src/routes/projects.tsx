import nodeExpress from '../assets/nodejs-express.jpg'
import designSystem from '../assets/design-system.jpg'

import { ProjectCard, ProjectCardProps } from '../components/projectCard'

const projects: ProjectCardProps[] = [
  {
    title: 'My Contacts API',
    imageUrl: nodeExpress,
    alt: 'Express and Node.JS',
    repoUrl: 'https://github.com/gabjohann/my-contacts',
    description:
      'Uma API de gerenciamento de contatos desenvolvida com Express e PostgreSQL, gerenciado em um container Docker. O projeto seguiu a estruturação do Repository Pattern.',
    technologies: ['Node.JS', 'Express', 'JavaScript', 'Docker', 'PostgreSQL'],
  },
  {
    title: 'Ignite Design System',
    imageUrl: designSystem,
    alt: 'Design System',
    repoUrl: 'https://github.com/gabjohann/ignite-design-system',
    description:
      'Biblioteca de componentes utilizadas no Ignite,  desenvolvida utilizando princípios como CI/CD, criação e publicação de pacotes no npm versionamento e release de projeto.',
    deployUrl:
      'https://gabjohann.github.io/ignite-design-system/?path=/docs/home--docs',
    technologies: ['Storybook', 'React', 'TypeScript', 'Stitches'],
  },
]

export function Projects() {
  return (
    <div className="flex flex-col">
      <h1 className="pb-10 text-center text-3xl text-white">Projetos</h1>

      <div className="grid gap-4 self-center px-8 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            imageUrl={project.imageUrl}
            alt={project.alt}
            repoUrl={project.repoUrl}
            description={project.description}
            deployUrl={project.deployUrl}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  )
}
