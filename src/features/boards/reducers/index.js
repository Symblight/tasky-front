import { combineReducers } from "redux-immutable"

import { reducer as boards } from "./boards"

export const boardsReducers = combineReducers({ boards })
