import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { Articles } from './pages/Articles'
import { Technologies } from './pages/Technologies'
import { About } from './pages/About'
import { Experience } from './pages/Experience'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/artigos" element={<Articles />} />
        <Route path="/tecnologias" element={<Technologies />} />
        <Route path="/experiencias" element={<Experience />} />
        <Route path="/sobre" element={<About />} />
      </Route>
    </Routes>
  )
}
