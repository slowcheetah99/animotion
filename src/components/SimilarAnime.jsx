import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { staggerIn } from "../constants/framerVariants";
import { searchAnime } from "../features/currentGenreOrCategory";
import { useDispatch } from "react-redux";
import kebabCase from "lodash.kebabcase";
export default function SimilarAnime({ anime }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchTerm = anime?.title.split(" ").splice(0, 3).join(" ");

  function handleNavigate(e) {
    e.preventDefault();
    dispatch(searchAnime(searchTerm));
    navigate(`/anime/${kebabCase(anime?.title)}`, {
      state: {
        featured: anime,
      },
    });
  }
  return (
    <motion.div
      className="w-24 h-[112px] rounded-md relative"
      variants={staggerIn}
      anime={anime}
    >
      <Link onClick={handleNavigate} to={`/anime/${kebabCase(anime?.title)}`}>
        <img
          src={anime?.image}
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
          alt={anime?.title}
        />
      </Link>
    </motion.div>
  );
}
