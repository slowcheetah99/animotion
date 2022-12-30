import moment from "moment/moment";
import { BsSearch as Search } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMenu as Menu } from "react-icons/fi";
import logo from "../assets/logo.svg";
import { useDispatch } from "react-redux";
import { searchAnime, selectStatus } from "../features/currentGenreOrCategory";
import { useState } from "react";

const fadeIn = {
  initial: {
    y: -20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
  exit: {
    y: 20,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

const categories = ["Most Popular", "Aired", "Upcoming"];
export default function Navbar({ setOpen }) {
  const today = moment().format("dddd, MMMM Do");
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      dispatch(searchAnime(query));
    }
  }

  return (
    <motion.div
      className="w-full h-fit py-4 text-slate-100 flex justify-between items-center"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeIn}
    >
      <div
        className="block md:hidden cursor-pointer"
        onClick={() => setOpen((state) => !state)}
      >
        <Menu className="text-slate-100 text-2xl" />
      </div>
      <div className="flex items-center w-fit">
        <Link
          className="pr-4 md:border-r-2 border-slate-100 font-bold text-lg logo"
          to="/anime"
          onClick={() => dispatch(searchAnime(""))}
        >
          <img
            src={logo}
            alt="go to home"
            className="h-10 w-10 md:w-12 md:h-12"
          />
        </Link>
        <p className="text-base hidden ml-4 md:inline">{today}</p>
      </div>

      {/* <div className="w-fit h-fit hidden md:flex gap-x-4">
        {categories.map((category, i) => (
          <p
            className="hover:font-bold transition-all cursor-pointer"
            key={i}
            onClick={() => {
              if (category === "Most Popular") {
                return dispatch(selectStatus(""));
              } else if (category === "Aired") {
                return dispatch(selectStatus(true));
              }
              return dispatch(selectStatus(false));
            }}
          >
            {category}
          </p>
        ))}
      </div> */}

      <div className="relative w-4/12 h-12" onKeyDown={handleKeyDown}>
        <Search className="text-slate-100 text-2xl absolute right-4 bottom-3" />
        <input
          type="search"
          className="h-full py-2 px-2 text-base rounded-sm absolute top-0 left-0 w-full bg-transparent border-b-2 border-primary transition-all"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
    </motion.div>
  );
}
