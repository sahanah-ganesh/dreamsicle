import React from "react"
import { Box } from "rebass"
import { theme } from "../../theme/theme"

interface ILayoutProps {
  nav?: React.ReactNode
  header?: React.ReactNode
  body?: React.ReactNode
  largeBody?: boolean
}

export const Layout: React.SFC<ILayoutProps> = ({ nav, header, body, largeBody }) => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridTemplateRows: "repeat(6, 1fr)",
      height: "100vh",
    }}
  >
    <Box
      sx={{
        gridRowStart: 1,
        gridRowEnd: 2,
        gridColumnStart: 2,
        gridColumnEnd: 12,
      }}
    >
      {nav}
    </Box>
    <Box
      sx={{
        gridRowStart: 3,
        gridRowEnd: 4,
        gridColumnStart: 5,
        gridColumnEnd: 7,
      }}
    >
      {header}
    </Box>
  </Box>
)
