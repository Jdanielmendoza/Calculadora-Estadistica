import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter , RouterProvider} from "react-router-dom"
import About from './Pages/About/About'
import Glosario from './Pages/Glosario/Glosario'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
  },
  {
    path:"/AcercaDe",
    element:<About/>
  },
  {
    path:"/Glosario",
    element: <Glosario/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
