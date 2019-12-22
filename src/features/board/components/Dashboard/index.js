import React from "react"
import PropTypes from "prop-types"

import { Button } from "antd"
import { Dropdown, Avatar } from "@tasky/components"

import { Title, Item, Wrapper, MainItems } from "./styled"

export function Dashboard({ title, onMenuToggle, users = [] }) {
  return (
    <Wrapper>
      <MainItems>
        <Item>
          <Title>{title}</Title>
        </Item>
        <Item>
          {users.map((user) => (
            <Avatar
              key={user.get("id")}
              data={{
                firstname: user.get("firstname"),
                lastname: user.get("lastname"),
              }}
            />
          ))}
        </Item>
        <Item>
          <Dropdown
            title="Добавить участника"
            DropdownButton={({ ...props }) => (
              <Button {...props}>Пригласить</Button>
            )}
          >
            <div>Создать ссылку?</div>
          </Dropdown>
        </Item>
      </MainItems>
      <Button onClick={onMenuToggle}>Меню</Button>
    </Wrapper>
  )
}

Dashboard.propTypes = {
  title: PropTypes.string,
  onMenuToggle: PropTypes.func,
  users: PropTypes.object,
}
