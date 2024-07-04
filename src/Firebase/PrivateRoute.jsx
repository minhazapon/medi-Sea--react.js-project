import { useContext } from "react";
import { FireContext } from "./AuthContext";
import { Navigate } from "react-router-dom";




const PrivateRoute = ({children}) => {
    
    const {user, loading} = useContext(FireContext)

    if (loading) {

      return <span className="loading loading-ring loading-lg mt-5 ml-4 mr-5 mb-5 "></span>

    }

    if (user) {

     return children

    }




    return <Navigate to="/login" ></Navigate>
};

export default PrivateRoute;