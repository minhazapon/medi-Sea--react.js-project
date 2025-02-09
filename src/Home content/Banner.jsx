import { Link } from "react-router-dom";

import 'animate.css';






const Banner = () => {
    return (
        <div className=" mb-10 mt-10 ml-5 mr-5">
            <div className=" bg-no-repeat rounded-xl bg-cover  p-10" 
             style={{backgroundImage: 'url(https://img.freepik.com/premium-photo/team-surgeons-performing-brain-surgery-remove-tumor_179755-9762.jpg?w=740)'}} >

               

               <div className=" animate__animated animate__rollIn animate__repeat-2 bg-gradient-to-r from-black p-3 text-white">
               <h1 className=" text-5xl font-bold text-center" >All interest in disease and death is only <br></br> another expression of interest in life.</h1>
               <p className=" mt-5 text-center text-xl">“Always laugh when you can, it is cheap medicine.”<br></br>
                ― Lord Byron</p>
               <div className=" mt-10 flex justify-center items-center gap-10">

                <Link to="/hub" >
                <button className=" btn bg-blue-950 rounded-xl text-white ">Medicine Hub</button>
                </Link>

                <Link to="/treat" >
                <button className=" btn  text-black border-[1px] border-blue-950 ">How to treatment</button>
                </Link>

               </div>
               </div>


 {/* ---------------------------------- kit section   */}

               <div className="  mt-10 flex justify-center items-center  gap-36 flex-col md:flex-row lg:flex-row">

              
                 <div className=" animate__animated animate__flip animate__repeat-2 bg-blue-950 p-5 rounded-xl ">
                    <img className=" h-[100px]" src="https://i.ibb.co/xs3KrXS/meals.png" alt="" />
                    <p className=" text-xl text-white font-bold mt-5">Operation</p>
                 </div>


                 <div className=" animate__animated animate__flip animate__repeat-2 bg-blue-950 p-5 rounded-xl ">
                    <img className=" h-[100px]" src="https://i.ibb.co/SsnH3bf/stethoscope.png" alt="" />
                    <p className=" text-xl text-white font-bold mt-5">Pulse Kit</p>
                 </div>


                 <div className=" animate__animated animate__flip animate__repeat-2 bg-blue-950 p-5 rounded-xl ">
                    <img className=" h-[100px]" src="https://i.ibb.co/QHbPY5d/medical-1.png" alt="" />
                    <p className=" text-xl text-white font-bold mt-5">Medi Kit</p>
                 </div>


                 <div className=" animate__animated animate__flip animate__repeat-2 bg-blue-950 p-5 rounded-xl ">
                    <img className=" h-[100px]" src="https://i.ibb.co/fkDKwKR/first-aid-kit.png" alt="" />
                    <p className=" text-xl text-white font-bold mt-5">Medi Box</p>
                 </div>


               </div>


            </div>
            
        </div>
    );
};

export default Banner;