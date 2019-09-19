const STATUS_CODE_UNAUTHORIZED = 401
const STATUS_CODE_NOT_FOUND = 404
const STATUS_CODE_BAD_GATEWAY = 502

export const apiError = ({ dispatch }) => (next) => (action) => {
  if (action.payload) {
    if (action.payload.status === STATUS_CODE_UNAUTHORIZED) {
      if (action.payload.error) {
        dispatch({ type: "LOGOUT_SUCCESS" })
      } else {
        // To avoid getting stuck in middleware.
        return next(action)
      }
    } else if (action.payload.status === STATUS_CODE_UNAUTHORIZED) {
      const errorMsg = "Your session has expired. Please login again."

      dispatch({ type: "LOGOUT_SUCCESS" })

      // dispatch(logout(true, errorMsg))
    } else if (action.payload.status === STATUS_CODE_BAD_GATEWAY) {
      dispatch({ type: "LOGOUT_SUCCESS" })
    }
  }
  // So the middleware doesn't get applied to every single action
  return next(action)
}
