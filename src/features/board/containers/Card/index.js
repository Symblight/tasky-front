import React, { useEffect } from "react"
import PropTypes from "prop-types"

import { Modal } from "antd"
import { useApiCard } from "../../hooks"
import { CardNavigationPage, InfoPanelCard } from "../../components"

import { Label, Wrapper, Content, InfoWrap, Description } from "./styled"

export function Card({ history, match }) {
  const { card, loading, onLoad } = useApiCard()
  useEffect(() => {
    onLoad(match.params.idCard)
  }, [])
  const handleBack = () => {
    history.push(`/b/${match.params.idBoard}/`)
  }

  if (card.get("loading")) {
    return <div>Loading</div>
  }

  return (
    <Modal width="820px" visible onClose={handleBack} onOk={handleBack}>
      <Wrapper>
        <Content>
          <InfoWrap>
            <InfoPanelCard
              users={card.getIn(["members"])}
              labels={card.getIn(["labels"])}
            />
          </InfoWrap>
          <Description>
            <Label>Описание:</Label>
            {card.getIn(["item", "data"])}
          </Description>
        </Content>
        <div>
          <CardNavigationPage />
        </div>
      </Wrapper>
    </Modal>
  )
}

Card.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
}
