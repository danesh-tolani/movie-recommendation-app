import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
  isLoading: false,
  genre: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    toggleTheme: (state, _action) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      // console.log(state.theme);
    },
    toggleLoading: (state) => {
      state.isLoading = state.isLoading === false ? true : false;
      //   console.log(state.isLoading);
    },
    setGenre: (state, action) => {
      state.genre = action.payload;
    },
  },
});

export default uiSlice.reducer;
export const { toggleTheme, toggleLoading, setGenre } = uiSlice.actions;
