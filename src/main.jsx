import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import Login from './login/Login';
import SignUp from './login/SignUp';
import Medicine from './medicine/Medicine';
import Aspirin from './medicine/Aspirin';
import Ibuprofen from './medicine/Ibuprofen';
import Paracetamol from './medicine/Paracetamol';
import Lisinopril from './medicine/Lisinopril';
import Metformin from './medicine/Metformin';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element:  <Home></Home>,
      },
      {
        path: "/login",
        element:  <Login></Login>,
      },
      {
        path: "/sign",
        element:  <SignUp></SignUp>,
      },
      {
        path: "/medicine",
        element:  <Medicine></Medicine>,

      },
      {
        path: "/aspirin",
        element: <Aspirin></Aspirin>,

      },
      {
        path: "/ibuprofen",
        element: <Ibuprofen></Ibuprofen>,

      },
      {
        path: "/para",
        element: <Paracetamol></Paracetamol>,

      },
      {
        path: "/lis",
        element: <Lisinopril></Lisinopril>,

      },
      {
        path: "/met",
        element: <Metformin></Metformin>,

      },
      
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
