import React from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"
import { Box, Flex, Text } from "rebass"
import { theme } from "../../theme/theme"

interface INavProps {
  home?: string
}

export const Nav: React.SFC<INavProps> = ({ home }) => (
  <Box width="100%" bg="#241c47" p={3}>
    <Flex color="black" bg="#241c47" alignItems="center">
      <Router>
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          <Text pl={5} fontSize={theme.fontSizes[5]} fontWeight="bold" letterSpacing="5px">
            Dreamsicle
          </Text>
        </Link>
        <Box mx="auto" />
        <Link style={{ textDecoration: "none", color: "white" }} to="/about">
          <Text pr={5} fontSize={theme.fontSizes[3]} letterSpacing="3px">
            About
          </Text>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/demo">
          <Text pr={5} fontSize={theme.fontSizes[3]} letterSpacing="3px">
            Demo
          </Text>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/team">
          <Text pr={5} fontSize={theme.fontSizes[3]} letterSpacing="3px">
            Team
          </Text>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/connect">
          <Text pr={5} fontSize={theme.fontSizes[3]} letterSpacing="3px">
            Connect
          </Text>
        </Link>
      </Router>
    </Flex>
  </Box>
)
