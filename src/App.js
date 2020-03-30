import React from "react"
import theme from "./config/theme.js"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "./config/GlobalStyles"

//firebase
import firebase from "firebase/app";
import firebaseConfig from "./config/firebase"
import 'firebase/auth';
import "firebase/firestore";
import useAuth from "./services/firebase/useAuth"
import useDateSelect from "./services/firebase/useDateSelect.js";

import { AnimatePresence } from "framer-motion"
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

  const {
    createAppointment,
    readAppointment
  } = useDateSelect(firebase.firestore)


  const location = useLocation();

  const variants = {
    in: {
      opacity: 1
    },
    out: {
      opacity: 0
    }
  }


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      {location.pathname !== "/sign_up" && location.pathname !== "/login" && (
        <Header history={history} user={user} signOut={signOut} />
      )}

      <AnimatePresence>
        <Switch>

          <Protected authenticated={isAuthenticated} exact path="/">
            <NavDash variants={variants} />
          </Protected>

          <RedirectRoute authenticated={isAuthenticated} path="/login">
            <Login signInEmailUser={signInEmailUser} location={location} variants={variants} />
          </RedirectRoute>

          <RedirectRoute authenticated={isAuthenticated} path="/sign_up" >
            <SignUp createEmailUser={createEmailUser} variants={variants} />
          </RedirectRoute>

          <Protected authenticated={isAuthenticated} path="/appointments">
            <Appointments variants={variants} />
          </Protected>

          <Protected authenticated={isAuthenticated} path="/select_date">
            <DateSelect createAppointment={createAppointment} user={user} variants={variants} />
          </Protected>

          <Footer />

        </Switch>
      </AnimatePresence>

    </ThemeProvider>
  )
}

export default App
