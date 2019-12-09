import React from "react"
import { Box, Text as Base, Image, Button } from "rebass"
import menu from "images/menu.svg"
import styled from "styled-components"

export const NavText = styled(Base)`
  text-shadow: 5px 5px 10px #776291;
`

export const Nav: React.FC = () => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gridTemplateRows: "repeat(1, 1fr)",
    }}
  >
    <NavText
      letterSpacing={["0.05rem", "0.5rem", "1rem"]}
      fontWeight="bold"
      padding="1rem"
      color="white"
      fontSize={["4rem", "6rem", "8rem"]}
    >
      Dreamsicle
    </NavText>
    <Box mx="auto" />
    <Box sx={{ gridColumnStart: 6, gridColumnEnd: 6 }}>
      <Button
        style={{
          padding: "1.5rem 1rem 0rem 0rem",
          backgroundColor: "transparent",
          outline: "none",
        }}
      >
        <Image height="50px" width="50px" src={menu}></Image>
      </Button>
    </Box>
  </Box>
)
