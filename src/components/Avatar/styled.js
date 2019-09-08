import styled from "styled-components"

const getSize = ({ size }) => size * 21
const getSizeFont = ({ size }) => size * 9

export const Wrapper = styled.div`
  width: ${getSize}px;
  height: ${getSize}px;
  border-radius: 50%;
  background: #dadada;
  display: inline-block;
  vertical-align: middle;
`

export const WrapInitials = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  color: #001529;

  font-size: ${getSizeFont}px;
  font-weight: 700;
  height: 100%;
`
