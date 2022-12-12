import { AnimeList, Filters } from "../components";

export default function Body({ anime, page }) {
  return (
    <div className="h-fit bg-[#1e1e1e] px-7 md:px-20 lg:px-24 pt-12 relative z-20 w-full">
      <Filters />
      <AnimeList anime={anime} page={page} />
    </div>
  );
}
