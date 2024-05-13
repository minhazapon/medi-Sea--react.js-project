import Boxdetails from "./Boxdetails";





const Box = ({medi}) => {
    return (
        <div>
            <div>

                <h1 className=" text-6xl">OderBox:</h1>


                <div>

                  {
                    medi.map( medi => <Boxdetails key={medi.id} medi={medi} ></Boxdetails> )

                  }

                </div>




            </div>
            
        </div>
    );
};

export default Box;