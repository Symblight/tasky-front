import styled from "styled-components"

import { Block } from "@tasky/components"

export const Wrapper = styled(Block)`
  position: relative;

  background-color: #fff;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);

  cursor: pointer;

  margin-bottom: 8px;
  max-width: 230px;
  min-height: 20px;

  text-decoration: none;

  padding: 4px;

  user-select: none;
  overflow: visible;

  &:hover {
    background-color: #f7f6f6;
  }
`

export const Content = styled.div`
  margin-bottom: 12px;
  white-space: pre-wrap;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Row = styled.div`
  display: flex;
`

export const Action = styled.div`
  position: absolute;
  right: 10px;
  border-radius: 4px;
  background-color: #dcdcdc4d;
`

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NameCard = styled.span`
  font-weight: 600;
  margin-right: 12px;
  max-width: 100px;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  color: #757575;
`

export const InfoWrap = styled.div`
  display: flex;
  align-items: center;
`
