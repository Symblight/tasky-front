import { useContext } from "react"
import { Context as DefaultContext } from "../Context"

export const useCard = (Context) => useContext(Context || DefaultContext)
