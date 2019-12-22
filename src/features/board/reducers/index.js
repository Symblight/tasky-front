import { combineReducers } from "redux-immutable"

import { reducer as board } from "./board"
import { reducer as card } from "./card"

export const boardReducers = combineReducers({ board, card })
