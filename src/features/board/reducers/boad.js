import Immutable from "immutable"

import { authorQuoteMap } from "@lib/mocks/board"

const initialState = Immutable.fromJS({
  board: {},
})

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state
    }
  }
}
