import React from "react"
import { Box, Text } from "rebass"

export const DateTime: React.SFC = ({}) => {
  const today = new Date()
  const month = today.getMonth() + 1
  const date = today.getDate()
  const year = today.getFullYear()
  const hours = today.getHours()
  const minutes = today.getMinutes()

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "2.5rem",
        color: "white",
      }}
    >
      <Text>
        Date: {date}/{month}/{year}
      </Text>
      <Text>
        Time: {hours}:{minutes}
      </Text>
    </Box>
  )
}
