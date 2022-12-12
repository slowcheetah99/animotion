import { Header } from "../containers";
import { pageTransition } from "../constants/framerVariants";
import { motion } from "framer-motion";
import { BsChevronRight as Right } from "react-icons/bs";
import { useResize } from "../hooks/useResize";
import { useState } from "react";
import { useGetAnimeQuery } from "../services/animeDB";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { SimilarAnime } from "../components/";
export default function Anime({ open, setOpen }) {
  //window innerWidth size
  const size = useResize();
  const [pos, setPos] = useState(0);
  const location = useLocation();

  const { genreIdOrCategoryName, type, searchQuery } = useSelector(
    (state) => state.currentGenreOrCategory
  );

  const { data, error, isFetching } = useGetAnimeQuery({
    genreIdOrCategoryName,
    page: "1",
    type,
    searchQuery,
  });

  if (isFetching) {
    return <h1>Loading</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }
  //carousel controls
  const elWidth = 112;
  const similarAnime = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
    {
      id: 11,
    },
    {
      id: 12,
    },
  ];

  function handleNext() {
    if (data.data.length > 6 && pos < elWidth * (data.data.length - 6)) {
      setPos((state) => state + elWidth);
    }

    return;
  }

  function handlePrev() {
    if (data.data.length > 6 && pos > elWidth) {
      setPos((state) => state - elWidth);
    }

    return;
  }

  const similarParent = {
    animate: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.05,
      },
    },
  };
  return (
    <motion.div
      className=""
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <Header
        height="fit"
        setOpen={setOpen}
        open={open}
        similarAnime={location.state.featured}
      >
        <div className="flex justify-between w-full md:w-[656px] items-center">
          <h1 className="text-xl font-bold w-fit text-slate-100 uppercase mt-4 relative after:absolute after:-bottom-1 after:left-0 after:w-1/6 after:h-1 after:bg-slate-100 after:content-[''] after:rounded-lg">
            Similar Anime
          </h1>

          <div className="flex w-[17.5%] md:w-[12.5%] justify-between h-fit pt-4">
            <div
              className="w-fit h-fit p-2 rounded-full bg-slate-100 cursor-pointer hover:bg-slate-300 transition-all"
              onClick={handlePrev}
            >
              <Right className="text-[#1e1e1e] text-sm md:text-md rotate-180" />
            </div>
            <div
              className="w-fit h-fit p-2 rounded-full bg-slate-100 cursor-pointer hover:bg-slate-300 transition-all"
              onClick={handleNext}
            >
              <Right className="text-[#1e1e1e] text-sm md:text-md" />
            </div>
          </div>
        </div>
        {/* wrapper div for overflow-x */}
        <div className="w-full md:max-w-[656px] h-fit overflow-x-hidden">
          <motion.div
            className="flex gap-x-4 w-fit overflow-hidden h-fit mt-4 transition-all"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={similarParent}
            style={{
              translateX: -pos,
            }}
          >
            {data?.data?.map((anime, i) => (
              <SimilarAnime key={anime._id} anime={anime} />
            ))}
          </motion.div>
        </div>

        <div className="absolute -z-10 opacity-50 right-7 lg:opacity-100 md:right-20 lg:right-24 top-[50%] -translate-y-1/3 w-[300px] hidden md:block md:h-[212px] lg:h-[425px] bg-white rounded-md overflow-hidden">
          <img
            src={location.state?.featured.image}
            alt={location.state?.featured.title}
            className="absolute top-0 left-0 w-full h-full object-center object-cover"
          />
        </div>
      </Header>
    </motion.div>
  );
}
