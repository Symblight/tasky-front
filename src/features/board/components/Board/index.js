import React, { useState } from "react"
import PropTypes from "prop-types"

import { Droppable, DragDropContext } from "react-beautiful-dnd"
import uuid from "uuid"
import _ from "lodash"

import { authorQuoteMap } from "@lib/mocks/board"

import { Column } from "../Column"
import { AddNewList } from "../AddNewList"
import { DragScroll } from "../DragScroll"

import reorder, { reorderQuoteMap } from "../../reorder"

import { useBoard } from "../../hooks"

import { QuickCardEditor, Wrapper } from "./styled"

export const Board = ({ idBoard }) => {
  const [columns, setColumns] = useState(authorQuoteMap)
  const [ordered, setOrdered] = useState(Object.keys(authorQuoteMap))

  const stateToggleBoard = useBoard()

  const onDragEnd = (result) => {
    if (result.combine) {
      if (result.type === "COLUMN") {
        const shallow = [...ordered]
        shallow.splice(result.source.index, 1)
        setOrdered(shallow)
        return
      }

      const column = columns[result.source.droppableId]
      const withQuoteRemoved = [...column]
      withQuoteRemoved.splice(result.source.index, 1)
      const newColumns = {
        ...columns,
        [result.source.droppableId]: withQuoteRemoved,
      }
      setColumns(newColumns)
      return
    }

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
      const newOrdered = reorder(ordered, source.index, destination.index)

      setOrdered(newOrdered)

      return
    }

    const data = reorderQuoteMap({
      quoteMap: columns,
      source,
      destination,
    })

    setColumns(data.quoteMap)
  }

  const handleAddTile = (title, value) => {
    const editColumn = [
      ...columns[title],
      {
        author: {
          name: "Alexey",
          id: 24,
        },
        content: value,
        id: uuid(1), // TEST
      },
    ]
    setColumns((prevState) => {
      return {
        ...prevState,
        [title]: [...editColumn],
      }
    })
  }

  const handleAddColumn = (value) => {
    const editColumns = { ...columns, [value]: [] }
    const newOrdered = [...ordered]
    newOrdered.push(value)
    setColumns(editColumns)
    setOrdered(newOrdered)
  }

  const handleEditTitle = (title, value) => {
    const editColumns = { ...columns, [value]: [...columns[title]] }
    delete editColumns[title]

    const index = ordered.findIndex((val) => val === title)
    const newOrdered = [...ordered]
    newOrdered[index] = value

    setColumns(editColumns)
    setOrdered(newOrdered)
  }

  const handleHideCardEditor = () => {
    const { onEditCardToggle } = stateToggleBoard

    if (onEditCardToggle) {
      onEditCardToggle()
    }
  }

  const handleEditCard = (idCard, idList, value) => {
    const items = [...columns[idList]]

    const itemIndex = items.findIndex((item) => item.id === idCard)
    items[itemIndex] = value

    const editColumns = { ...columns, [idList]: items }
    setColumns(editColumns)
  }

  const handleDeleteColumn = (id) => {
    const editColumns = { ...columns }
    delete editColumns[id]

    const newOrdered = _.filter(ordered, (item) => item !== id)

    setColumns(editColumns)
    setOrdered(newOrdered)
  }

  const handleDeleteCard = (idCard, idColumn) => {
    const items = [...columns[idColumn]]

    const newItems = _.filter(items, (item) => item.id !== idCard)

    const editColumns = { ...columns, [idColumn]: newItems }
    setColumns(editColumns)
    handleHideCardEditor()
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
                {ordered.map((key, index) => (
                  <Column
                    key={key}
                    index={index}
                    title={key}
                    items={columns[key]}
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
  idBoard: PropTypes.string,
}
