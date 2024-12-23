import { Outlet } from 'react-router-dom'

import { Footer } from './components/footer'
import { Header } from './components/header'

export function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-grow items-center justify-center pt-[84px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
