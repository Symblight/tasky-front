import { useDispatch, useSelector } from "react-redux"

import { getCard } from "../../api"

export function useApiCard() {
  const dispatch = useDispatch()
  const selector = useSelector((state) => {
    const { board } = state
    return board.getIn(["card"])
  })

  const handleLoadCard = async (id) => {
    try {
      if (id) {
        await dispatch(getCard(id))
      }
    } catch (error) {
      console.error(error)
    }
  }
  return {
    onLoad: handleLoadCard,
    card: selector,
    loading: selector.loading,
  }
}
