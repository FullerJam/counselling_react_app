import React from "react"
import theme from "./config/theme.js"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "./config/GlobalStyles"

//context
import UserContext from "./config/user-context"

//firebase
import firebase from "firebase/app"
import firebaseConfig from "./config/firebase"
import 'firebase/auth'
import "firebase/firestore"
import useAuth from "./services/firebase/useAuth"
import useDateSelect from "./services/firebase/useDateSelect"
import useChat from "./services/firebase/useChat"
import useFriendsList from "./services/firebase/useFriendsList"

import { AnimatePresence } from "framer-motion"
import { Switch, useLocation, Route, Redirect } from "react-router-dom"
import { createBrowserHistory } from 'history'

import ApptConfirmation from "./Views/ApptConfirmation"
import Chat from "./Views/Chat"
import NavDash from "./Views/NavDash"
import Login from "./Views/Login"
import Appointments from "./Views/Appointments"
import DateSelect from "./Views/DateSelect"
import SignUp from "./Views/SignUp.js"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Loader from "./Components/Loader"
// import Protected from "./Components/Protected"
// import RedirectRoute from "./Components/Redirect"

const history = createBrowserHistory() //back button

let initAttemptedRoute = "/"

function Protected({ authenticated, children, ...rest }) {
  initAttemptedRoute = useLocation().pathname;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        authenticated ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

function RedirectRoute({ authenticated, children, ...rest }) {
    
  return (
      <Route
          {...rest}
          render={({ location }) =>
              !authenticated ? (
                  children
              ) : (
                      <Redirect
                          to={{
                              pathname: initAttemptedRoute,
                              state: { from: location }
                          }}
                      />
                  )
          }
      />
  );
}

function App() {

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const {
    isAuthenticated,
    createEmailUser,
    signInEmailUser,
    signInWithProvider,
    user,
    signOut,
    loading
  } = useAuth(firebase.auth);

  const {
    createAppointment,
    readAppointments
  } = useDateSelect(firebase.firestore)
  const {
    writeChatMsg,
    createDirectMsgRepo
  } = useChat(firebase.firestore)
  const {
    getFriendsList
  } = useFriendsList(firebase.firestore)
  

  const location = useLocation()

  const variants = {
    in: {
      opacity: 1
    },
    out: {
      opacity: 0
    }
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <UserContext.Provider value={user}>
        {location.pathname !== "/sign_up" && location.pathname !== "/login" && (
          <Header history={history} user={user} signOut={signOut} />
        )}

        <AnimatePresence>
          <Switch>

            <Protected authenticated={isAuthenticated} exact path="/">
              <NavDash variants={variants} />
            </Protected>

            <RedirectRoute authenticated={isAuthenticated} path="/login">
              <Login signInWithProvider={signInWithProvider} signInEmailUser={signInEmailUser} location={location} variants={variants} />
            </RedirectRoute>

            <RedirectRoute authenticated={isAuthenticated} path="/sign_up" >
              <SignUp signInWithProvider={signInWithProvider} createEmailUser={createEmailUser} variants={variants} />
            </RedirectRoute>

            <Protected authenticated={isAuthenticated} path="/appointments">
              <Appointments variants={variants} readAppointments={readAppointments} />
            </Protected>

            <Protected authenticated={isAuthenticated} path="/select_date">
              <DateSelect createAppointment={createAppointment} history={history} user={user} variants={variants} />
            </Protected>

            <Protected authenticated={isAuthenticated} path="/appt_confirmation">
              <ApptConfirmation history={history} user={user} variants={variants} />
            </Protected>

            <Protected authenticated={isAuthenticated} path="/chat">
              <Chat firestore={firebase.firestore()} getFriendsList={getFriendsList} history={history} writeChatMsg={writeChatMsg} user={user} variants={variants} createDirectMsgRepo={createDirectMsgRepo} />
            </Protected>

          </Switch>
          {location.pathname !== "/sign_up" && location.pathname !== "/login" && (
            <Footer />
          )}
        </AnimatePresence>
      </UserContext.Provider>

    </ThemeProvider>
  )
}

export default App
