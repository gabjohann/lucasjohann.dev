import { Link } from 'react-router-dom'
import errorImage from '../assets/error.png'

export function ErrorPage() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col">
        <div className="max-w-[500px]">
          <h1 className="pb-6 font-baloo text-5xl font-bold text-gray-200">
            Ops, esta página não foi encontrada
          </h1>
          <p className="font-baloo text-lg font-thin text-purple-50">
            Parece que você se perdeu... Tente voltar para a página anterior ou
            acessar a home.
          </p>

          <div className="mt-14 w-full rounded-full bg-indigo-950 py-5 text-center font-baloo text-sm font-medium uppercase text-gray-100 hover:bg-indigo-800 hover:font-bold">
            <Link to="/">Ir para Home</Link>
          </div>
        </div>
      </div>
      <div>
        <img src={errorImage} alt="" />
      </div>
    </div>
  )
}
