import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { postReducer } from "./postReducer";
import { noteReducer } from "./noteReducer";
import { onlineReducer } from "./onlineReducer";

const rootReducer = combineReducers({
    pos: postReducer,
    not: noteReducer,
    onl: onlineReducer
})

export const blogStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));