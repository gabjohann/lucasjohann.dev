export interface ProjectCardProps {
  title: string
  imageUrl: string
  alt: string
  repoUrl: string
  description: string
  deployUrl?: string
  technologies: string[]
}

export function ProjectCard({
  title,
  imageUrl,
  alt,
  repoUrl,
  description,
  deployUrl,
  technologies,
}: ProjectCardProps) {
  return (
    <div className="w-80 cursor-pointer overflow-hidden rounded-lg bg-gray-300">
      <img src={imageUrl} alt={alt} />
      <div className="flex flex-col gap-3 p-4">
        <h1 className="text-lg font-medium underline">{title}</h1>
        <p className="text-sm">{description}</p>

        <div className="flex items-center justify-start gap-3 py-2 text-xs font-medium underline">
          {deployUrl && (
            <a
              href={deployUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110"
            >
              Deploy
            </a>
          )}
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110"
          >
            Repositório
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-purple-400 px-3 py-1.5 text-xs font-medium text-gray-100"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
