import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = import.meta.env.VITE_API_KEY;
// https://anime-db.p.rapidapi.com/anime

export const animeDB = createApi({
  reducerPath: "animeDB",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://anime-db.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", apiKey);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAnime: builder.query({
      query: ({ genreIdOrCategoryName, page, type, searchQuery, status }) => {
        console.log(status);
        //get anime by search
        if (searchQuery) {
          return {
            url: "/anime",
            params: {
              page: page,
              size: "12",
              search: `${searchQuery}`,
              sortBy: "title",
              sortOrder: "asc",
            },
          };
        }
        //get anime by type (Most popular, tv or movie)
        else if (type) {
          return {
            url: "/anime",
            params: {
              page: page,
              size: "48",
              search: `${type}`,
              sortBy: "ranking",
              sortOrder: "asc",
            },
          };
        }
        //get anime by category most popular | airing | Upcoming
        else if (status) {
          return {
            url: "/anime",
            params: {
              page: page,
              size: "48",
              hasEpisode: `${status}`,
              sortBy: "ranking",
              sortOrder: "asc",
            },
          };
        }
        //get anime by genre
        else if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === "string"
        ) {
          //get anime by genre
          return {
            url: "/anime",
            params: {
              page: page,
              size: "48",
              genres: genreIdOrCategoryName,
              type: "Movie",
              sortBy: "ranking",
              sortOrder: "asc",
            },
          };
        }
        //get popular anime(genre-less order)
        else {
          return {
            url: "/anime",
            params: {
              page: page,
              size: "48",
              sortBy: "ranking",
              sortOrder: "asc",
            },
          };
        }
      },
    }),
    //get genres
    getGenres: builder.query({
      query: () => {
        return {
          url: "/genre",
        };
      },
    }),
    //get an anime by its id
    getOneAnime: builder.query({
      query: (id) => {
        return {
          url: `/anime/by-id/${id}`,
        };
      },
    }),
  }),
});

export const { useGetAnimeQuery, useGetGenresQuery, useGetOneAnimeQuery } =
  animeDB;
