import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { animeDB } from "../services/animeDB";
import genreOrCategoryReducer from "../features/currentGenreOrCategory";

export default configureStore({
  reducer: {
    [animeDB.reducerPath]: animeDB.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(animeDB.middleware),
});
