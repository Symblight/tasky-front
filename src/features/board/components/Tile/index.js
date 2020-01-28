import React, { useEffect, useState, memo, forwardRef, useRef } from "react"
import PropTypes from "prop-types"

import { compose } from "recompose"
import _ from "lodash"

import { Icon } from "antd"
import { InlineButton } from "@tasky/components"

import { CardEdit } from "../EditCard"
import { useCard } from "../ProviderCard"
import { Tags } from "./Tags"
import { Author } from "./Author"

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

function Index(
  {
    data,
    listId,
    provided,
    uuidBoard,
    style,
    editCardVisible,
    onEditCardToggle,
  },
  ref,
) {
  const { onDelete, onAddLabel, onChangeCard, labels, members } = useCard()
  const [visible, setVisible] = useState(false)
  const [editable, setEditable] = useState({})
  const [value, setValue] = useState(data.data)
  const refEdit = useRef(null)

  const handleVisible = () => setVisible(true)
  const handleHide = () => setVisible(false)

  const handleEdit = (e) => {
    e.preventDefault()

    if (onEditCardToggle) {
      onEditCardToggle(data.uuid)
    }
  }

  const handleCancelEdit = (e) => {
    e.preventDefault()

    const newData = {
      ...data,
      data: value,
    }

    if (onEditCardToggle) {
      onEditCardToggle(null)
    }

    onChangeCard(data.uuid, newData)
  }

  const handleChangeTextArea = (e) => {
    setValue(e.target.value)
  }

  const handleDelete = () => {
    onDelete(data.uuid, listId)
  }

  const handleOnSelectColor = (color) => {
    onAddLabel(color, data.uuid)
  }

  useEffect(() => {
    if (editCardVisible === data.uuid && refEdit.current) {
      setEditable(refEdit.current.getBoundingClientRect())
    }
  }, [editCardVisible])

  const getLabelsByCard = (values, cardsLabels) => {
    return cardsLabels
      ? cardsLabels.map((item) =>
          values.find((o) => o.id_label === item.id_label),
        )
      : []
  }

  const getUserByCard = (values, cardsUsers) => {
    const res = cardsUsers
      ? cardsUsers.map((item) => values.find((o) => o.id_user === item.id_user))
      : []
    return res
  }

  return (
    <Wrapper
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      onMouseEnter={handleVisible}
      onMouseLeave={handleHide}
      ref={ref}
      style={style}
      to={`/b/${uuidBoard}/${data.uuid}`}
    >
      <Container ref={refEdit}>
        <Row>
          <Content>
            <Tags data={getLabelsByCard(labels.toJS(), data.labels)} />
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
          <InfoWrap>
            <NameCard>{data.title}</NameCard>
            <Author data={getUserByCard(members.toJS(), data.members)} />
          </InfoWrap>
        </Footer>
      </Container>
      {editCardVisible === data.uuid && (
        <CardEdit
          editable={editable}
          onChange={handleChangeTextArea}
          onCancel={handleCancelEdit}
          onDelete={handleDelete}
          onSelectColor={handleOnSelectColor}
          value={value}
          labels={labels}
          members={members}
          labelsByCard={getLabelsByCard(labels.toJS(), data.labels)}
        />
      )}
    </Wrapper>
  )
}

Index.propTypes = {
  uuidBoard: PropTypes.string,
  data: PropTypes.object,
  listId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  provided: PropTypes.object,
  style: PropTypes.object,
  editCardVisible: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onEditCardToggle: PropTypes.func,
  onSelectColor: PropTypes.func,
}

export const Tile = enhance(Index)
