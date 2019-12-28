import { useDispatch } from "react-redux"
import { sendTokenUser } from "../../api"

export function useToken() {
  const dispatch = useDispatch()

  const handleAuth = async (token, idBoard) => {
    await dispatch(sendTokenUser(token, idBoard))
  }

  return handleAuth
}
