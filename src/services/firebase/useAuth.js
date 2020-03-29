import { useState } from "react"

function useAuth(fbAuth) {
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [user, setUser] = useState({})

   fbAuth.onAuthStateChanged(fbUser => {
      if (fbUser) {
         setIsAuthenticated(true)
         console.log(isAuthenticated)
         setUser(fbUser)
         console.log(user)
         return
      }
      setIsAuthenticated(false)
      console.log(isAuthenticated)
   })

   const createEmailUser = (email, password) => fbAuth.
      createUserWithEmailAndPassword(email, password)

   const signInEmailUser = (email, password) => fbAuth.signInWithEmailAndPassword(email, password)

   const signOut = () => fbAuth.signOut();

   return {
      isAuthenticated,
      createEmailUser,
      signInEmailUser,
      user,
      signOut
   }

}


export default useAuth