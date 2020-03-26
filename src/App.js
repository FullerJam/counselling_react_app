import React from "react"
import theme from "./config/theme.js"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "./config/GlobalStyles"

import { Switch, Route, useLocation, Redirect } from "react-router-dom";

import NavDash from "./Views/NavDash"
import Header from "./Components/Header"
import ApptStyledInfo from "./Components/ApptStyledInfo"
import Footer from "./Components/Footer"

// import styled from "styled-components";




//react dates

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header/>
      {/* <NavDash /> */}
      <ApptStyledInfo/>

      <Footer/>
    </ThemeProvider>
  )
}

export default App
