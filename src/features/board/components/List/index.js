import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"

import { Droppable, Draggable } from "react-beautiful-dnd"
import NaturalDragAnimation from "natural-drag-animation-rbdnd"

import { Tile } from "../Tile"
import { AddNewTile } from "../AddNewTile"

import { DropZone, Container } from "./styled"

export function List({
  idBoard,
  items,
  listId,
  addable,
  onAdd,
  onCancel,
  editCardVisible,
  onEditCardToggle,
  uuidBoard,
}) {
  const scrollRef = useRef(null)

  useEffect(() => {
    if (addable) {
      scrollRef.current.scrollTo(0, document.body.scrollHeight)
    }
  }, [addable])

  return (
    <Droppable droppableId={listId}>
      {(dropProvided) => {
        return (
          <div {...dropProvided.droppableProps}>
            <Container ref={scrollRef}>
              <DropZone ref={dropProvided.innerRef}>
                {items.map((item, index) => (
                  <Draggable
                    key={item.uuid}
                    draggableId={item.uuid}
                    index={index}
                    isDragDisabled={Boolean(editCardVisible)}
                  >
                    {(dragProvided, dragSnapshot) => (
                      <NaturalDragAnimation
                        style={dragProvided.draggableProps.style}
                        snapshot={dragSnapshot}
                      >
                        {(style) => (
                          <Tile
                            key={item.uuid}
                            ref={dragProvided.innerRef}
                            data={item}
                            provided={dragProvided}
                            style={style}
                            idBoard={idBoard}
                            uuidBoard={uuidBoard}
                            editCardVisible={editCardVisible}
                            onEditCardToggle={onEditCardToggle}
                            listId={listId}
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
  uuidBoard: PropTypes.string,
  items: PropTypes.array,
  listId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  idBoard: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  addable: PropTypes.bool,
  onAdd: PropTypes.func,
  onCancel: PropTypes.func,
  editCardVisible: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onEditCardToggle: PropTypes.func,
}
