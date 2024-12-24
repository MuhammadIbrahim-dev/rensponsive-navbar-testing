import  StrictMode  from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import Home from './Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './compnents/Header';
import Contact from './compnents/Contact';
import About from './compnents/About';
import Signup from './compnents/Signup';

 const root = ReactDOM.createRoot(document.getElementById('root'));
 let allroutes = createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/contact',
      element:<Contact/>
    },
    {
      path:'/signup',
      element:<Signup/>
    }
  ]
 )


root.render(
  <React.StrictMode>
    <RouterProvider router={allroutes}/>
  </React.StrictMode>
)
