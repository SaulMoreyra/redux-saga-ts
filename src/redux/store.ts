import {
  combineReducers,
  configureStore,
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import someReducer from "./slices";
import createSaga from "redux-saga";
import rootSaga from "../sagas/sagas";

const rootReducer = combineReducers({
  someReducer
});

const sagaMiddleware = createSaga();
const middleware = [...getDefaultMiddleware(), sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware
});

sagaMiddleware.run(rootSaga);

export default store;
