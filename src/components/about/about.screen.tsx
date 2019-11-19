import React from "react"
import { Layout, Nav } from "../../shared"

interface IAboutProps {
  home?: string
}

export const About: React.SFC<IAboutProps> = ({ home }) => {
  return <Layout nav={<Nav />} />
}
