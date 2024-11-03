import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
import GadgetCards from './components/GadgetCards.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('../category.json'),

        children:[
          {
            path: '/',
            element: <GadgetCards></GadgetCards>,
            loader: ()=> fetch('../gadget.json'),
          },
          {
            path: '/category/:category',
            element: <GadgetCards></GadgetCards>,
            loader: ()=> fetch('../gadget.json'),
          }
        ]
      }
    ]
  },
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
