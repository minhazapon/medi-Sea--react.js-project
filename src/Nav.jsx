import { Link, NavLink } from "react-router-dom";

import MovingComponent from 'react-moving-text'

// ---------------theme
import { useContext, useEffect, useState } from 'react'
import { FireContext } from "./Firebase/AuthContext";
// -----------------------------------------

const Nav = () => {

   const links = <>
   
       <li><NavLink to="/">Home</NavLink></li>
       <li><NavLink to="/medicine">Medicine</NavLink></li>
       <li><NavLink to="/kit">KitShop</NavLink></li>
       <li><NavLink to="/history">Medicine History</NavLink></li>
       <li><NavLink to="/gallery">Gallery</NavLink></li>
       <li><NavLink to="/blog">Blog</NavLink></li>
   
   </>
   

     // ------------------------------------theme
  const [theme, setTheme] = useState('light')
    
  // update state on toggle
  const handleToggle = e => {
    if (e.target.checked) {
      setTheme('synthwave')
    } else {
      setTheme('light')
    }
  }
  
  // set theme state in localStorage on mount & also update localStorage on state change
  useEffect(() => {
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')
  
    // add custom data-theme attribute
    document.querySelector('html').setAttribute('data-theme', localTheme)
  }, [theme])
  // --------------------------------------

    
     const {user, logOut} = useContext(FireContext)


     const handleOut = () =>{
        
      logOut()
      .then( () => {
        console.log('Logout successfully')
      }  ) 
      .catch( error => {
        console.error(error)
      } )


     }







    return (
        <div className=" mt-3"> 


            <div>
                
 
                          <div className="navbar bg-base-100">
                <div className="navbar-start">
                  <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                  </div>
                 
                 <div className=" flex items-center gap-2">
                  <img className=" h-[50px] "
                    src="https://i.ibb.co/C5dY1P5/herbal-capsule-pill-leaf-medicine-logo-icon-illustration-template-capsule-pharmacy-medical-logo-temp.jpg"
                     alt="" />

                  
                  
                   <MovingComponent
                     type="rotateSlowDown"
                     duration="1000ms"
                     delay="0s"
                     direction="normal"
                     timing="ease"
                     iteration="5"
                     fillMode="none">
                   <a className="  text-green-700 font-bold text-xl">Medicine <span className="  text-blue-950">Galaxy</span></a>
                   </MovingComponent>


                  </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1">
                     {links}
                  </ul>
                </div>
                

               

                <div className="navbar-end flex items-center gap-1">

                   {/* ---------------------theme */}
                   <label htmlFor="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer text-gray-100">
                    
                    <span className="relative">
                      <input onChange={handleToggle} id="Toggle1"  type="checkbox" className="hidden peer" />
                      <div className="w-10 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:bg-violet-400"></div>
                      <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"></div>
                    </span>
                    
                    </label>
                    {/* ------------------------------------                      */}

                    { user ? <>
                    
                      <a onClick={handleOut} className="btn text-white  bg-blue-950">SignOut</a>
                    </>:
                      <Link to="/login"  >
                       <a  className="btn text-white  bg-blue-950">SignIn</a>
                      </Link>


                    }



                 

                </div>
              </div>
              






                
            </div>
            
        </div>
    );
};

export default Nav;