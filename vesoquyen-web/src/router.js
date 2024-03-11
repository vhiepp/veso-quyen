import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import NotFound from './pages/errors/NotFound'
import MainLayout from './layouts/MainLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
  {
    path: 'dang-nhap',
    element: <SignIn />,
  },
])
