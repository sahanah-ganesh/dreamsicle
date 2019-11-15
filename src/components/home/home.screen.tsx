import React from "react"
import { Layout, Nav } from "../../shared"

interface IHomeProps {
  home?: string
}

export const Home: React.SFC<IHomeProps> = ({ home }) => {
  return <Layout nav={<Nav home={home} />} />
}
