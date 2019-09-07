import React from "react"

import { POST } from "@lib/mocks/main-post"
import { Block } from "@tasky/components"

export const MainPost = () => {
  return (
    <Block>
      <div>
        <h4>{POST.title}</h4>
        <p>{POST.description}</p>
      </div>
    </Block>
  )
}
