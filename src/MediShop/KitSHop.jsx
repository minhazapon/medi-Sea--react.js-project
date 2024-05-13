import { useLoaderData } from "react-router-dom";
import Shopdetails from "./Shopdetails";





const KitSHop = () => {

    
   const data = useLoaderData();



    return (
        <div className=" mb-10 mt-10 ml-10 mr-10">
             

               <div className=" text-center">
                   
                  <div className=" flex justify-center items-center gap-2">
                  <img className=" h-[60px] " src="https://i.ibb.co/cYHRNVd/first-aid-kit-1.png" alt="" />
                  <h1 className=" text-6xl font-bold text-blue-950 ">Our Medical Kit</h1>
                  </div>
                  <p className=" mt-5 text-xl text-slate-400">Life is choices, and they are relentless.</p>
                  <hr className=" mb-4 mt-4"></hr>

               </div>


            <div className=" flex items-center">

            <div className=" grid grid-cols-2">
               
               {
                
                data.map( data => <Shopdetails key={data.id}  data={data}></Shopdetails> )


               }

            </div>

            </div>


            
        </div>
    );
};

export default KitSHop;