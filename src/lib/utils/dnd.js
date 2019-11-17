import Immutable from "immutable"
import _ from "lodash"

export const getOrdered = (values) => {
  const lists = _.sortBy(values, (item) => item.pos)
  return lists.map((list) => ({
    ...list,
    cards: _.sortBy(list.cards, (item) => item.pos),
  }))
}

const updatePosition = (values) =>
  values.update((items) =>
    items.map((item, index) => item.set("pos", index * 10)),
  )

export const reorderPos = (lists, startIndex, endIndex) => {
  const result = Immutable.fromJS([...lists])

  const updateMap = result.update((items) => {
    const map = [...items.toJS()]
    const [removed] = map.splice(startIndex, 1)
    map.splice(endIndex, 0, removed)
    return Immutable.fromJS(map)
  })

  const newPosMap = updateMap.update((items) =>
    items.map((item, index) => item.set("pos", index * 10)),
  )

  return { map: newPosMap.toJS(), item: newPosMap.get(endIndex).toJS() }
}

export const reorderCards = ({ cardsMap, source, destination }) => {
  const map = Immutable.fromJS([...cardsMap])

  const index = map.findIndex(
    (column) => column.get("title") === source.droppableId,
  )
  const indexNext = map.findIndex(
    (column) => column.get("title") === destination.droppableId,
  )

  const current = map.getIn([index, "cards"])
  const next = map.getIn([indexNext, "cards"])

  const target = current.get(source.index)

  if (source.droppableId === destination.droppableId) {
    const reordered = reorderPos(
      getOrdered(current.toJS()),
      source.index,
      destination.index,
    )
    const result = map.setIn([index, "cards"], reordered.map)
    return { map: result.toJS(), item: reordered.item }
  }

  const updateCurrent = current.update((items) => {
    const cards = [...items.toJS()]
    cards.splice(source.index, 1)
    return Immutable.fromJS(cards)
  })

  const updateNext = next.update((items) => {
    const tar = target.toJS()
    const cards = [...items.toJS()]
    cards.splice(destination.index, 0, tar)
    return Immutable.fromJS(cards)
  })

  const result = map
    .setIn([index, "cards"], updatePosition(updateCurrent))
    .setIn([indexNext, "cards"], updatePosition(updateNext))

  return {
    map: result.toJS(),
    item: result.getIn([indexNext, "cards", destination.index]).toJS(),
  }
}
