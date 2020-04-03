
import { useState } from "react"

import { useHistory } from "react-router-dom"

function useAuth(fbAuth) {

   const googleProvider = new fbAuth.GoogleAuthProvider();
   const facebookProvider = new fbAuth.FacebookAuthProvider();

   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [user, setUser] = useState({})
   const [loading, setLoading] = useState(true);

   fbAuth().onAuthStateChanged(async fbUser => {
      setLoading(false);
      if (fbUser) {
         setIsAuthenticated(true)
         setUser(fbUser)
         // localStorage.setItem('user', JSON.stringify(fbUser)); //previous fix only semi worked
         return
      }

      setIsAuthenticated(false)
      // localStorage.removeItem('user'); 

   })

   const createEmailUser = (email, password) => fbAuth().
      createUserWithEmailAndPassword(email, password)

   const signInEmailUser = (email, password) => fbAuth().signInWithEmailAndPassword(email, password)

   const signInWithProvider = provider => {
      switch (provider) {
         case "google":
            fbAuth().signInWithRedirect(googleProvider);
            break;

         case "facebook":
            fbAuth().signInWithRedirect(facebookProvider);
            break;
         default:
            throw new Error("unsupported provider");
      }
   };

   const signOut = () => fbAuth().signOut()

   return {
      isAuthenticated,
      createEmailUser,
      signInEmailUser,
      signInWithProvider,
      user,
      loading,
      signOut
   }

}

export default useAuth