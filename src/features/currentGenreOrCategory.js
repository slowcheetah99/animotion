import { createSlice } from "@reduxjs/toolkit";

export const genreOrCategory = createSlice({
  name: "genreOrCategory",
  initialState: {
    genreIdOrCategoryName: "",
    type: "",
    page: 1,
    searchQuery: "",
    status: "",
  },
  reducers: {
    selectGenreOrCategory: (state, action) => {
      state.genreIdOrCategoryName = action.payload;
      state.searchQuery = "";
      state.type = "";
      state.status = "";
    },
    searchAnime: (state, action) => {
      state.searchQuery = action.payload;
    },
    selectType: (state, action) => {
      state.type = action.payload;
    },
    selectStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { selectGenreOrCategory, selectType, searchAnime, selectStatus } =
  genreOrCategory.actions;

export default genreOrCategory.reducer;
