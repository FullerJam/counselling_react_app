import React from "react"
import theme from "./config/theme.js"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "./config/GlobalStyles"
import firebase from "firebase/app";
import 'firebase/auth'; 
import firebaseConfig from "./config/firebase"
import useAuth from "./services/firebase/useAuth"

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


  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      {location.pathname !== "/sign_up" && location.pathname !== "/login" && (
        <Header history={history} user={user} signOut={signOut} />
      )}

      <Switch>
        <Protected authenticated={isAuthenticated} exact path="/">
          <NavDash />
        </Protected>
        <RedirectRoute authenticated={isAuthenticated} path="/login">
          <Login signInEmailUser={signInEmailUser} location={location} />
        </RedirectRoute>
        <RedirectRoute authenticated={isAuthenticated} path="/sign_up" >
          <SignUp createEmailUser={createEmailUser} />
        </RedirectRoute>
        <Protected authenticated={isAuthenticated} path="/appointments">
          <Appointments />
        </Protected>
        <Protected authenticated={isAuthenticated} path="/select_date">
          <DateSelect />
        </Protected>
        <Footer />
      </Switch>
    </ThemeProvider>
  )
}

export default App
