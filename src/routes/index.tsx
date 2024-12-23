import { createBrowserRouter } from 'react-router-dom'

import { App } from '../app'
import { About } from './about'
import { Home } from './home'
import { Experience } from './experience'
import { ErrorPage } from './errorPage'
import { Technologies } from './technologies'
import { Certificates } from './certificates'
import { Projects } from './projects'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/experience',
        element: <Experience />,
      },
      {
        path: '/technologies',
        element: <Technologies />,
      },
      {
        path: '/certificates',
        element: <Certificates />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
    ],
  },
])

export default router
