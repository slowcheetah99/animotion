import { Link, useNavigate, useLocation } from "react-router-dom";
import { searchAnime } from "../features/currentGenreOrCategory";
import { useDispatch } from "react-redux";
import kebabCase from "lodash.kebabcase";
export default function FeaturedAnime({ anime, similarAnime }) {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = anime
    ? anime
    : location.state.featured
    ? location.state.featured
    : similarAnime;
  function handleSearch(val) {
    // const searchTerm = `${val?.title?.split(" ")[0]} ${
    //   val?.title?.split(" ")[1]
    //     ? val?.title?.split(" ")[1].replace(/[0-9]/g, "")
    //     : ""
    // }`;

    const searchTerm = val?.title.split(" ").splice(0, 3).join(" ");
    dispatch(searchAnime(searchTerm));
    navigate(`/anime/${kebabCase(val.title)}`, {
      state: {
        featured: val,
      },
    });
  }

  return (
    <div className="w-full lg:w-3/4 h-fit pr-4 py-2 flex flex-col gap-y-3 md:gap-y-4 mt-10">
      <div className="text-slate-100 flex">
        {data?.genres?.map((genre, i) => (
          <p
            className="border-r-2 md:text-base text-sm w-fit border-slate-100 pr-2 md:pr-4 uppercase font-bold mr-4"
            key={i}
          >
            {genre}
          </p>
        ))}
      </div>
      <h1 className="text-3xl md:text-4xl text-slate-100">{data.title}</h1>
      <div className="flex gap-x-4 flex-wrap gap-y-2">
        {data?.alternativeTitles?.map((title, i) => (
          <div
            key={i}
            className="grid place-items-center bg-[#1e1e1e] rounded-3xl px-4 py-2"
          >
            <h3 className="text-sm md:text-md whitespace-nowrap text-slate-100">
              {title}
            </h3>
          </div>
        ))}
      </div>
      {/* add a component modal for reading all of the synopsis */}
      <p className="text-slate-100 md:w-10/12  text-sm">
        {data.synopsis.substr(0, 300)}
      </p>
      {location.pathname === "/anime" && (
        <button
          className="w-fit h-fit px-4 md:px-6 py-2 md:py-4 md:text-base text-sm bg-slate-100 text-[#1e1e1e] font-bold"
          onClick={() => handleSearch(data)}
        >
          Read More
        </button>
      )}
    </div>
  );
}
