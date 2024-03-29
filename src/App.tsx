import { RouterProvider } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | lucasjohnn.dev" />

      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
