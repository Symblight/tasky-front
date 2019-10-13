import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import { Droppable, DragDropContext } from "react-beautiful-dnd"
import Immutable from "immutable"
import _ from "lodash"

import {
  reorder,
  getOrdered,
  reorderCards,
  INITIAL_POSITION,
  getNewPosition,
} from "@lib/utils/dnd-order"

import { Column } from "../Column"
import { AddNewList } from "../AddNewList"
import { DragScroll } from "../DragScroll"

import { useBoard } from "../../hooks"

import { QuickCardEditor, Wrapper } from "./styled"

export const Board = ({
  idBoard,
  columns: data,
  author,
  onChangeCard,
  onChangeColumn,
  onEditColumn,
  onEditCard,
  onCreateColumn,
  onCreateCard,
  onDeleteColumn,
  onDeleteCard,
}) => {
  const stateToggleBoard = useBoard()
  const [columns, setColumns] = useState(Immutable.fromJS(getOrdered(data)))

  useEffect(() => {
    setColumns(Immutable.fromJS(getOrdered(data)))
  }, [data])

  const onDragEnd = (result) => {
    if (!result.destination) {
      return
    }

    const { source } = result
    const { destination } = result

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return
    }

    if (result.type === "COLUMN") {
      const { map, item, pos } = reorder(
        columns,
        source.index,
        destination.index,
      )

      setColumns(map)
      if (onChangeColumn) {
        onChangeColumn({
          id: item.get("id"),
          pos: Number(pos),
        })
      }

      return
    }

    const ordered = reorderCards({ map: columns, source, destination })
    const oldPos = ordered.pos

    if (onChangeCard) {
      onChangeCard(ordered.map, {
        id: ordered.item.toJS().id,
        pos: Number(oldPos),
      })
    }

    setColumns(ordered.map)
  }

  const handleAddTile = (idList, value) => {
    const index = columns.findIndex((column) => column.get("id") === idList)
    const cards = columns.getIn([index, "cards"])
    const newPosition = cards.getIn([-1, "pos"])
      ? cards.getIn([-1, "pos"]) + INITIAL_POSITION
      : INITIAL_POSITION

    const newCard = Immutable.fromJS({
      id: _.uniqueId("card-"),
      title: author,
      idBoard,
      idList,
      data: value,
      labels: [],
      pos: Number(newPosition),
    })
    const updated = columns.updateIn([index, "cards"], (items) => {
      const newItems = [...items.toJS()]
      newItems.push(newCard)
      return Immutable.fromJS(newItems)
    })
    // setColumns(updated)
    if (onCreateCard) {
      onCreateCard(updated, {
        author,
        data: value,
        pos: Number(newPosition),
        labels: [],
        idList,
        idBoard,
      })
    }
  }

  const handleAddColumn = (value) => {
    const newPosition = columns.getIn([-1, "pos"])
      ? Number(columns.getIn([-1, "pos"])) + INITIAL_POSITION
      : INITIAL_POSITION

    setColumns(
      columns.update((lists) =>
        lists.push({ id: _.uniqueId("card-"), title: value, cards: [] }),
      ),
    )
    if (onCreateColumn) {
      onCreateColumn({ title: value, pos: Number(newPosition), idBoard })
    }
  }

  const handleEditTitle = (id, value) => {
    if (onEditColumn) {
      onEditColumn(id, value)
    }
  }

  const handleHideCardEditor = () => {
    const { onEditCardToggle } = stateToggleBoard

    if (onEditCardToggle) {
      onEditCardToggle()
    }
  }

  const handleEditCard = (idCard, idList, value) => {
    const indexList = columns.findIndex((item) => item.get("id") === idList)

    const updatedCards = columns.updateIn([indexList, "cards"], (cards) => {
      const index = cards.findIndex((item) => item.get("id") === idCard)
      const updated = cards.setIn([index, "data"], value.content)
      return updated
    })

    // setColumns(updatedCards)

    if (onEditCard) {
      onEditCard(updatedCards, { id: idCard, data: value, labels: [] })
    }
  }

  const handleDeleteColumn = (id) => {
    if (onDeleteColumn) {
      onDeleteColumn(id)
    }
  }

  const handleDeleteCard = (idCard, idColumn) => {
    const indexList = columns.findIndex((item) => item.get("id") === idColumn)

    const updatedCards = columns.updateIn([indexList, "cards"], (cards) => {
      const updated = _.filter(cards.toJS(), (item) => item.id !== idCard)
      return Immutable.fromJS(updated)
    })

    // setColumns(updatedCards)
    handleHideCardEditor()

    if (onDeleteCard) {
      onDeleteCard(updatedCards, idCard)
    }
  }

  return (
    <>
      {stateToggleBoard.editCardVisible && (
        <QuickCardEditor onClick={handleHideCardEditor} />
      )}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="board" type="COLUMN" direction="horizontal">
          {(provided) => (
            <Wrapper ref={provided.innerRef} {...provided.droppableProps}>
              <DragScroll>
                {columns.toJS().map((column, index) => (
                  <Column
                    key={column.id}
                    id={column.id}
                    index={index}
                    title={column.title}
                    items={column.cards}
                    onAdd={handleAddTile}
                    onEditTitle={handleEditTitle}
                    idBoard={idBoard}
                    onChangeCard={handleEditCard}
                    onDeleteColumn={handleDeleteColumn}
                    onDeleteCard={handleDeleteCard}
                    {...stateToggleBoard}
                  />
                ))}
                {provided.placeholder}
                <AddNewList onAdd={handleAddColumn} />
              </DragScroll>
            </Wrapper>
          )}
        </Droppable>
      </DragDropContext>
    </>
  )
}

Board.propTypes = {
  idBoard: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  author: PropTypes.string,
  columns: PropTypes.object,
  onChangeCard: PropTypes.func,
  onChangeColumn: PropTypes.func,
  onEditColumn: PropTypes.func,
  onEditCard: PropTypes.func,
  onCreateColumn: PropTypes.func,
  onCreateCard: PropTypes.func,
  onDeleteColumn: PropTypes.func,
  onDeleteCard: PropTypes.func,
}
