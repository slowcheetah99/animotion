const types = ["TV", "Movie", "OVA", "ONA"];
import { selectType } from "../features/currentGenreOrCategory";
import { useDispatch } from "react-redux";
export default function Types() {
  const dispatch = useDispatch();
  return (
    <div className="absolute bottom-4 -translate-x-1/2 px-4 py-4 left-1/2 bg-[#111] text-slate-100 flex gap-x-2 rounded-full">
      {types.map((type) => (
        <p
          className="px-4 py-2 bg-[#1e1e1e] rounded-full cursor-pointer border-primary hover:border-[0.5px] transition-all "
          key={type}
          onClick={() => dispatch(selectType(type))}
        >
          {type}
        </p>
      ))}
    </div>
  );
}
