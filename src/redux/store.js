import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import reducer from "./reducers";

export default configureStore(
  {
    reducer,
  },
  applyMiddleware(thunk)
);
