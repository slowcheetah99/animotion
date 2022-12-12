import moment from "moment/moment";
import { BsSearch as Search } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMenu as Menu } from "react-icons/fi";
import logo from "../assets/logo.svg";
import { useDispatch } from "react-redux";
import { searchAnime } from "../features/currentGenreOrCategory";

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
export default function Navbar({ setOpen }) {
  const today = moment().format("dddd, MMMM Do");
  const dispatch = useDispatch();
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

      <div className="w-fit h-fit hidden md:flex gap-x-4">
        <p className="font-bold">Most Popular</p>
        <p>Upcoming</p>
        <p>Airing</p>
      </div>

      <div>
        <Search className="text-slate-100 text-2xl" />
      </div>
    </motion.div>
  );
}
