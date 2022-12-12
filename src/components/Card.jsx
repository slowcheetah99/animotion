import { motion } from "framer-motion";
import { BsChevronRight as Right } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { searchAnime } from "../features/currentGenreOrCategory";
import kebabCase from "lodash.kebabcase";

export default function Card({ open, setOpen, i, item }) {
  const genres = ["Action", "Adventure", "Sci-Fi"];
  const dispatch = useDispatch();
  // const searchTerm = `${item.title.split(" ")[0]} ${
  //   item.title.split(" ")[1]
  //     ? item.title.split(" ")[1].replace(/[0-9]/g, "")
  //     : ""
  // }`;

  // const stringCount = item.title.match(/(\w+)/g).length;
  // console.log(stringCount);

  const searchTerm = item.title.split(" ").splice(0, 3).join(" ");

  const navigate = useNavigate();

  function handleNavigate(e) {
    e.preventDefault();
    dispatch(searchAnime(searchTerm));
    navigate(`/anime/${kebabCase(item.title)}`, {
      state: {
        featured: item,
      },
    });
  }

  const isExpanded = i === open;

  return (
    <div className="w-full h-full">
      <div className="w-full h-[225px] rounded-t-md">
        <div className="w-full h-full relative">
          <img
            src={item?.image}
            alt={item.title}
            className="w-full h-full object-cover object-center"
          />
          <motion.div
            className="absolute -bottom-4 left-[40%]  text-slate-100 bg-[#1e1e1e] p-2 rounded-full z-10 border-2 border-slate-100 cursor-pointer"
            onClick={() => setOpen(isExpanded ? false : i)}
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            <Right className="text-2xl" />
          </motion.div>
        </div>
      </div>
      <motion.div
        className="text-slate-50 w-full overflow-hidden mt-4"
        animate={{ height: isExpanded ? "fit-content" : "0%" }}
        transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
        key="content"
      >
        <p className="text-[12px]">
          {!item.synopsis ? (
            <span>Not yet aired</span>
          ) : (
            item.synopsis.substr(0, 200)
          )}{" "}
          ...
        </p>
      </motion.div>
      <div className="flex flex-col text-slate-100 mt-4 mb-4 gap-y-2">
        <p className="text-lg text-ellipsis overflow-hidden w-[200px] whitespace-nowrap">
          {item.title}
        </p>
        <div className="text-slate-100 flex flex-wrap -ml-2">
          {item.genres.length === 0 ? (
            <p className="w-fit pr-2 pl-2 text-[12px] font-light">
              No genre info available
            </p>
          ) : (
            item?.genres?.map((genre, i) => (
              <p
                className="border-r-2 w-fit border-slate-100 pr-2 pl-2 text-[12px] font-light"
                key={i}
              >
                {genre}
              </p>
            ))
          )}
        </div>
        <div className="w-full h-fit flex justify-between items-center mt-4">
          <p className="font-light text-[14px]">Ranking {item.ranking}</p>
          <Link to={`/anime/${kebabCase(item.title)}`} onClick={handleNavigate}>
            <button className="w-fit h-fit px-4 py-2 bg-slate-100 text-[#1e1e1e] text-[14px]">
              View More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
