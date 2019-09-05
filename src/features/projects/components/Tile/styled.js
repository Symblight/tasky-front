import styled from "styled-components"
import Card from "@material-ui/core/Card"
import { Link } from "react-router-dom"

const isNewCard = ({ isnew }) => {
  return isnew
    ? `
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-weight: 400;
      color: #4e3b96;
      cursor: pointer;
    `
    : null
}

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const StyledCard = styled(Card)`
  padding: 1rem;
  margin: 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  width: 15rem;
  height: 7rem;
  ${isNewCard}
`
