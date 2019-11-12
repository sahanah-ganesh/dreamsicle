import React from "react"
import { Box } from "rebass"

interface ILayoutProps {
  nav?: React.ReactNode
  body?: React.ReactNode
}

export const Layout: React.SFC<ILayoutProps> = ({ nav, body }) => (
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
        gridColumnStart: 1,
        gridColumnEnd: 13,
      }}
    >
      {nav}
    </Box>
    <Box
      sx={{
        gridRowStart: 3,
        gridRowEnd: 6,
        gridColumnStart: 2,
        gridColumnEnd: 10,
      }}
    >
      {body}
    </Box>
  </Box>
)
