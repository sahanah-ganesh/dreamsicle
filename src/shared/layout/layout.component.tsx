import React from "react"
import { Box } from "rebass"

interface ILayoutProps {
  nav?: React.ReactNode
  background?: React.ReactNode
  title?: React.ReactNode
  body?: React.ReactNode
}

export const Layout: React.SFC<ILayoutProps> = ({ nav, body, title, background }) => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridTemplateRows: "repeat(6, 1fr)",
      height: "100vh",
    }}
  >
    {nav}
    {background}
    {title}
    {body}
  </Box>
)
