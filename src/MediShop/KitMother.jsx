import { useState } from "react";
import Box from "./Box";
import KitSHop from "./KitSHop";




const KitMother = () => {
    

    const [ medi, setMedical ] = useState([]);



    
    const handleMedical = data => {

        const newMedical = [ ...medi, data]

        setMedical(newMedical)
      


     }

     


    return (
        <div>
            <div className="">
            <KitSHop handleMedical={handleMedical} ></KitSHop>
            <Box medi={medi}  ></Box>
            </div>
        </div>
    );
};

export default KitMother;