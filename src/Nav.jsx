import { NavLink } from "react-router-dom";


const Nav = () => {

   const links = <>
   
       <li><NavLink to="/">Home</NavLink></li>
       <li><NavLink to="/medicine">Medicine</NavLink></li>
       <li><NavLink to="/category">All Category</NavLink></li>
       <li><NavLink to="/history">Medicine History</NavLink></li>
       <li><NavLink to="/about">About</NavLink></li>
       <li><NavLink to="/info">Medi Info</NavLink></li>
   
   
   
   </>



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
                  <a className="  text-green-700 font-bold text-xl">Medicine <span className="  text-blue-950">Galaxy</span></a>
                  </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1">
                     {links}
                  </ul>
                </div>
                <div className="navbar-end">
                  <a className="btn text-white  bg-blue-950">login</a>
                </div>
              </div>
              






                
            </div>
            
        </div>
    );
};

export default Nav;