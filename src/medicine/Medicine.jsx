import { Link } from "react-router-dom";




const Medicine = () => {

   
    return (
        <div className=" mb-10 mt-10  ml-10 mr-10 flex justify-center items-center  ">

               <div className=" grid   md:grid-cols-3 gap-5">



           
                <div className="max-w-xs rounded-md shadow-md  bg-blue-950 text-gray-100">
                <img src="https://cdn-prod.medicalnewstoday.com/content/images/articles/301/301766/bottle-of-aspirin.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide"> Aspirin </h2>
                </div>
                <Link to="/aspirin" >
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md  bg-white btn text-gray-900">View Details</button>
                </Link>
                </div>
                </div>


                <div className="max-w-xs rounded-md shadow-md  bg-blue-950 text-gray-100">
                <img src="https://m.media-amazon.com/images/I/71byBwaWpuL.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide"> Ibuprofen </h2>
                </div>

                <Link to="/ibuprofen"  >
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md  bg-white btn text-gray-900">View Details</button>
                </Link>

                </div>
                </div>


                <div className="max-w-xs rounded-md shadow-md  bg-blue-950 text-gray-100">
                <img src="https://www.pharmica.co.uk/pain-relief/paracetamol/paracetamol-x-36229.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide"> Paracetamol </h2>
                </div>

                 <Link to="/para" >
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md  bg-white btn text-gray-900">View Details</button>
                </Link>
                </div>
                </div>


                <div className="max-w-xs rounded-md shadow-md  bg-blue-950 text-gray-100">
                <img src="https://www.camberpharma.com/wp-content/uploads/2022/09/LisinoprilBottles_30mg_500.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide"> Lisinopril </h2>
                </div>
                <Link to="/lis" >
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md  bg-white btn text-gray-900">View Details</button>
                </Link>
                </div>
                </div>


                <div className="max-w-xs rounded-md shadow-md  bg-blue-950 text-gray-100">
                <img src="https://www.poison.org/-/media/images/shared/articles/metformin.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide"> Metformin </h2>
                </div>
                <Link to="/met" >
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md  bg-white btn text-gray-900">View Details</button>
                </Link>
                </div>
                </div>


                <div className="max-w-xs rounded-md shadow-md  bg-blue-950 text-gray-100">
                <img src="https://i5.walmartimages.com/seo/Equate-Omeprazole-Delayed-Release-Capsules-20-mg-28-Count_f7c3830d-d0c4-43bf-8c8d-5d302641e2a4.3c9a0eafa6ead6ef79aaba7fb8964925.jpeg" alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide"> Omeprazole </h2>
                </div>
                <Link to="/ome" >
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md  bg-white btn text-gray-900">View Details</button>
                </Link>
                </div>
                </div>


                <div className="max-w-xs rounded-md shadow-md  bg-blue-950 text-gray-100">
                <img src="https://www.crukctuglasgow.org/images/amoxicillin-1.png" alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide"> Amoxicillin </h2>
                </div>
                <Link to="/amo" >
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md  bg-white btn text-gray-900">View Details</button>
                </Link>
                </div>
                </div>


                <div className="max-w-xs rounded-md shadow-md  bg-blue-950 text-gray-100">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnLh6CqsBVFM2d4_uzpi5gDpCugJtQ0pJ7yMYGoVzigA&s" alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide"> Atorvastatin </h2>
                </div>
                <Link to="/ato" >
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md  bg-white btn text-gray-900">View Details</button>
                </Link>
                </div>
                </div>


                <div className="max-w-xs rounded-md shadow-md  bg-blue-950 text-gray-100">
                <img src="https://api.watsons.com.ph/medias/zoom-back-10071196.jpg?context=bWFzdGVyfGltYWdlc3w0MTIxMjB8aW1hZ2UvanBlZ3xhREk0TDJnNU1DOHhNamN3TURjME5Ea3dPRGd6TUM5WFZFTlFTQzB4TURBM01URTVOaTFpWVdOckxtcHdad3xkNmM3Y2FhNTVmMmIzMzNjM2JkYzdiYzMyMzQxNjZlMjI2ODNjNjA2Njc4MTRiNzA5MTZjMGJlNzUxZDEwYmVl" alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide"> Levothyroxine </h2>
                </div>
                <Link to="/levo" >
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md  bg-white btn text-gray-900">View Details</button>
                </Link>
                </div>
                </div>

                <div className="max-w-xs rounded-md shadow-md  bg-blue-950 text-gray-100">
                <img src="https://www.hss.edu/images/socialmedia/corticosteroid-prednisone-tablets-500X262.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide"> Prednisone </h2>
                </div>
                <Link to="/pre" >
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md  bg-white btn text-gray-900">View Details</button>
                </Link>
                </div>
                </div>


                <div className="max-w-xs rounded-md shadow-md  bg-blue-950 text-gray-100">
                <img src="https://fidson.com/wp-content/uploads/2022/09/Ciprofloxacin-500.png" alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide"> Ciprofloxacin </h2>
                </div>
                <Link to="/cip" >
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md  bg-white btn text-gray-900">View Details</button>
                </Link>
                </div>
                </div>


                <div className="max-w-xs rounded-md shadow-md  bg-blue-950 text-gray-100">
                <img src="https://cdn.storymd.com/optimized/OoYBGRLHMd/original.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide"> Warfarin </h2>
                </div>
                <Link to="/waf" >
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md  bg-white btn text-gray-900">View Details</button>
                </Link>
                </div>
                </div>
              
                 


                </div>

            
        </div>
    );
};

export default Medicine;