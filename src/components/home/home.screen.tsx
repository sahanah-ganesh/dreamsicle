import React from "react"
import { Box } from "rebass"
import { Layout, MoonRecord } from "../../shared"
import { theme } from "theme/theme"

interface IHomeProps {
  home?: string
}

export const Home: React.SFC<IHomeProps> = ({ home }) => {
  return (
    <Layout
      body={
        <Box>
          <MoonRecord />
          <Box
            bg={theme.colors.purple}
            style={{ boxShadow: "10px 10px 40px 10px #12082b inset" }}
          ></Box>
        </Box>
      }
    />
  )
}
