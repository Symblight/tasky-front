import styled, { css } from "styled-components"

import { Link } from "react-router-dom"

const isAnimate = ({ animate }) => animate || null

const styles = css`
  display: flex;
  flex-direction: column;

  border-radius: 6px;
  background-color: #ffffff;

  min-width: 180px;
  width: 100%;
  overflow: hidden;

  ${isAnimate}
`

export const Wrapper = styled.div`
  ${styles}
`

export const WrapperLink = styled(Link)`
  color: #000000a6;

  text-decoration: none;
  outline: 0;
  border-style: none;
  border: 0px;
  user-select: none;

  &:visited {
    color: #000000a6;
    border: none;
  }

  &:hover {
    color: #000000a6;
    border: none;
  }

  &:active {
    color: #000000a6;
    text-decoration: none;
    outline: 0;
    border: none;
  }

  &:focus {
    color: #000000a6;
    text-decoration: none;
    outline: 0;
    border: none;
  }
`
