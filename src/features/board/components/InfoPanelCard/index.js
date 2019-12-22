import React from "react"
import PropTypes from "prop-types"

import { HEX_COLORS } from "@lib/mocks/colors"
import { Avatar } from "@tasky/components"

import { Row, Col, Button } from "antd"

import { Label, Wrapper, StyledTag, Section } from "./styled"

export function InfoPanelCard({ users = [], labels = [] }) {
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
            <Button icon="plus" />
          </Section>
        </Col>
        <Col span={12}>
          <Label>Участники:</Label>
          <Section>
            <Avatar />
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
