import { Outlet } from 'react-router-dom'

import { Footer } from './components/footer'
import { Header } from './components/header'

export function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
