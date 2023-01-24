import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./features/UI/uiSlice";
import watchlistReducer from "./features/watchList/watchlistSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    watchList: watchlistReducer,
  },
});
