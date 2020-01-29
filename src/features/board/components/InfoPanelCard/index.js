import React from "react"
import PropTypes from "prop-types"

import { HEX_COLORS } from "@lib/mocks/colors"
import { Avatar, Dropdown } from "@tasky/components"
import { Row, Col, Button } from "antd"
import { Labels } from "../MenuLabels/Labels"
import { Create } from "../MenuLabels/Create"
import { Edit } from "../MenuLabels/Edit"

import { Label, Wrapper, StyledTag, Section } from "./styled"

export function InfoPanelCard({ users = [], labels = [] }) {
  const handleVisible = (event) => {
    // if (onClose) {
    //   event.preventDefault()
    //   onClose(event)
    // }
  }

  const handleClick = (value) => {
    // if (onSelectColor) {
    //   onSelectColor(value)
    // }
  }

  return (
    <Wrapper>
      <Row>
        <Col span={12}>
          <Label>Метки:</Label>
          <Section>
            {labels &&
              labels.map((value) => (
                <StyledTag
                  key={value.get("color")}
                  color={HEX_COLORS[value.get("color")].hex}
                />
              ))}
            <Dropdown
              title="Метки"
              index={0}
              DropdownButton={() => <Button icon="plus" />}
              onBack={() => null}
            >
              <Labels
                onCreate={() => null}
                onClick={handleClick}
                onEditToggle={() => null}
                labels={labels}
                labelsByCard={[]}
              />
              <Create />
              <Edit />
            </Dropdown>
          </Section>
        </Col>
        <Col span={12}>
          <Label>Участники:</Label>
          <Section>
            {users &&
              users.map((user) => (
                <Avatar
                  key={user.get("id")}
                  data={{
                    firstname: user.get("firstname"),
                    lastname: user.get("lastname"),
                  }}
                />
              ))}
            <Button shape="circle" icon="plus" />
          </Section>
        </Col>
      </Row>
    </Wrapper>
  )
}

InfoPanelCard.propTypes = {
  users: PropTypes.object,
  labels: PropTypes.object,
}
