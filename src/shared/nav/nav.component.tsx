import React from "react"
import { Box, Text } from "rebass"
import { theme } from "../../theme/theme"

interface INavProps {
  home: string
  about: string
  team: string
  demo: string
  connect: string
}

export const Nav: React.SFC<INavProps> = ({ home, about, team, demo, connect }) => (
  <Box
    sx={{
      gridRowStart: [3, 3, 5, 5],
      gridRowEnd: 7,
      gridColumnStart: 5,
      gridColumnEnd: [7, 7, 6, 6],
    }}
    color="white"
    marginTop="2rem"
  >
    <Text>{home}</Text>
    <Text>{about}</Text>
    <Text>{team}</Text>
    <Text>{demo}</Text>
    <Text>{connect}</Text>
  </Box>
)
