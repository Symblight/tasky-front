import React, { memo } from "react"
import PropTypes from "prop-types"

import _ from "lodash"
import uuid from "uuid"

import { Divider, Typography } from "antd"

import {
  StyledAddBoard,
  StyledBoard,
  Wrapper,
  Row,
  EmptyTile,
  WrapLabel,
} from "./styled"

const { Title } = Typography

const SIZE_COLUMNS = 3

export const BoardList = memo(({ icon, data, label, addable, onToggle }) => {
  const normalizeDate = addable ? [...data, { addable: true }] : data
  const fill = _.fill(new Array(SIZE_COLUMNS), {})
  const normalize = [...normalizeDate, ...fill]

  const rows = _.chunk(normalize, SIZE_COLUMNS).filter(
    (item) => Object.keys(item[0]).length,
  )

  const handleOnToggle = () => {
    if (onToggle) {
      onToggle()
    }
  }

  if (data.length === 0 && !addable) return null

  return (
    <>
      <Divider orientation="left">
        <WrapLabel>
          {icon}
          <Title level={4}>{label}</Title>
        </WrapLabel>
      </Divider>
      <Wrapper>
        {rows.map((row, indexRow) => (
          <Row key={_.uniqueId("row-")}>
            {row &&
              row.map((project, index) => {
                if (!_.isEmpty(project) && !project.addable) {
                  return (
                    <StyledBoard
                      id={project.uuid}
                      key={project.id}
                      data={project}
                      index={indexRow + index}
                      {...project}
                    />
                  )
                }
                if (project.addable) {
                  return (
                    <StyledAddBoard
                      key={_.uniqueId("id-")}
                      onClick={handleOnToggle}
                      addable={addable}
                    />
                  )
                }
                return <EmptyTile key={_.uniqueId("id-")} />
              })}
          </Row>
        ))}
      </Wrapper>
    </>
  )
})

BoardList.propTypes = {
  data: PropTypes.array,
  label: PropTypes.string,
  addable: PropTypes.bool,
  onToggle: PropTypes.func,
  icon: PropTypes.node,
}
