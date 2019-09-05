import React from "react"
import PropTypes from "prop-types"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

import { Container } from "./styled"

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Main</Typography>
        </Container>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}
