import React from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"
import { Box, Flex, Text } from "rebass"
import { theme } from "../../theme/theme"

interface INavProps {
  home?: string
}

export const Nav: React.SFC<INavProps> = ({ home }) => (
  <Box width="100%" bg={theme.colors.purple} p={3}>
    <Flex color="black" bg={theme.colors.purple} alignItems="center">
      <Router>
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          <Text pl={5} fontSize={theme.fontSizes[5]} fontWeight="bold">
            Dreamsicle
          </Text>
        </Link>
        <Box mx="auto" />
        <Link style={{ textDecoration: "none", color: "white" }} to="/about">
          <Text pr={5} fontSize={theme.fontSizes[3]}>
            About
          </Text>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/demo">
          <Text pr={5} fontSize={theme.fontSizes[3]}>
            Demo
          </Text>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/team">
          <Text pr={5} fontSize={theme.fontSizes[3]}>
            Team
          </Text>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/connect">
          <Text pr={5} fontSize={theme.fontSizes[3]}>
            Connect
          </Text>
        </Link>
      </Router>
    </Flex>
  </Box>
)
