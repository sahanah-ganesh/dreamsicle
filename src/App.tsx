import React, { Fragment } from "react"
import { ThemeProvider } from "emotion-theming"
import GlobalStyle from "./global-style"
import { theme } from "./theme/theme"

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
      </Fragment>
    </ThemeProvider>
  )
}

export default App
