import { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"

import { auth } from "../../api"

export const useUser = () => {
  const dispatch = useDispatch()
  const selectors = useSelector((state) => {
    const {
      user: { auth: authState },
    } = state

    return {
      loading: authState.get("loading"),
      authenticated: authState.get("authenticated"),
      user: authState.get("user"),
      attempt: authState.get("authAttempt"),
    }
  })

  const handleAuth = async () => {
    await dispatch(auth())
  }

  useEffect(() => {
    if (!selectors.attempt) {
      handleAuth()
    }
  }, [])

  return selectors
}
