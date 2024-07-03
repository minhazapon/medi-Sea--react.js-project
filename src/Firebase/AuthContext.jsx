import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "./firebase.config";



export const FireContext = createContext(null);

const AuthContext = ({children}) => {
    
    const [user, setUser] = useState(null)


    const createUser = (email, password) =>{
     
      return  createUserWithEmailAndPassword(auth, email, password )

    }

    const signLog = (email, password) =>{

      return signInWithEmailAndPassword(auth, email, password)
         
    }


         /////////////
         useEffect( () =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser)
        
         })
         return() => {
            unSubscribe();
         }
         } , [])
    
        ///////////////



    const authInfo = { user, createUser, signLog }


    return (
        <div>

            <FireContext.Provider value={authInfo}>
               
               {children}
               

            </FireContext.Provider>
            
        </div>
    );
};

export default AuthContext;