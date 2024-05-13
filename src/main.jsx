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
import History from './History/History';
import Avi from './History/Avi';
import Hip from './History/Hip';
import Cla from './History/Cla';
import And from './History/And';
import Edw from './History/Edw';
import Gallery from './COM/Gallery';
import Blog from './COM/Blog';
import HUB from './Button compo/HUB';
import Treatment from './Button compo/Treatment';
import AboutDetails from './Home content/AboutDetails';
import GO from './Home content/GO';
import KitSHop from './MediShop/KitSHop';



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
        path: "/history",
        element: <History></History> ,

      },
      {
        path: "/avi",
        element: <Avi></Avi> ,

      },
      {
        path: "/hip",
        element: <Hip></Hip> ,

      },
      {
        path: "/cla",
        element: <Cla></Cla> ,

      },
      {
        path: "/and",
        element:  <And></And> ,

      },
      {
        path: "/edw",
        element:  <Edw></Edw> ,

      },
      {
        path: "/gallery",
        element:   <Gallery></Gallery>,

      },
      {
        path: "/blog",
        element:   <Blog></Blog>,

      },
      {
        path: "/hub",
        element:   <HUB></HUB>,

      },
      {
        path: "/treat",
        element:   <Treatment></Treatment>,

      },
      {
        path: "/AD",
        element:   <AboutDetails></AboutDetails>,

      },
      {
        path: "/GO",
        element:    <GO></GO> ,

      },
      {
        path: "/kit",
        element: <KitSHop></KitSHop>,

      },

    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
