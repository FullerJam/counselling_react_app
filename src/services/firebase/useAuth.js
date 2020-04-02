import { useState } from "react"

function useAuth(fbAuth) {
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [user, setUser] = useState({})
   const [loading, setLoading] = useState(true);

   fbAuth.onAuthStateChanged(fbUser => {
      setLoading(false);
      if (fbUser) {
         setIsAuthenticated(true)
         setUser(fbUser)
         // localStorage.setItem('user', JSON.stringify(fbUser)); //previous fix only semi worked
         return
      } else {

         setIsAuthenticated(false)
         // localStorage.removeItem('user'); 
      }
   })

   const createEmailUser = (email, password) => fbAuth.
      createUserWithEmailAndPassword(email, password)

   const signInEmailUser = (email, password) => fbAuth.signInWithEmailAndPassword(email, password)

   const signOut = () => fbAuth.signOut()

   return {
      isAuthenticated,
      createEmailUser,
      signInEmailUser,
      user,
      loading,
      signOut
   }

}

export default useAuth