import { Link } from "react-router-dom";



const History = () => {
    return (


        <div className=" mb-10 mt-10 mr-10 ml-10 ">

                     <div className=" text-center mb-5 ">
                      <h1 className=" text-blue-950 text-6xl font-bold">Best man of medical history</h1>
                      <p className=" text-2xl text-slate-400 mt-5">Time is generally the best doctor</p>
                       <hr className=" mt-5"></hr>

                     </div>




        <div className=" flex justify-center ">
                  


                 
            <div className=" grid  md:grid-cols-3 gap-5 ">

                <div>
                <div className="max-w-xs h-[450px] p-6 rounded-md shadow-md  bg-blue-950 text-gray-50">
	            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrBnzgVJ-riuRG5f9G5-kJ_q2g7tzd7iezplVnUpL3nA&s" alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
	            <div className="mt-6 mb-2">
		        <span className="block text-xs font-medium tracking-widest uppercase  text-white">Avicenna (Ibn Sina) (980 – 1037)</span>
	            </div>

                 <Link to="/avi" >
                <button className=" btn  text-center w-[250px]">view Details</button>
                </Link>


                </div>
                </div>


                <div>
                <div className="max-w-xs h-[450px] p-6 rounded-md shadow-md  bg-blue-950 text-gray-50">
	            <img src="https://c8.alamy.com/comp/2BB908T/hippocrates-c-460-c-370-bc-greek-physician-in-a-16th-century-engraving-2BB908T.jpg" alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
	            <div className="mt-6 mb-2">
		        <span className="block text-xs font-medium tracking-widest uppercase  text-white">Hippocrates (c. 460 – c. 370 BC)</span>
	            </div>
                 <Link to="/hip" >
                <button className=" btn  text-center w-[250px]">view Details</button>
                </Link>

                </div>
                </div>


                <div>
                <div className="max-w-xs h-[450px] p-6 rounded-md shadow-md  bg-blue-950 text-gray-50">
	            <img src="https://cdn.britannica.com/54/134754-050-2D11F356/Galen-of-Pergamum-lithograph.jpg" alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
	            <div className="mt-6 mb-2">
		        <span className="block text-xs font-medium tracking-widest uppercase  text-white">Claudius Galen (c. 129 – c. 216 AD):</span>
	            </div>
                <Link to="/cla" >
                <button className=" btn  text-center w-[250px]">view Details</button>
                </Link>

                </div>
                </div>


                <div>
                <div className="max-w-xs h-[450px] p-6 rounded-md shadow-md  bg-blue-950 text-gray-50">
	            <img src="https://cdn.britannica.com/85/122085-050-5890C4BC/Andreas-Vesalius.jpg" alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
	            <div className="mt-6 mb-2">
		        <span className="block text-xs font-medium tracking-widest uppercase  text-white">Andreas Vesalius (1514 – 1564):</span>
	            </div>
                 <Link to="/and" >
                <button className=" btn  text-center w-[250px]">view Details</button>
                </Link>

                </div>
                </div>


                <div>
                <div className="max-w-xs h-[450px] p-6 rounded-md shadow-md  bg-blue-950 text-gray-50">
	            <img src="https://cdn.britannica.com/65/10665-050-FF92D989/Edward-Jenner-detail-oil-painting-James-Northcote-1803.jpg" alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
	            <div className="mt-6 mb-2">
		        <span className="block text-xs font-medium tracking-widest uppercase  text-white">Edward Jenner (1749 – 1823)</span>
	            </div>
                <Link to="/edw" >
                <button className=" btn  text-center w-[250px]">view Details</button>
                </Link>

                </div>
                </div>

               






            </div>
            
        </div>


        </div>
    );
};

export default History;