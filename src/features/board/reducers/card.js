import Immutable from "immutable"
import { GET_CARD_SUCCESS } from "../constants"

const initialState = Immutable.fromJS({
  loading: true,
  members: [],
  labels: [],
  item: {},
})

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARD_SUCCESS: {
      const { data } = action.payload
      return state
        .update((value) =>
          Immutable.fromJS({
            ...value.toJS(),
            item: data,
            members: data.members,
            labels: data.labels,
          }),
        )
        .set("loading", false)
    }
    default:
      return state
  }
}
