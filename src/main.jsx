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
import Omeprazole from './medicine/Omeprazole';
import Amoxicillin from './medicine/Amoxicillin';
import Atorvastatin from './medicine/Atorvastatin';
import Levothyroxine from './medicine/Levothyroxine';
import Prednisone from './medicine/Prednisone';
import Ciprofloxacin from './medicine/Ciprofloxacin';
import Warfarin from './medicine/Warfarin';
import ALL from './Category/ALL';
import EMedi from './Category/EMedi';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign",
        element: <SignUp></SignUp>,
      },
      {
        path: "/medicine",
        element: <Medicine></Medicine>,

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
      {
        path: "/ome",
        element: <Omeprazole></Omeprazole>,

      },
      {
        path: "/amo",
        element: <Amoxicillin></Amoxicillin> ,

      },
      {
        path: "/ato",
        element: <Atorvastatin></Atorvastatin> ,

      },
      {
        path: "/levo",
        element: <Levothyroxine></Levothyroxine> ,

      },
      {
        path: "/pre",
        element: <Prednisone></Prednisone> ,

      },
      {
        path: "/cip",
        element: <Ciprofloxacin></Ciprofloxacin> ,

      },
      {
        path: "/waf",
        element: <Warfarin></Warfarin> ,

      },
      {
        path: "/all",
        element: <ALL></ALL> ,

      },
      {
        path: "/emedi",
        element: <EMedi></EMedi> ,

      },

    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
