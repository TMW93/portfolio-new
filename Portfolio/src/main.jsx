import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Error from './pages/Error.jsx'
import AboutMe from './pages/About-Me.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: '/about-me',
        element: <AboutMe/>,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router} />
);