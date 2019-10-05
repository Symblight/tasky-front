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

const getNewPosition = (values, index) => {
  const map = values.toJS()
  const posStart = map[index - 1] ? Number(values.getIn([index - 1, "pos"])) : 0
  const posIndexEnd = Number(values.getIn([index, "pos"]))
  const posEnd = !_.isNaN(posIndexEnd) ? posIndexEnd : 0

  const isInitial = posStart === 0 && posEnd === 0

  const newPos = !isInitial
    ? Number((posEnd - posStart) / NUMBER_DIVIDER + posStart)
    : INITIAL_POSITION

  const update = _.isEqual(
    Math.floor(posEnd.toFixed(COUNT_AFTER_DOT)),
    Math.floor(posStart.toFixed(COUNT_AFTER_DOT)),
  )

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
  const newPos = getNewPosition(list, endIndex)

  const updateMap = list.update((items) => {
    const values = [...items.toJS()]
    const [removed] = values.splice(startIndex, 1)
    values.splice(endIndex, 0, { ...removed, pos: Number(newPos.pos) })
    return Immutable.fromJS(values)
  })

  const pos = updateMap.getIn([endIndex, "pos"])
  const result = newPos.update ? updateOrder(updateMap) : updateMap

  return { map: result, pos, item: result.get(endIndex) }
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

    const newPos = getNewPosition(items, destination.index)

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
