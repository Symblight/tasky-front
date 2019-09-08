import React from "react"
import PropTypes from "prop-types"

import { Helmet } from "react-helmet"

export const TitlePage = ({ name, description }) => {
  const { title } = window.config
  return (
    <Helmet>
      <title>{`${name} | ${title}`}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}

TitlePage.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
}
