import { useGetGenresQuery } from "../services/animeDB";
import { selectGenreOrCategory } from "../features/currentGenreOrCategory";
import { useDispatch } from "react-redux";
import { useState } from "react";
//formerly Sidebar
export default function Filters() {
  const { data, error, isFetching } = useGetGenresQuery();
  const dispatch = useDispatch();
  const [val, setVal] = useState("Please Choose a Genre");
  if (error) return <h1 className="text-white">Error. Try again!</h1>;
  if (isFetching) return <h1 className="text-white">Loading</h1>;
  return (
    <select
      name="genres"
      id="genres"
      onChange={(e) => {
        e.preventDefault();
        setVal(e.target.value);
        dispatch(selectGenreOrCategory(e.target.value));
      }}
      className="px-4 py-2"
      value={val}
    >
      {data.map((genre, i) => (
        <option value={genre._id} key={i}>
          {genre._id}
        </option>
      ))}
    </select>
  );
}
