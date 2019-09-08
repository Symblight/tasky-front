import { useState, useCallback } from "react"

export const useBoard = () => {
  const [newCard, setNewCard] = useState(null)
  const [editTitle, setEditTitle] = useState(null)
  const [editCard, setEditCard] = useState(null)

  const handleNewCard = useCallback((column) => setNewCard(column), [])
  const handleEditTitle = useCallback((column) => setEditTitle(column), [])
  const handleEditCard = useCallback((card) => setEditCard(card), [])

  return {
    newCardVisible: newCard,
    editTitleVisible: editTitle,
    onNewCardToggle: handleNewCard,
    onTitleColumnToggle: handleEditTitle,
    editCardVisible: editCard,
    onEditCardToggle: handleEditCard,
  }
}
