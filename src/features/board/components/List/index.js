import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"

import { Droppable, Draggable } from "react-beautiful-dnd"
import NaturalDragAnimation from "natural-drag-animation-rbdnd"

import { Tile } from "../Tile"
import { AddNewTile } from "../AddNewTile"

import { DropZone, Container } from "./styled"

export const List = ({
  idBoard,
  items,
  listId,
  addable,
  onAdd,
  onCancel,
  editCardVisible,
  onEditCardToggle,
  onChangeCard,
  onDeleteCard,
}) => {
  const scrollRef = useRef(null)

  useEffect(() => {
    if (addable) {
      scrollRef.current.scrollTo(0, document.body.scrollHeight)
    }
  }, [addable])

  const handleOnChangeCard = (idCard, value) => {
    if (onChangeCard) {
      onChangeCard(idCard, listId, value)
    }
  }

  const handleOnDeleteCard = (idCard) => {
    if (onDeleteCard) {
      onDeleteCard(idCard, listId)
    }
  }

  return (
    <Droppable droppableId={listId}>
      {(dropProvided) => {
        return (
          <div {...dropProvided.droppableProps}>
            <Container ref={scrollRef}>
              <DropZone ref={dropProvided.innerRef}>
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(dragProvided, dragSnapshot) => (
                      <NaturalDragAnimation
                        style={dragProvided.draggableProps.style}
                        snapshot={dragSnapshot}
                      >
                        {(style) => (
                          <Tile
                            key={item.id}
                            ref={dragProvided.innerRef}
                            data={item}
                            provided={dragProvided}
                            style={style}
                            idBoard={idBoard}
                            editCardVisible={editCardVisible}
                            onEditCardToggle={onEditCardToggle}
                            onChangeCard={handleOnChangeCard}
                            onDelete={handleOnDeleteCard}
                          />
                        )}
                      </NaturalDragAnimation>
                    )}
                  </Draggable>
                ))}
                {dropProvided.placeholder}
                {addable && <AddNewTile onAdd={onAdd} onCancel={onCancel} />}
              </DropZone>
            </Container>
          </div>
        )
      }}
    </Droppable>
  )
}

List.propTypes = {
  items: PropTypes.array,
  listId: PropTypes.string,
  idBoard: PropTypes.string,
  addable: PropTypes.bool,
  onAdd: PropTypes.func,
  onCancel: PropTypes.func,
  editCardVisible: PropTypes.string,
  onEditCardToggle: PropTypes.func,
  onChangeCard: PropTypes.func,
  onDeleteCard: PropTypes.func,
}
