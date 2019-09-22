import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { logout } from "../../api"

export const useLogout = () => {
  const dispatch = useDispatch()

  const handleLogout = async () => {
    await dispatch(logout())
  }

  return handleLogout
}
