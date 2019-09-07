import styled, { css } from "styled-components"

import { Board } from "../Board"
import { AddBoard } from "../AddBoard"

const styles = css`
  width: 100%;

  &:not(:last-child) {
    margin-right: 16px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 24px;
`

export const StyledBoard = styled(Board)`
  ${styles}
`
export const StyledAddBoard = styled(AddBoard)`
  ${styles}
`

export const EmptyTile = styled.div`
  ${styles}
`

export const Row = styled.div`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 14px;
  }
`

export const WrapLabel = styled.div`
  display: flex;

  i {
    display: flex;
    margin-top: 6px;
    margin-right: 4px;
  }
`
