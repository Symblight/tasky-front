import React, { useState } from "react"
import PropTypes from "prop-types"

import { Button, Input } from "antd"
import { Dropdown, Avatar } from "@tasky/components"

import { Title, Item, Wrapper, MainItems } from "./styled"

export function Dashboard({ title, onInvite, onMenuToggle, users = [] }) {
  const [email, setEmail] = useState("")
  const handleOnInvite = () => {
    if (onInvite) {
      onInvite(email)
    }
  }
  const handleChange = (e) => {
    setEmail(e.target.value)
  }
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
            <div>
              <span>email пользователя</span>
              <Input onChange={handleChange} value={email} type="email" />
              <Button onClick={handleOnInvite}>Отправить приглашение</Button>
            </div>
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
  onInvite: PropTypes.func,
  users: PropTypes.object,
}
