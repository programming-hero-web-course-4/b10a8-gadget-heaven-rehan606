import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
import GadgetCards from './components/GadgetCards.jsx';
import GadgetDetails from './components/GadgetDetails.jsx';
import CartList from './components/CartList.jsx';
import Contact from './components/Contact.jsx';
import Dashboard from './components/Dashboard.jsx';
import CartContent from './components/CartContent.jsx';
import Statistics from './components/Statistics.jsx';

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
      },
      {
        path: '/gadget/:id',
        element: <GadgetDetails></GadgetDetails>,
        loader: ()=> fetch('../gadget.json'),
      },
      
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children:[
          {
            path: 'cart',
            element: <CartContent></CartContent> ,
          }
        ]
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      }
    ]
  },
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
