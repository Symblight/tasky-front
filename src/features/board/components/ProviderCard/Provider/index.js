import React from "react"
import PropTypes from "prop-types"

// ADD LABEL
// EDIT LABEL
// ADD MEMBER
// REMOVE MEMBER
// REMOVE CARD
import { Context as DefaultContext } from "../Context"

export function Provider({
  children,
  context: Context,
  onAddLabel,
  onEditLabel,
  onAddMember,
  onRemoveMember,
  onDelete,
  onChangeCard,
  labels,
}) {
  const values = {
    onAddLabel,
    onEditLabel,
    onAddMember,
    onRemoveMember,
    onDelete,
    onChangeCard,
    labels,
  }
  return <Context.Provider value={values}>{children}</Context.Provider>
}

Provider.propTypes = {
  children: PropTypes.any,
  context: PropTypes.shape({
    Provider: PropTypes.object,
    Consumer: PropTypes.object,
  }),
  onAddLabel: PropTypes.func,
  onEditLabel: PropTypes.func,
  onAddMember: PropTypes.func,
  onRemoveMember: PropTypes.func,
  onDelete: PropTypes.func,
  onChangeCard: PropTypes.func,
  labels: PropTypes.object,
}

Provider.defaultProps = {
  context: DefaultContext,
  onAddLabel: () => null,
  onEditLabel: () => null,
  onAddMember: () => null,
  onRemoveMember: () => null,
  onDelete: () => null,
  onChangeCard: () => null,
}
