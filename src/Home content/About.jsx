import { Link } from "react-router-dom";




const About = () => {
    return (
        <div className="  mr-10 ml-10 mt-10 mb-10">
            <div>


              <div className=" flex-col md:flex-row lg:flex-row flex justify-center items-center gap-28 ">
                 <img className=" border-[5px] border-blue-950 rounded-full h-[200px] w-[200px]" src="https://img.freepik.com/premium-photo/medical-pills-treatment-patients_200402-160.jpg?w=740" alt="" />
 
                 
                 <div>
                    
                    <h1 className="  text-6xl font-bold text-blue-950">About Us</h1>

                     <p className=" mt-3 text-xl ">
                     Medications and Treatments: Details about <br></br> different medications, including their uses,<br></br> mechanisms of action, dosages, side effects, <br></br> and interactions with other drugs. <br></br> This also includes information <br></br> about medical treatments such as surgery, <br></br> chemotherapy, and physical therapy.
                     Public Health: <br></br> Information about <br></br> public health initiatives, epidemiology, <br></br> infectious diseases, vaccination programs, <br></br> and strategies for disease prevention and control.
                     </p>
                     
                     <Link to="/AD" >
                     <button className=" btn bg-blue-950 text-xl text-white w-[200px] mt-5">About</button> 
                     </Link>  
                       
                 </div>

              </div>












            </div>
            
        </div>
    );
};

export default About;