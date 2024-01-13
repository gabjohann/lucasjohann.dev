import firstFlutterProject from '../../../assets/article-cover/first-flutter-project.webp'

interface ArticleCardProps {
  imgSrc: string
  title: string
  url: string
}

export function ArticleCard() {
  const articles: ArticleCardProps[] = [
    {
      title: 'Como criar seu primeiro projeto em Flutter',
      url: 'https://blog.rocketseat.com.br/primeiro-projeto-flutter/',
      imgSrc: firstFlutterProject,
    },
  ]

  return (
    <>
      {articles.map((article) => (
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          key={article.title}
          className="flex w-72 flex-col overflow-hidden rounded-md bg-neutral-50 text-white drop-shadow-lg"
        >
          <div className="mb-4 shadow-xl">
            <img src={article.imgSrc} alt="" className="object-cover" />
          </div>
          <div className="m-4 flex flex-col gap-4">
            <h1 className="text-center font-baloo text-xl text-slate-800">
              {article.title}
            </h1>
          </div>
        </a>
      ))}
    </>
  )
}
