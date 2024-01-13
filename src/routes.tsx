import { createBrowserRouter } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { Articles } from './pages/Articles'
import { Technologies } from './pages/Technologies'
import { About } from './pages/About'
import { Experience } from './pages/Experience'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/projetos',
        element: <Projects />,
      },
      {
        path: '/artigos',
        element: <Articles />,
      },
      {
        path: '/tecnologias',
        element: <Technologies />,
      },
      {
        path: '/experiencias',
        element: <Experience />,
      },
      {
        path: '/sobre',
        element: <About />,
      },
    ],
  },
])
