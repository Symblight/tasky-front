import { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"

import { auth } from "../../api"

export const useUser = () => {
  const dispatch = useDispatch()
  const selectors = useSelector((state) => {
    const { user } = state

    return {
      loading: user.getIn(["auth", "loading"]),
      authenticated: user.getIn(["auth", "authenticated"]),
      user: user.getIn(["auth", "user"]),
      attempt: user.getIn(["auth", "authAttempt"]),
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
