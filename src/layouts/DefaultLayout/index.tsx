import { Outlet } from 'react-router-dom'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-900 bg-noise bg-cover bg-no-repeat">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
