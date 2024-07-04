import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "./firebase.config";



export const FireContext = createContext(null);
       
       const Gprovider= new GoogleAuthProvider()

const AuthContext = ({children}) => {
    
    const [user, setUser] = useState(null)

    const [loading , setLoading] = useState(true)


    const createUser = (email, password) =>{
      setLoading(true)
      return  createUserWithEmailAndPassword(auth, email, password )

    }

    const signLog = (email, password) =>{
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
         
    }


    const signGoogle = () => {
      setLoading(true)
     return signInWithPopup(auth, Gprovider)

    }


    const logOut = () => {
      setLoading(true)
       signOut(auth)

    }


         /////////////
         useEffect( () =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser)
            setLoading(false)
        
         })
         return() => {
            unSubscribe();
         }
         } , [])
    
        ///////////////



    const authInfo = { user, createUser, signLog, signGoogle, logOut, loading }


    return (
        <div>

            <FireContext.Provider value={authInfo}>
               
               {children}
               

            </FireContext.Provider>
            
        </div>
    );
};

export default AuthContext;