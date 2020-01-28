import Immitable from "immutable"

const reorder = (list, startIndex, endIndex) => {
  const result = [...list]
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

export default reorder

export const reorderQuoteMap = ({ quoteMap, source, destination }) => {
  const current = [...quoteMap[source.droppableId]]
  const next = [...quoteMap[destination.droppableId]]
  const target = current[source.index]

  if (source.droppableId === destination.droppableId) {
    const reordered = reorder(current, source.index, destination.index)
    const result = {
      ...quoteMap,
      [source.droppableId]: reordered,
    }
    return {
      quoteMap: result,
    }
  }

  current.splice(source.index, 1)

  next.splice(destination.index, 0, target)

  const result = {
    ...quoteMap,
    [source.droppableId]: current,
    [destination.droppableId]: next,
  }

  return {
    quoteMap: result,
  }
}