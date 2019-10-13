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
  cards: cardsAll,
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
  const [cards, setCards] = useState(cardsAll)

  useEffect(() => {
    setColumns(Immutable.fromJS(getOrdered(data)))
  }, [data])

  useEffect(() => {
    setCards(cardsAll)
  }, [cardsAll])

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

    const { map, pos, item } = reorderCards({
      map: columns,
      source,
      destination,
    })

    setCards(map)

    if (onChangeCard) {
      onChangeCard({
        id: item.toJS().id,
        pos: Number(pos),
      })
    }
  }

  const handleAddCard = (idList, value) => {
    const newPosition = cards.getIn([-1, "pos"])
      ? cards.getIn([-1, "pos"]) + INITIAL_POSITION
      : INITIAL_POSITION

    const newCard = Immutable.fromJS({
      id: _.uniqueId("card-"),
      title: author,
      idBoard,
      id_list: idList,
      data: value,
      labels: [],
      pos: Number(newPosition),
    })
    const updated = cards.update((items) => items.push(newCard))
    setCards(updated)
    if (onCreateCard) {
      onCreateCard({
        id_author: author,
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

    // const updatedCards = columns.updateIn([indexList, "cards"], (cards) => {
    //   const index = cards.findIndex((item) => item.get("id") === idCard)
    //   const updated = cards.setIn([index, "data"], value.content)
    //   return updated
    // })

    // setColumns(updatedCards)

    if (onEditCard) {
      onEditCard({ id: idCard, data: value, labels: [] })
    }
  }

  const handleDeleteColumn = (id) => {
    if (onDeleteColumn) {
      onDeleteColumn(id)
    }
  }

  const handleDeleteCard = (idCard, idColumn) => {
    const indexList = columns.findIndex((item) => item.get("id") === idColumn)

    // const updatedCards = columns.updateIn([indexList, "cards"], (cards) => {
    //   const updated = _.filter(cards.toJS(), (item) => item.id !== idCard)
    //   return Immutable.fromJS(updated)
    // })

    // setColumns(updatedCards)
    handleHideCardEditor()

    if (onDeleteCard) {
      onDeleteCard(idCard)
    }
  }

  const getCardsByListId = (idList) =>
    Immutable.fromJS(
      getOrdered(cards.filter((card) => card.get("id_list") === idList)),
    )

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
                    items={getCardsByListId(column.id).toJS()}
                    onAdd={handleAddCard}
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
  cards: PropTypes.object,
  onChangeCard: PropTypes.func,
  onChangeColumn: PropTypes.func,
  onEditColumn: PropTypes.func,
  onEditCard: PropTypes.func,
  onCreateColumn: PropTypes.func,
  onCreateCard: PropTypes.func,
  onDeleteColumn: PropTypes.func,
  onDeleteCard: PropTypes.func,
}
