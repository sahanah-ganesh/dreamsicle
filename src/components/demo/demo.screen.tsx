import React from "react"
import { Layout } from "../../shared"

interface IDemoProps {
  text?: string
}

export const Demo: React.SFC<IDemoProps> = ({ text }) => {
  return <Layout />
}
