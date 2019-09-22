import { useDispatch } from "react-redux"

import { signIn } from "../../api"

export const useSignIn = () => {
  const dispatch = useDispatch()

  const handleSignIn = async (data) => {
    await dispatch(signIn(data))
  }

  return handleSignIn
}
