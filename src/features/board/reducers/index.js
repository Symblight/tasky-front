import { combineReducers } from "redux-immutable"

import { reducer as board } from "./board"

export const boardReducers = combineReducers({ board })
