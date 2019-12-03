import React from "react"
import { Box, Image as MuteBase, Image as RecordBase, Button as ButtonBase } from "rebass"
import moon from "images/moon.svg"
import microphone from "images/microphone.svg"
import mute from "images/mute.svg"
import styled from "styled-components"

export const MoonButton = styled(ButtonBase)`
  background: transparent;
  height: 8rem;
  width: 8rem;
  background-image: url(${moon});
  outline: none;
`

export const RecordImage = styled(RecordBase)`
  height: 4rem;
  width: 4rem;
  &{Box}:hover {
    display: none;
  }
`
export const MuteImage = styled(MuteBase)`
  display: none;
  height: 4rem;
  width: 4rem;
`

export const MoonRecord: React.FC = () => (
  <Box style={{ display: "flex", justifyContent: "center" }}>
    <MoonButton onClick={() => true}>
      <RecordImage src={microphone} />
      <MuteImage src={mute} />
    </MoonButton>
  </Box>
)
