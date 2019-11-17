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
} from "@lib/utils/dnd-order"

import { Column } from "../Column"
import { AddNewList } from "../AddNewList"
import { DragScroll } from "../DragScroll"
import { ProviderCard } from "../ProviderCard"

import { useBoard } from "../../hooks"

import { QuickCardEditor, Wrapper } from "./styled"

export function Board({
  idBoard,
  uuidBoard,
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
  onSelectColor,
  labels,
}) {
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

      setColumns(map)
      if (onChangeColumn) {
        onChangeColumn({
          uuid: map.getIn([destination.index, "uuid"]),
          pos: Number(pos),
        })
      }

      return
    }

    const { map, pos, item, update } = reorderCards({
      lists: columns,
      cards,
      source,
      destination,
      draggableId: result.draggableId,
    })
    setCards(map)

    if (onChangeCard) {
      onChangeCard({
        uuid: item.get("uuid"),
        pos: Number(pos),
        update,
        id_list: item.get("id_list"),
      })
    }
  }

  const handleAddCard = (idList, value) => {
    const indexList = columns.findIndex((item) => item.get("uuid") === idList)
    const cardsByList = getCardsByListId(columns.getIn([indexList, "id"]))
    const newPosition = cardsByList.getIn([-1, "pos"])
      ? cardsByList.getIn([-1, "pos"]) + INITIAL_POSITION
      : INITIAL_POSITION

    const newCard = Immutable.fromJS({
      uuid: _.uniqueId("card-"),
      title: author,
      idBoard: uuidBoard,
      id_list: columns.getIn([indexList, "id"]),
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
        idList: columns.getIn([indexList, "id"]),
        idBoard: uuidBoard,
      })
    }
  }

  const handleAddColumn = (value) => {
    const newPosition = columns.getIn([-1, "pos"])
      ? Number(columns.getIn([-1, "pos"])) + INITIAL_POSITION
      : INITIAL_POSITION

    setColumns(
      columns.update((lists) =>
        lists.push({ uuid: _.uniqueId("new-list-"), title: value }),
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

  const handleEditCard = (idCard, value) => {
    if (onEditCard) {
      onEditCard({ uuid: idCard, data: value.data, labels: [] })
    }
  }

  const handleDeleteColumn = (id) => {
    if (onDeleteColumn) {
      onDeleteColumn(id)
    }
  }

  const handleDeleteCard = (idCard) => {
    handleHideCardEditor()

    if (onDeleteCard) {
      onDeleteCard(idCard)
    }
  }

  const handleSelectColor = (value, id) => {
    if (onSelectColor) {
      onSelectColor(value, uuidBoard, id)
    }
  }

  const getCardsByListId = (idList) => {
    const orderedCards = getOrdered(
      cards.filter((card) => card.get("id_list") === idList),
    )
    return Immutable.fromJS(orderedCards)
  }

  return (
    <ProviderCard
      onAddLabel={handleSelectColor}
      onChangeCard={handleEditCard}
      onDelete={handleDeleteCard}
      labels={labels}
    >
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
                    key={column.uuid}
                    id={column.uuid}
                    index={index}
                    title={column.title}
                    items={getCardsByListId(column.id).toJS()}
                    onAdd={handleAddCard}
                    onEditTitle={handleEditTitle}
                    idBoard={idBoard}
                    onDeleteColumn={handleDeleteColumn}
                    uuidBoard={uuidBoard}
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
    </ProviderCard>
  )
}

Board.propTypes = {
  idBoard: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  author: PropTypes.string,
  columns: PropTypes.object,
  labels: PropTypes.object,
  cards: PropTypes.object,
  onChangeCard: PropTypes.func,
  onChangeColumn: PropTypes.func,
  onEditColumn: PropTypes.func,
  onEditCard: PropTypes.func,
  onCreateColumn: PropTypes.func,
  onCreateCard: PropTypes.func,
  onDeleteColumn: PropTypes.func,
  onDeleteCard: PropTypes.func,
  onSelectColor: PropTypes.func,
  uuidBoard: PropTypes.string,
}
