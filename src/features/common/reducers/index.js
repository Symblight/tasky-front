import { combineReducers } from "redux-immutable"

import { reducer as auth } from "./user"

export const userReducers = combineReducers({ auth })
