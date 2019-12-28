import React, { useEffect } from "react"
import PropTypes from "prop-types"

import { useToken } from "../hooks"

export const Redirect = ({ match, history }) => {
  const sendToken = useToken()

  useEffect(() => {
    sendToken(match.params.token, match.params.idboard)
      .then(() => history.push(`/b/${match.params.idboard}`))
      .catch((error) => console.error(error.message))
  }, [match])

  return <div>Redirect</div>
}

Redirect.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
}
