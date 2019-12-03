import React, { Fragment } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ThemeProvider } from "emotion-theming"
import GlobalStyle from "./global-style"
import { theme } from "./theme/theme"
import { Home } from "./components"

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  </ThemeProvider>
)

export default App
