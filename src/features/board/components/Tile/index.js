import React, { useEffect, useState, memo, forwardRef, useRef } from "react"
import PropTypes from "prop-types"

import { compose } from "recompose"

import { Icon } from "antd"
import { InlineButton } from "@tasky/components"

import { CardEdit } from "../EditCard"

import { Tags } from "./Tags"
import { Author } from "./Author"
import { Priorities } from "./Priorities"

import {
  NameCard,
  Row,
  Action,
  Container,
  Content,
  Wrapper,
  Footer,
  InfoWrap,
} from "./styled"

const enhance = compose(
  memo,
  forwardRef,
)

export const Tile = enhance(
  (
    {
      data,
      idBoard,
      provided,
      style,
      editCardVisible,
      onEditCardToggle,
      onChangeCard,
      onDelete,
    },
    ref,
  ) => {
    const [visible, setVisible] = useState(false)
    const [editable, setEditable] = useState({})
    const [value, setValue] = useState(data.data)
    const refEdit = useRef(null)

    const handleVisible = () => setVisible(true)
    const handleHide = () => setVisible(false)

    const handleEdit = (e) => {
      e.preventDefault()

      if (onEditCardToggle) {
        onEditCardToggle(data.id)
      }
    }

    const handleCancelEdit = (e) => {
      e.preventDefault()

      const newData = {
        ...data,
        content: value,
      }

      if (onEditCardToggle) {
        onEditCardToggle(null)
      }

      if (onChangeCard) {
        onChangeCard(data.id, newData)
      }
    }

    const handleChangeTextArea = (e) => {
      setValue(e.target.value)
    }

    const handleDelete = () => {
      if (onDelete) {
        onDelete(data.id)
      }
    }

    useEffect(() => {
      if (editCardVisible === data.id && refEdit.current) {
        setEditable(refEdit.current.getBoundingClientRect())
      }
    }, [editCardVisible])

    return (
      <Wrapper
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        onMouseEnter={handleVisible}
        onMouseLeave={handleHide}
        ref={ref}
        style={style}
        to={`/b/${idBoard}/${data.id}`}
      >
        <Container ref={refEdit}>
          <Row>
            <Content>
              <Content>{data.data}</Content>
            </Content>
            {visible && (
              <Action onClick={handleEdit}>
                <InlineButton>
                  <Icon type="edit" />
                </InlineButton>
              </Action>
            )}
          </Row>
          <Footer>
            <Tags />
            <InfoWrap>
              <NameCard>{data.title}</NameCard>
              <Author />
            </InfoWrap>
          </Footer>
        </Container>
        {editCardVisible === data.id && (
          <CardEdit
            editable={editable}
            onChange={handleChangeTextArea}
            onCancel={handleCancelEdit}
            onDelete={handleDelete}
            value={value}
          />
        )}
      </Wrapper>
    )
  },
)

Tile.propTypes = {
  data: PropTypes.object,
  idBoard: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  provided: PropTypes.object,
  style: PropTypes.object,
  editCardVisible: PropTypes.string,
  onEditCardToggle: PropTypes.func,
  onChangeCard: PropTypes.func,
  onDelete: PropTypes.func,
}
