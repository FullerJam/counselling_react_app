import React from "react"
import theme from "./config/theme.js"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "./config/GlobalStyles"

import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import { createBrowserHistory } from 'history';

import NavDash from "./Views/NavDash"
import Login from "./Views/Login"
import Header from "./Components/Header"
import Appointments from "./Views/Appointments"
import Footer from "./Components/Footer"
import DateSelect from "./Views/DateSelect"

// import styled from "styled-components";

const history = createBrowserHistory();


//react dates

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header history={history}/>
      <Switch>
        <Route exact path="/">
          <NavDash />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/appointments">
          <Appointments />
        </Route>
        <Route path="/select_date">
          <DateSelect />
        </Route>
        <Footer />
      </Switch>
    </ThemeProvider>
  )
}

export default App
