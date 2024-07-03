import { useContext } from "react";
import { FireContext } from "../Firebase/AuthContext";



const SignUp = () => {

    const {createUser} = useContext(FireContext)


	const handleUp = e =>{
        
		e.preventDefault();
		const email = e.target.email.value
		const password = e.target.password.value
		console.log(email, password)

		createUser(email, password)
		.then( result => {
			console.log(result)
		})
		.catch( error => {
			console.error(error)
		})



	}


   








    return (
        <div className=" mt-10 mb-10 ml-10 mr-10" >

            <div className=" flex justify-center">

              

            <div className="w-full max-w-md p-8 space-y-3 rounded-xl  bg-blue-950 text-gray-100">
	<h1 className="text-2xl font-bold text-center">Sign up</h1>


	
	<form onSubmit={handleUp}   className="space-y-6">



		{/* <div className="space-y-1 text-sm">
			<label htmlFor="username" className="block text-gray-400">Username</label>
			<input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border-gray-700   bg-white text-black focus:border-violet-400" />
		</div> */}


		<div className="space-y-1 text-sm">
			<label htmlFor="username" className="block text-gray-400">Email</label>
            <input type="email" name="email" placeholder="Email" id="" className="w-full px-4 py-3 rounded-md border-gray-700   bg-white text-black focus:border-violet-400"  />
 		</div>


		{/* <div className="space-y-1 text-sm">
			<label htmlFor="username" className="block text-gray-400">PHOTO URL</label>
            <input type="url" name="Photo_url" id="" placeholder="PHOTO URL" className="w-full px-4 py-3 rounded-md border-gray-700   bg-white text-black focus:border-violet-400"  />
 		</div> */}

           

		<div className="space-y-1 text-sm">
			<label htmlFor="password" className="block text-gray-400">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-white text-black focus:border-violet-400" />
			<div className="flex justify-end text-xs text-gray-400">
				<a rel="noopener noreferrer" href="#">Forgot Password?</a>
			</div>
		</div>


        <input  className="block w-full p-3 text-center rounded-sm btn text-gray-900  bg-white" type="submit" value="Sign Up" />    

		



	</form>
	
	
</div>















            </div>
            
        </div>
    );
};

export default SignUp;