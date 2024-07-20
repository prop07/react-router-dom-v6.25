import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import Root from './routes/root'
import Error404 from './error404'
import Admin from './routes/admin'
import Contact from './pages/contacts'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, //layout
    errorElement: <Error404 />,
    children: [
      {
        index: true,  //base page
        element: <div>Home</div>,
        handle: { title: "Home" },
      },
      {
        path: "contacts",
        element: <Contact />,
        handle: { title: "Contacts" }
      },
      {
        path: "contacts/*",
        element: <div>All contacts path</div>,
        handle: { title: "Contact Details" },
      },
    ]
  },
  {
    path: "/admin",
    element: <Admin />, // admin layout
    errorElement: <Error404 />,
    children: [
      {
        index: true, //base page
        element: <div>admin</div>,
        handle: { title: "admin" },

      },
      {
        path: "userdetails/:id",
        element: <div>user details Page</div>,
      },
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
