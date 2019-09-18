import React, { memo, useState, useCallback } from "react"
import PropTypes from "prop-types"

import { Icon, Input, Popover } from "antd"
import { Draggable } from "react-beautiful-dnd"
import { compose } from "recompose"

import { InlineButton } from "@tasky/components"

import { List } from "../List"
import { ColumnContent } from "../ColumnContent"

import { WrapHeader, Action, Header, Wrapper, HeaderTitle } from "./styled"

const enhance = compose(memo)

const View = ({
  title,
  index,
  items,
  onAdd,
  newCardVisible,
  onNewCardToggle,
  editTitleVisible,
  onTitleColumnToggle,
  onEditTitle,
  idBoard,
  editCardVisible,
  onEditCardToggle,
  onChangeCard,
  onDeleteColumn,
  onDeleteCard,
}) => {
  const [valueHeader, setValueHeader] = useState(title)

  const handleChange = useCallback(
    (event) => setValueHeader(event.target.value),
    [],
  )

  const handleAddButtonToggle = () => {
    if (onNewCardToggle) {
      onNewCardToggle(title)
    }
  }

  const handleAddButtonToggleCancel = () => {
    if (onNewCardToggle) {
      onNewCardToggle()
    }
  }

  const handleOnAdd = (value) => {
    if (onAdd) {
      onAdd(title, value)
      onNewCardToggle()
    }
  }

  const handleOnEditHeader = () => {
    title !== valueHeader && onEditTitle(title, valueHeader)

    if (onTitleColumnToggle) {
      onTitleColumnToggle()
    }
  }

  const handleClickToggleHeader = () => {
    if (onTitleColumnToggle) {
      onTitleColumnToggle(title)
    }
  }

  const handleOnDeleteColumn = () => {
    if (onDeleteColumn) {
      onDeleteColumn(title)
    }
  }

  return (
    <Draggable draggableId={title} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps}>
          <Wrapper>
            <Header {...provided.dragHandleProps}>
              {editTitleVisible === title ? (
                <Input
                  value={valueHeader}
                  onChange={handleChange}
                  onBlur={handleOnEditHeader}
                />
              ) : (
                <WrapHeader>
                  <HeaderTitle onClick={handleClickToggleHeader}>
                    {valueHeader}
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
              listId={title}
              internalScroll
              dropProvider={provided}
              idBoard={idBoard}
              addable={newCardVisible === title}
              onAdd={handleOnAdd}
              onCancel={handleAddButtonToggleCancel}
              editCardVisible={editCardVisible}
              onEditCardToggle={onEditCardToggle}
              onChangeCard={onChangeCard}
              onDeleteCard={onDeleteCard}
            />
            {newCardVisible !== title && (
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
  index: PropTypes.number,
  onAdd: PropTypes.func,
  onEditTitle: PropTypes.func,
  newCardVisible: PropTypes.string,
  onNewCardToggle: PropTypes.func,
  editTitleVisible: PropTypes.string,
  onTitleColumnToggle: PropTypes.func,
  idBoard: PropTypes.string,
  editCardVisible: PropTypes.string,
  onEditCardToggle: PropTypes.func,
  onChangeCard: PropTypes.func,
  onDeleteColumn: PropTypes.func,
  onDeleteCard: PropTypes.func,
}

export const Column = enhance(View)
