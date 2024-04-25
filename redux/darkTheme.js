import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlice = createSlice({
  name: "darkTheme",
  initialState: {
    darkMode: false,
  },
  reducers: {
    darkmodeTrue: (state) => {
      state.darkMode = true;
    },
    darkModeFalse: (state) => {
      state.darkMode = false;
    },
  },
});

export const { darkmodeTrue, darkModeFalse } = darkModeSlice.actions;

export default darkModeSlice.reducer;
