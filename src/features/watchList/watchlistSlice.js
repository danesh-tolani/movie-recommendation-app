import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const watchListSlice = createSlice({
  name: "watchlist",
  initialState: initialState,
  reducers: {
    addToWatchList: (state, action) => {
      return { list: [...state.list, { ...action.payload }] };

      //   state.list.append(action.payload);
      //   console.log(state.list);
    },
    removeFromWatchList: (state, action) => {
      state.list = state.list.filter((movie) => {
        //   console.log(state.list);
        return movie.id !== action.id;
      });
    },
  },
});

export default watchListSlice.reducer;
export const { addToWatchList, removeFromWatchList } = watchListSlice.actions;
