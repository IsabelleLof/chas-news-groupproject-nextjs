import { createSlice } from "@reduxjs/toolkit";

export const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState: {
    articles: [],
  },
  reducers: {
    addBookmark: (state, action) => {
      const existingBookmark = state.articles.find(
        (bookmark) => bookmark.article_id === action.payload.article_id
      );
      if (!existingBookmark) {
        state.articles.push(action.payload);
      }
    },
    removeBookmark: (state, action) => {
      const index = state.articles.findIndex(
        (bookmark) => bookmark.article_id === action.payload
      );
      if (index !== -1) {
        state.articles.splice(index, 1);
      }
    },
  },
});

export default bookmarkSlice.reducer;
export const { addBookmark, removeBookmark } = bookmarkSlice.actions;
