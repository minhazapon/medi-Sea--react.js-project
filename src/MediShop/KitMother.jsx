import KitSHop from "./KitSHop";
import OrderBox from "./OrderBox";




const KitMother = () => {
    return (
        <div>
             

             <div className=" flex justify-center">

                <KitSHop></KitSHop>
                <OrderBox></OrderBox>

             </div>
            
            
        </div>
    );
};

export default KitMother;