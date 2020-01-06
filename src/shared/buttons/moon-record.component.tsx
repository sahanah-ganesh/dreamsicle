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
`
export const MuteImage = styled(MuteBase)`
  height: 4rem;
  width: 4rem;
`
interface IProps {
  isRecording?: string
  startCapturing: () => void
  stopCapturing: () => void
}

export const MoonRecord: React.FC<IProps> = ({ isRecording, startCapturing, stopCapturing }) => {
  return (
    <Box style={{ display: "flex", justifyContent: "center" }}>
      <MoonButton onClick={isRecording ? stopCapturing : startCapturing}>
        {isRecording ? <MuteImage src={mute} /> : <RecordImage src={microphone} />}
      </MoonButton>
    </Box>
  )
}
