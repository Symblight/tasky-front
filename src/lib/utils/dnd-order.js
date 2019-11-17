import Immutable from "immutable"
import _ from "lodash"

export const INITIAL_POSITION = 65535
const NUMBER_DIVIDER = 2
const COUNT_AFTER_DOT = 2

const getCount = (value) =>
  value.toString().includes(".")
    ? value
        .toString()
        .split(".")
        .pop().length
    : 0

export const getNewPosition = (values, startIndex, endIndex) => {
  const map = values.toJS()
  let newPos = 0
  let update = false

  const startItem = map[endIndex - 1] ? Number(map[endIndex - 1].pos) : null
  const endItem = map[endIndex + 1] ? Number(map[endIndex + 1].pos) : null

  if (endItem && startItem) {
    if (startIndex > endIndex) {
      newPos = Number(
        (startItem - map[endIndex].pos) / NUMBER_DIVIDER + map[endIndex].pos,
      )
    } else if (startIndex < endIndex) {
      newPos = Number(
        (endItem - map[endIndex].pos) / NUMBER_DIVIDER +
          Number(map[endIndex].pos),
      )
    }
    update = _.isEqual(
      Math.floor(startItem.toFixed(COUNT_AFTER_DOT)),
      Math.floor(endItem.toFixed(COUNT_AFTER_DOT)),
    )
  } else if (!endItem && startItem) {
    newPos = Number(map[map.length - 1].pos) + INITIAL_POSITION
  } else if (endItem && !startItem) {
    newPos = Number(map[0].pos) / NUMBER_DIVIDER
  } else {
    newPos = INITIAL_POSITION
  }

  return { pos: Number(newPos).toFixed(COUNT_AFTER_DOT), update }
}

export const getNewPositionAnotherCards = (values, startIndex, endIndex) => {
  const map = values.toJS()
  let newPos = 0
  let update = false
  let startItem = null
  let endItem = null

  if (startIndex > endIndex) {
    startItem = map[endIndex] ? Number(map[endIndex].pos) : null
    endItem = map[endIndex + 1] ? Number(map[endIndex + 1].pos) : null
  } else if (startIndex < endIndex) {
    startItem = map[endIndex - 1] ? Number(map[endIndex - 1].pos) : null
    endItem = map[endIndex] ? Number(map[endIndex].pos) : null
  }

  if (endItem && startItem) {
    if (startIndex > endIndex) {
      newPos = Number((startItem - endItem) / NUMBER_DIVIDER + Number(endItem))
    } else if (startIndex < endIndex) {
      newPos = Number(
        (endItem - startItem) / NUMBER_DIVIDER + Number(startItem),
      )
    }
    update = _.isEqual(
      Math.floor(startItem.toFixed(COUNT_AFTER_DOT)),
      Math.floor(endItem.toFixed(COUNT_AFTER_DOT)),
    )
  } else if (!endItem && startItem) {
    newPos = Number(map[map.length - 1].pos) + INITIAL_POSITION
  } else if (endItem && !startItem) {
    newPos = Number(map[0].pos) / NUMBER_DIVIDER
  } else {
    newPos = INITIAL_POSITION
  }

  return { pos: Number(newPos).toFixed(COUNT_AFTER_DOT), update }
}

export const getOrdered = (values) => {
  if (_.isEmpty(values)) return []

  const lists = _.sortBy(values.toJS(), (item) => item.pos)

  return lists.map((list) => ({
    ...list,
    cards: _.sortBy(list.cards, (item) => item.pos),
  }))
}

const getCardsByListId = (cards, idList) => {
  const orderedCards = getOrdered(
    cards.filter((card) => card.get("id_list") === idList),
  )
  return Immutable.fromJS(orderedCards)
}

export const updateOrder = (values) => {
  const updateMap = values.update((items) => {
    const list = [...items.toJS()]
    const update = list.map((value, index) => ({
      ...value,
      pos: INITIAL_POSITION * (index + 1),
    }))
    return Immutable.fromJS(update)
  })

  return updateMap
}

export const reorder = (list, startIndex, endIndex) => {
  const { pos, update } = getNewPosition(list, startIndex, endIndex)

  const updateMap = list.update((items) => {
    const values = [...items.toJS()]
    const [removed] = values.splice(startIndex, 1)
    values.splice(endIndex, 0, { ...removed, pos: Number(pos) })
    return Immutable.fromJS(values)
  })

  const posItem = updateMap.getIn([endIndex, "pos"])
  const result = update ? updateOrder(updateMap) : updateMap

  return { map: result, pos: posItem, item: result.get(endIndex), update }
}

export const reorderCards = ({
  lists,
  cards,
  source,
  destination,
  draggableId,
}) => {
  const index = lists.findIndex(
    (list) => list.get("uuid") === source.droppableId,
  )
  const indexNext = lists.findIndex(
    (list) => list.get("uuid") === destination.droppableId,
  )

  if (source.droppableId === destination.droppableId) {
    const listId = lists.getIn([index, "id"])
    const cardsByList = getCardsByListId(cards, listId)
    const { map, item, pos, update } = reorder(
      cardsByList,
      source.index,
      destination.index,
    )

    const otherCards = cards.filter((list) => list.get("id_list") !== listId)
    const updated = otherCards.merge(map)

    return { map: updated, item, pos, update }
  }

  const idList = lists.getIn([indexNext, "id"])

  const cardIndexList = cards.findIndex(
    (card) => card.get("uuid") === draggableId,
  )

  const newCards = cards.setIn([cardIndexList, "id_list"], idList)
  const cardsByList = getCardsByListId(newCards, idList)

  const flag = cardsByList.toJS().length / NUMBER_DIVIDER > destination.index
  const start = !flag ? destination.index + 1 : -1

  const { pos, update } = getNewPositionAnotherCards(
    cardsByList,
    start,
    destination.index,
  )

  const cardsOrderedList = update ? updateOrder(cardsByList) : cardsByList
  const cardIndex = cardsOrderedList.findIndex(
    (card) => card.get("uuid") === draggableId,
  )

  const result = Immutable.fromJS(
    getOrdered(cardsOrderedList.setIn([cardIndex, "pos"], Number(pos))),
  )

  const otherCards = newCards.filter((list) => list.get("id_list") !== idList)
  const updated = otherCards.merge(result)

  const cardIndexResult = updated.findIndex(
    (card) => card.get("uuid") === draggableId,
  )

  return {
    map: updated,
    item: updated.getIn([cardIndexResult]),
    pos: updated.getIn([cardIndexResult, "pos"]),
    update,
  }
}
