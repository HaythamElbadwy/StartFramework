import { useState } from 'react'

import './App.css'
import About from './Components/About/About'
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index:true,
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "portfolio",
          element: <Portfolio />
        },
        {
          path: "contact",
          element: <Contact />
        },

      ]
    }
  ])

  return <>

    <RouterProvider router={routes} />


  </>

}

export default App
