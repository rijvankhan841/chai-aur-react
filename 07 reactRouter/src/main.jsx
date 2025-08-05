import React from "react"
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/home.jsx'
import About from './components/About/about.jsx'
import Contact from "./components/Contact/contact.jsx"
import User from "./components/User/User.jsx"

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>

//       }

//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:userid' element={<User/>} />
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
