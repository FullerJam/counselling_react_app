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
         return
      }
      setIsAuthenticated(false)
      console.log(isAuthenticated)
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