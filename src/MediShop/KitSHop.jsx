
import Shopdetails from "./Shopdetails";

import { useEffect, useState } from "react";



const KitSHop = ({handleMedical}) => {

    


   const [data, setItems] = useState([]);

   useEffect( () => {

      fetch('https://mocki.io/v1/a9a36778-ac4c-4a60-9a8a-84a8aa2d782f')
       .then(res => res.json())
       .then(data => setItems(data))


   } , [])




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


            <div className=" flex justify-center  ">

            <div className=" grid  md:grid-cols-4 ">
               
               {
                
                data.map( data => <Shopdetails key={data.id}  data={data}  handleMedical={handleMedical} ></Shopdetails> )


               }

            </div>

            </div>


            
        </div>
    );
};

export default KitSHop;