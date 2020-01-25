import { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"

import { auth, editUser } from "../../api"

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

  const hanbleChangeUser = async (data) => {
    try {
      await dispatch(editUser(data))
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    if (!selectors.attempt) {
      handleAuth()
    }
  }, [])

  return {
    ...selectors,
    user: selectors.user,
    onEdit: hanbleChangeUser,
  }
}
