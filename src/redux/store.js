import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as AuthReducer } from "./AuthRedux/reducer";
import { reducer as AppReducer } from "./AppRedux/reducer";
import { reducer as AdminReducer } from "./AdminRedux/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ AuthReducer, AppReducer, AdminReducer });

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
