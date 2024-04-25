import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./darkTheme";
import bookmarksReducer from "./bookmarks";

export default configureStore({
  reducer: {
    darkMode: darkModeReducer,
    bookmark: bookmarksReducer,
  },
});
