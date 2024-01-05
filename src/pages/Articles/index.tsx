import { ArticleCard } from './components/ArticleCard'

export function Articles() {
  return (
    <main className="flex flex-grow flex-col items-center">
      <div className="flex items-center justify-center text-3xl text-white">
        <h1>Artigos Publicados</h1>
      </div>
      <div className="grid grid-cols-3 gap-8 gap-y-6 pt-8">
        <ArticleCard />
      </div>
    </main>
  )
}
