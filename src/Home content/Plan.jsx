import { Link } from "react-router-dom";

import Marquee from "react-fast-marquee";



const Plan = () => {
    return (
        <div className="  flex-col md:flex-row lg:flex-row mb-10 mt-10 ml-10 mr-10">




            <div className="  flex-col md:flex-row lg:flex-row  p-32 bg-no-repeat  bg-cover"

            style={{backgroundImage: 'url(https://cdn.medicalfuturist.com/wp-content/uploads/2020/08/195_tmf-01.png)'}}>

               <Marquee>


               <div className=" flex-col md:flex-row lg:flex-row text-white  bg-gradient-to-r from-black p-3">


               <h1 className=" mb-10 text-5xl font-bold ">Plan Your Medical Camping 
               </h1>
                
               <div className=" mt-2 flex items-center gap-1">
               <img className=" h-[30px]" src="https://i.ibb.co/vYxhVwV/mark.png" alt="" />
               <h1 className=" text-xl font-bold"> Russia MedicalCamp</h1>
               </div> 

               <div className=" mt-2 flex items-center gap-1">
               <img className=" h-[30px]" src="https://i.ibb.co/vYxhVwV/mark.png" alt="" />
               <h1 className=" text-xl font-bold"> Bangladesh MedicalCamp</h1>
               </div> 

               <div className=" mt-2 flex items-center gap-1">
               <img className=" h-[30px]" src="https://i.ibb.co/vYxhVwV/mark.png" alt="" />
               <h1 className=" text-xl font-bold"> India MedicalCamp</h1>
               </div> 

               </div>

               </Marquee> 

              <Link to="/GO" >
              <button className=" animate__animated animate__heartBeat animate__repeat-2 w-[200px] text-xl btn  mt-10 bg-blue-950 text-white">Go Now</button>
              </Link>









            </div>
            
        </div>
    );
};

export default Plan;