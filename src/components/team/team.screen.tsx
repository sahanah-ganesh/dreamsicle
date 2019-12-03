import React from "react"
import { Layout } from "../../shared"

interface ITeamProps {
  text?: string
}

export const Team: React.SFC<ITeamProps> = ({ text }) => {
  return <Layout />
}
