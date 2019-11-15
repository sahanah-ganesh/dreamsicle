import React from "react"
import { Layout, Nav } from "../../shared"

interface IConnectProps {
  home?: string
}

export const Connect: React.SFC<IConnectProps> = ({ home }) => {
  return <Layout nav={<Nav home={home} />} />
}
