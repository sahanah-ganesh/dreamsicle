import React from "react"
import { Box, Image as SaveBase, Image as CheckBase, Button as ButtonBase } from "rebass"
import save from "images/save.svg"
import check from "images/check.svg"
import styled from "styled-components"

export const SaveButton = styled(ButtonBase)`
  background: transparent;
  outline: none;
`

export const SaveImage = styled(SaveBase)`
  height: 3rem;
  width: 3rem;
`

export const CheckImage = styled(CheckBase)`
  height: 3rem;
  width: 3rem;
`

interface IProps {
  isSaving?: boolean
  saveDream: () => void
}

export const SaveDream: React.FC<IProps> = ({ isSaving, saveDream }) => {
  return (
    <Box style={{ display: "flex", justifyContent: "center", padding: "1rem 0 0 0" }}>
      <SaveButton onClick={saveDream}>
        {isSaving ? <CheckImage src={check} /> : <SaveImage src={save} />}
      </SaveButton>
    </Box>
  )
}
