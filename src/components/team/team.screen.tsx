import React from "react"
import { Layout, Nav } from "shared"

interface ITeamProps {
  home?: string
}

export const Team: React.SFC<ITeamProps> = ({ home }) => {
  return <Layout nav={<Nav home={home} />} />
}
