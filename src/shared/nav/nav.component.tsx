import React from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"
import { Box, Flex } from "rebass"
import { Text as Base } from "rebass"
import styled from "styled-components"
import { theme } from "../../theme/theme"

interface INavProps {
  home?: string
}

export const NavText = styled(Base)`
  font-size: 24px;
  letter-spacing: 3px;
  padding-right: 3em;
  &:hover {
    letter-spacing: 5px;
    font-weight: bold;
  }
`

export const Nav: React.SFC<INavProps> = ({ home }) => (
  <Box width="100%" bg="#241c47" p={3}>
    <Flex color="black" bg="#241c47" alignItems="center">
      <Router>
        <Link style={theme.link} to="/">
          <NavText pl={5} fontSize={theme.fontSizes[5]} letterSpacing="3px">
            Dreamsicle
          </NavText>
        </Link>
        <Box mx="auto" />
        <Link style={theme.link} to="/about">
          <NavText>About</NavText>
        </Link>
        <Link style={theme.link} to="/demo">
          <NavText>Demo</NavText>
        </Link>
        <Link style={theme.link} to="/team">
          <NavText>Team</NavText>
        </Link>
        <Link style={theme.link} to="/connect">
          <NavText>Connect</NavText>
        </Link>
      </Router>
    </Flex>
  </Box>
)
