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

export const getNewPosition = (values, starIndex, endIndex) => {
  const map = values.toJS()
  let newPos = 0
  let update = false

  const startItem = map[endIndex - 1] ? Number(map[endIndex - 1].pos) : null
  const endItem = map[endIndex + 1] ? Number(map[endIndex + 1].pos) : null

  if (endItem && startItem) {
    if (starIndex > endIndex) {
      newPos = Number(
        (map[endIndex].pos - startItem) / NUMBER_DIVIDER + startItem,
      )
    } else {
      newPos = Number(
        (map[endIndex].pos - startItem) / NUMBER_DIVIDER + map[endIndex].pos,
      )
    }
    update = _.isEqual(
      Math.floor(startItem.toFixed(COUNT_AFTER_DOT)),
      Math.floor(endItem.toFixed(COUNT_AFTER_DOT)),
    )
  } else if (!endItem && startItem) {
    newPos = map[map.length - 1].pos + INITIAL_POSITION
  } else {
    newPos = map[0].pos / NUMBER_DIVIDER
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

  return { map: result, pos: posItem, item: result.get(endIndex) }
}

export const reorderCards = ({ map, source, destination }) => {
  const index = map.findIndex(
    (column) => column.get("id") === source.droppableId,
  )
  const indexNext = map.findIndex(
    (column) => column.get("id") === destination.droppableId,
  )

  const current = map.getIn([index, "cards"])
  const next = map.getIn([indexNext, "cards"])

  const target = current.get(source.index)

  if (source.droppableId === destination.droppableId) {
    const reordered = reorder(current, source.index, destination.index)

    const result = map.setIn([index, "cards"], reordered.map)
    return { map: result, item: reordered.item, pos: reordered.pos }
  }

  const updateCurrent = current.update((items) => {
    const cards = [...items.toJS()]
    cards.splice(source.index, 1)
    return Immutable.fromJS(cards)
  })

  const updateNext = next.update((items) => {
    const tar = target.toJS()
    const cards = [...items.toJS()]

    const newPos = getNewPosition(items, 0, destination.index)

    cards.splice(destination.index, 0, { ...tar, pos: newPos.pos })
    const result = Immutable.fromJS(cards)
    return {
      map: Immutable.fromJS(newPos.update ? updateOrder(result) : result),
      pos: newPos.pos,
    }
  })

  const result = map
    .setIn([index, "cards"], updateCurrent)
    .setIn([indexNext, "cards"], updateNext.map)

  return {
    map: result,
    item: result.getIn([indexNext, "cards", destination.index]),
    pos: updateNext.pos,
  }
}
