import React from "react";
import "./App.css";

import indigo from "@material-ui/core/colors/indigo";
// import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvide } from "@material-ui/core/styles";

import NavBar from "./components/NavBar";

import ApiContextProvider from "./context/ApiContext";
import Main from "./components/Main";

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: {
      main: "#f44336",
    },
  },
  typography: {
    fontFamily: '"Comic Neue",cursive',
  },
});

function App() {
  return (
    <ApiContextProvider>
      <MuiThemeProvider theme={theme}>
        <NavBar />
        <Main />
      </MuiThemeProvider>
    </ApiContextProvider>
  );
}

export default App;
