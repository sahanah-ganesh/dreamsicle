import React from "react"
import { Layout, Nav } from "../../shared"

interface IDemoProps {
  home?: string
}

export const Demo: React.SFC<IDemoProps> = ({ home }) => {
  return <Layout nav={<Nav home={home} />} />
}
