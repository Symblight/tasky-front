import React from "react"

import { POST } from "@lib/mocks/main-post"
import { Block } from "@tasky/components"
import { Starship } from "@assets/images"

import { ImageWrap, Content } from "./styled"

export const MainPost = () => {
  return (
    <Block>
      <div>
        <ImageWrap src={Starship} alt="post" />
        <Content>
          <h4>{POST.title}</h4>
          <p>{POST.description}</p>
        </Content>
      </div>
    </Block>
  )
}
