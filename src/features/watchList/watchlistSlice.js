import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const watchListSlice = createSlice({
  name: "watchlist",
  initialState: initialState,
  reducers: {
    addToWatchList: (state, action) => {
      state.list.push(action.payload);
    },
    removeFromWatchList: (state, action) => {
      state.list = state.list.filter((movie) => {
        return movie.id !== action.payload.id;
      });
    },
  },
});

export default watchListSlice.reducer;
export const { addToWatchList, removeFromWatchList } = watchListSlice.actions;
