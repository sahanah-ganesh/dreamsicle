import React from "react"
import { Box, Text } from "rebass"
import { Layout, MoonRecord } from "../../shared"
import { theme } from "theme/theme"

interface IHomeProps {
  home?: string
}

export const Home: React.SFC<IHomeProps> = ({ home }) => {
  return (
    <Layout
      body={
        <Box sx={{ gridRowStart: 2, gridRowEnd: 6, gridColumnStart: 2, gridColumnEnd: 6 }}>
          <MoonRecord />
          <Box
            sx={{ gridRowStart: 4, gridRowEnd: 6, gridColumnStart: 2, gridColumnEnd: 5 }}
            bg={theme.colors.purple}
            style={{
              boxShadow: "10px 10px 40px 10px #12082b inset",
              height: "10rem",
              marginTop: "1rem",
              color: "white",
            }}
          >
            <Box style={{ padding: "1rem" }}>
              <Text>Hello Hello Hello Hello</Text>
              <Text>Hello Hello Hello Hello</Text>
              <Text>Hello Hello Hello Hello</Text>
            </Box>
          </Box>
        </Box>
      }
    />
  )
}
