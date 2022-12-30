import { Header, Body, BottomNav } from "../containers";
import { motion } from "framer-motion";
import { pageTransition } from "../constants/framerVariants";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetAnimeQuery } from "../services/animeDB";
export default function Home({ setOpen }) {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName, type, searchQuery } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  const { data, error, isFetching } = useGetAnimeQuery({
    genreIdOrCategoryName,
    page,
    type,
    searchQuery,
    status,
  });

  if (isFetching)
    return (
      <div className="absolute too-0 left-0 w-full h-full text-3xl text-slate-100">
        <h1>Loading</h1>
      </div>
    );

  if (!data.data.length) {
    return (
      <div className="absolute too-0 left-0 w-full h-full text-3xl text-slate-100">
        <h2>No anime...Try again later</h2>
      </div>
    );
  }

  if (error) {
    return "An error has occurred...";
  }
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <Header height="82.5vh" setOpen={setOpen} anime={data.data[0]} />
      <Body anime={data.data} page={page} />
    </motion.div>
  );
}
