import React, { Fragment } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ThemeProvider } from "emotion-theming"
import GlobalStyle from "./global-style"
import { theme } from "./theme/theme"
import { Home, About, Team, Demo, Connect } from "./components"

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/demo">
              <Demo />
            </Route>
            <Route exact path="/team">
              <Team />
            </Route>
            <Route exact path="/connect">
              <Connect />
            </Route>
          </Switch>
        </Router>
      </Fragment>
    </ThemeProvider>
  )
}

export default App
