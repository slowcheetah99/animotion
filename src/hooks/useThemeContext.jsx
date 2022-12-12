import { createSlice } from "@reduxjs/toolkit";

export const genreOrCategory = createSlice({
  name: "genreOrCategory",
  initialState: {
    genreIdOrCategoryName: "",
    type: "",
    page: 1,
    searchQuery: "",
  },
  reducers: {
    selectGenreOrCategory: (state, action) => {
      state.genreIdOrCategoryName = action.payload;
      state.searchQuery = "";
      state.type = "";
    },
    searchAnime: (state, action) => {
      state.searchQuery = action.payload;
    },
    selectType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { selectGenreOrCategory, selectType, searchAnime } =
  genreOrCategory.actions;

export default genreOrCategory.reducer;
