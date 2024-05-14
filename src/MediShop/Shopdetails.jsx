




const Shopdetails = ({data, handleMedical}) => {


    const { image, name, } = data



    return (
        <div className=" mb-10 mt-10 ml-10 mr-10" >

            <div>




              <div className=" animate__animated animate__rotateIn animate__repeat-2  bg-blue-950 border-[1px] h-[350px] w-[200px] p-3 rounded-2xl ">
               <img className=" h-[200px] w-[200px] rounded-2xl " src={image} alt="" />
               <p className=" text-white text-xl  mt-2"> Name: {name} </p>
               <p className=" text-white text-xl  mt-2" > Price: 500$ </p>
                <button className=" mt-2 btn">Buy</button>
              </div>


            </div>
            
        </div>
    );
};

export default Shopdetails;