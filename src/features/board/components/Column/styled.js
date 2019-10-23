import styled from "styled-components"

import { Block } from "@tasky/components"

export const Wrapper = styled(Block)`
  width: 250px;
  min-width: 230px;
  margin: 0 4px;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  background-color: #ebecf0a3;
`

export const Header = styled.div`
  padding: 8px;
  font-weight: 700;

  user-select: none;
`

export const Content = styled.div`
  flex: 1 1 auto;
  margin-bottom: 0;
  z-index: 1;
  padding: 0px 8px 0px 8px;
`

export const Container = styled.div`
  max-height: 100%;
`

export const Action = styled.div`
  font-weight: 700;
  padding: 0px 8px 8px 8px;
  cursor: pointer;
  user-select: none;
  text-align: center;

  &:hover {
    background-color: #efefef;
  }
`

export const HeaderTitle = styled.span`
  font-weight: 700;
`

export const WrapHeader = styled.div`
  display: flex;
  justify-content: space-between;
`
