import { Outlet } from 'react-router-dom'

import { Footer } from './components/footer'
import { Header } from './components/header'

export function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-grow items-center justify-center pt-[84px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
