import React from "react"
import Dash from "./Views/Dash"
import styled from "styled-components";
import theme from "./config/theme.js";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./config/GlobalStyles"
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Dash/>
        
      </header>
    </div>
  )
}

export default App
