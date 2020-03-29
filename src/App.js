import React from "react"
import theme from "./config/theme.js"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "./config/GlobalStyles"
import firebase from "firebase/app";
import 'firebase/auth';
import firebaseConfig from "./config/firebase"
import useAuth from "./services/firebase/useAuth"

import { AnimatePresence, motion } from "framer-motion"
import { Switch, useLocation, Route, Redirect } from "react-router-dom"
import { createBrowserHistory } from 'history'

import NavDash from "./Views/NavDash"
import Login from "./Views/Login"
import Appointments from "./Views/Appointments"
import DateSelect from "./Views/DateSelect"
import SignUp from "./Views/SignUp.js"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Protected from "./Components/Protected"
import RedirectRoute from "./Components/Redirect"

const history = createBrowserHistory(); //back button

const variants = {
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

function App() {

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const {
    isAuthenticated,
    createEmailUser,
    signInEmailUser,
    user,
    signOut
  } = useAuth(firebase.auth());


  const location = useLocation();


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      {location.pathname !== "/sign_up" && location.pathname !== "/login" && (
        <Header history={history} user={user} signOut={signOut} />
      )}
      <AnimatePresence>
        <Switch>
          <Protected authenticated={isAuthenticated} exact path="/">
            <motion.div initial="out" animate="in" exit="out" variants={variants}>
              <NavDash />
            </motion.div>
          </Protected>
          <RedirectRoute authenticated={isAuthenticated} path="/login">
            <motion.div initial="out" animate="in" exit="out" variants={variants}>
              <Login signInEmailUser={signInEmailUser} location={location} />
            </motion.div>
          </RedirectRoute>
          <RedirectRoute authenticated={isAuthenticated} path="/sign_up" >
            <motion.div initial="out" animate="in" exit="out" variants={variants}>
              <SignUp createEmailUser={createEmailUser} />
            </motion.div>
          </RedirectRoute>
          <Protected authenticated={isAuthenticated} path="/appointments">
            <motion.div initial="out" animate="in" exit="out" variants={variants}>
              <Appointments />
            </motion.div>
          </Protected>
          <Protected authenticated={isAuthenticated} path="/select_date">
            <motion.div initial="out" animate="in" exit="out" variants={variants}>
              <DateSelect />
            </motion.div>
          </Protected>
          <Footer />
        </Switch>
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default App
