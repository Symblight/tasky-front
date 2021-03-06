import React, { memo, useState, useCallback, useEffect } from "react"
import PropTypes from "prop-types"

import { Icon, Input, Popover } from "antd"
import { Draggable } from "react-beautiful-dnd"
import { compose } from "recompose"

import { InlineButton } from "@tasky/components"

import { List } from "../List"
import { ColumnContent } from "../ColumnContent"

import { WrapHeader, Action, Header, Wrapper, HeaderTitle } from "./styled"

const enhance = compose(memo)

function View({
  title,
  index,
  items,
  onAdd,
  id,
  newCardVisible,
  onNewCardToggle,
  editTitleVisible,
  onTitleColumnToggle,
  onEditTitle,
  idBoard,
  editCardVisible,
  onEditCardToggle,
  onDeleteColumn,
  uuidBoard,
}) {
  const [valueHeader, setValueHeader] = useState({ title, id })

  useEffect(() => {
    setValueHeader({ title, id })
  }, [title])

  const handleChange = useCallback(
    (event) =>
      setValueHeader({ title: event.target.value, id: valueHeader.id }),
    [],
  )

  const handleAddButtonToggle = () => {
    if (onNewCardToggle) {
      onNewCardToggle(id)
    }
  }

  const handleAddButtonToggleCancel = () => {
    if (onNewCardToggle) {
      onNewCardToggle()
    }
  }

  const handleOnAdd = (value) => {
    if (onAdd) {
      onAdd(id, value)
      onNewCardToggle()
    }
  }

  const handleOnEditHeader = () => {
    id !== valueHeader.title && onEditTitle(id, valueHeader.title)

    if (onTitleColumnToggle) {
      onTitleColumnToggle()
    }
  }

  const handleClickToggleHeader = () => {
    if (onTitleColumnToggle) {
      onTitleColumnToggle(id)
    }
  }

  const handleOnDeleteColumn = () => {
    if (onDeleteColumn) {
      onDeleteColumn(id)
    }
  }

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps}>
          <Wrapper>
            <Header {...provided.dragHandleProps}>
              {editTitleVisible === id ? (
                <Input
                  value={valueHeader.title}
                  onChange={handleChange}
                  onBlur={handleOnEditHeader}
                />
              ) : (
                <WrapHeader>
                  <HeaderTitle onClick={handleClickToggleHeader}>
                    {valueHeader.title}
                  </HeaderTitle>
                  <Popover
                    placement="rightTop"
                    title={<span>Меню</span>}
                    content={ColumnContent(handleOnDeleteColumn)}
                    trigger="click"
                  >
                    <InlineButton>
                      <Icon type="ellipsis" />
                    </InlineButton>
                  </Popover>
                </WrapHeader>
              )}
            </Header>
            <List
              items={items}
              listId={id}
              internalScroll
              dropProvider={provided}
              idBoard={idBoard}
              uuidBoard={uuidBoard}
              addable={newCardVisible === id}
              onAdd={handleOnAdd}
              onCancel={handleAddButtonToggleCancel}
              editCardVisible={editCardVisible}
              onEditCardToggle={onEditCardToggle}
            />
            {newCardVisible !== id && (
              <Action onClick={handleAddButtonToggle}>
                <Icon type="plus" />
                Создать карточку
              </Action>
            )}
          </Wrapper>
        </div>
      )}
    </Draggable>
  )
}

View.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
  uuidBoard: PropTypes.string,
  index: PropTypes.number,
  onAdd: PropTypes.func,
  onEditTitle: PropTypes.func,
  newCardVisible: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onNewCardToggle: PropTypes.func,
  editTitleVisible: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onTitleColumnToggle: PropTypes.func,
  idBoard: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  editCardVisible: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onEditCardToggle: PropTypes.func,
  onDeleteColumn: PropTypes.func,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export const Column = enhance(View)
