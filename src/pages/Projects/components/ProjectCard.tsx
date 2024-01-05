interface ProjectCardProps {
  imgSrc: string
  title: string
  description: string
  labels: string[]
}
export function ProjectCard() {
  const projects: ProjectCardProps[] = [
    {
      imgSrc:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
      title: 'Ignite Feed',
      description: 'description',
      labels: ['React', 'Tailwind'],
    },
  ]
  return (
    <>
      {projects.map((project) => (
        <div
          key={project.title}
          className="flex w-64 flex-col overflow-hidden rounded-md bg-neutral-50 text-white drop-shadow-lg"
        >
          <div className="mb-4 shadow-xl">
            <img src={project.imgSrc} alt="" className="object-cover" />
          </div>
          <div className="m-4 flex flex-col gap-4">
            <h1 className="font-baloo text-xl text-slate-800">
              {project.title}
            </h1>
            <p className="-mt-2 font-roboto text-sm text-slate-600">
              {project.description}
            </p>
            <div className="flex flex-row items-center gap-4 pl-2">
              {project.labels &&
                project.labels.map((label, index) => (
                  <p
                    key={index}
                    className="rounded-md bg-sky-100 px-3 py-1 font-roboto text-base text-draculaPink "
                  >
                    {label}
                  </p>
                ))}
            </div>

            <button className="mt-2 rounded-md border border-slate-300 py-2 font-bold tracking-wide text-gray-800 hover:bg-slate-200">
              Explorar
            </button>
          </div>
        </div>
      ))}
    </>
  )
}
