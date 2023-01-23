import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
  isLoading: false,
  genre: { name: "", id: null },
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    toggleTheme: (state, _action) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      // console.log(state.theme);
    },
    toggleLoading: (state, action) => {
      state.isLoading = action.payload;
      //   console.log(state.isLoading);
    },
    setGenre: (state, action) => {
      if (state.genre.id === action.payload.id) {
        state.genre.name = "";
        state.genre.id = null;
      } else {
        state.genre.name = action.payload.name;
        state.genre.id = action.payload.id;
      }
    },
  },
});

export default uiSlice.reducer;
export const { toggleTheme, toggleLoading, setGenre } = uiSlice.actions;
