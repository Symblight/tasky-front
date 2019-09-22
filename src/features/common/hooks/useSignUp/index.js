import { useDispatch } from "react-redux"

import { signUp } from "../../api"

export const useSignUp = () => {
  const dispatch = useDispatch()

  const handleSignUpn = async (data) => {
    await dispatch(signUp(data))
  }

  return handleSignUpn
}
