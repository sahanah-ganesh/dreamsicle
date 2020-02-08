import React, { Fragment } from "react"
import useSpeechToText from "./hooks/useSpeechToText"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ThemeProvider } from "emotion-theming"
import GlobalStyle from "./global-style"
import { theme } from "./theme/theme"
import { Home } from "./components"

const App = () => {
  const { startCapturing, stopCapturing, isRecording, error, results } = useSpeechToText({
    timeout: 10000,
    continuous: true,
  })
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route exact path="/">
              <Home
                startCapturing={startCapturing}
                stopCapturing={stopCapturing}
                isRecording={isRecording}
                results={results}
                error={error}
              />
            </Route>
          </Switch>
        </Router>
      </Fragment>
    </ThemeProvider>
  )
}

export default App
