import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { authReducer } from "../Reducer/authReducer";
import thunk from "redux-thunk";
import { uiReducer } from "../Reducer/uiReducer ";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  auth: authReducer,
  ui:uiReducer
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
