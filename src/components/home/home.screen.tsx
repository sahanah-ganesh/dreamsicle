import React from "react"
import { Box, Text } from "rebass"
import { Layout, MoonRecord, DateTime, SaveDream } from "../../shared"
import { theme } from "theme/theme"

interface IHomeProps {
  startCapturing: () => void
  stopCapturing: () => void
  isRecording: string
  isSaving: boolean
  saveDream: () => void
  error: string
  results: string[]
}

export const Home: React.FC<IHomeProps> = ({
  startCapturing,
  stopCapturing,
  isRecording,
  isSaving,
  saveDream,
  error,
  results,
}) => {
  return (
    <Layout
      body={
        <Box sx={{ gridRowStart: 2, gridRowEnd: 6, gridColumnStart: 2, gridColumnEnd: 6 }}>
          <MoonRecord
            startCapturing={startCapturing}
            stopCapturing={stopCapturing}
            isRecording={isRecording}
          />
          <Box
            sx={{ gridRowStart: 4, gridRowEnd: 6, gridColumnStart: 2, gridColumnEnd: 5 }}
            bg={theme.colors.purple}
            style={{
              boxShadow: "0px 0px 20px 0px white, 10px 10px 40px 10px #12082b inset",
              height: "10rem",
              marginTop: "2rem",
              color: "white",
              position: "relative",
              padding: "1rem",
              borderRadius: "0.4em",
              boxSizing: "border-box",
            }}
          >
            <Box
              style={{
                position: "absolute",
                width: 0,
                height: 0,
                marginLeft: "-0.5em",
                bottom: "-2em",
                left: "20%",
                boxSizing: "border-box",
                border: "1em solid white",
                borderColor: "transparent transparent #1a1239 #1a1239",
                transformOrigin: "0 0",
                transform: "rotate(-45deg)",
                boxShadow: "-6px 6px 6px 0 #675e6f",
              }}
            ></Box>
            {error ? <Text size="2rem">{error}</Text> : <Text size="2rem">{results}</Text>}
          </Box>
          <DateTime />
          {results.length > 0 ? <SaveDream isSaving={false} saveDream={saveDream} /> : null}
        </Box>
      }
    />
  )
}
