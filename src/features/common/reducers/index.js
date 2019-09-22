import { combineReducers } from "redux"

import { reducer as auth } from "./user"

export const userReducers = combineReducers({ auth })
