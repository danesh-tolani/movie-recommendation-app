import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./features/UI/uiSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});
