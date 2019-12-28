import React from "react"
import PropTypes from "prop-types"

import { Button } from "antd"
import { HEX_COLORS } from "@lib/mocks/colors"

import { CardMenu } from "../CardMenu"

import {
  ColorsWrap,
  StyledTextArea,
  Content,
  Wrapper,
  FooterEdit,
  Color,
} from "./styled"

export function CardEdit({
  value,
  onCancel,
  onChange,
  editable,
  onDelete,
  onSelectColor,
  labels,
  labelsByCard,
  members,
}) {
  return (
    <Wrapper editable={editable} onClick={(e) => e.preventDefault()}>
      <Content>
        <ColorsWrap>
          {labelsByCard.map((item) => (
            <Color key={item.color} color={HEX_COLORS[item.color].hex} />
          ))}
        </ColorsWrap>
        <StyledTextArea
          value={value}
          autosize={{ minRows: 4 }}
          onChange={onChange}
        />
      </Content>
      <FooterEdit>
        <Button type="primary" onClick={onCancel}>
          Сохранить
        </Button>
      </FooterEdit>
      <CardMenu
        labels={labels}
        labelsByCard={labelsByCard}
        onDelete={onDelete}
        onSelectColor={onSelectColor}
        members={members}
      />
    </Wrapper>
  )
}

CardEdit.propTypes = {
  onChange: PropTypes.func,
  onCancel: PropTypes.func,
  onDelete: PropTypes.func,
  onSelectColor: PropTypes.func,
  labelsByCard: PropTypes.array,
  value: PropTypes.string,
  editable: PropTypes.object,
  members: PropTypes.object,
  labels: PropTypes.object,
}
