import { BsChevronRight as Right } from "react-icons/bs";
import { useState } from "react";
import { Card } from "./";
export default function AnimeList({ anime, page }) {
  const [open, setOpen] = useState(0);

  const cardDetails = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
  ];

  function handleForward() {
    setPage((state) => state + 1);
  }

  function handleBackward() {
    if (page !== 0) {
      setPage((state) => state - 1);
    }
  }
  return (
    <div className="w-full h-fit relative pb-12">
      <div className="flex gap-x-4 items-center mt-8 justify-end">
        <div
          className="w-fit h-fit p-2 border-2 border-slate-100 rounded-lg md:rounded-xl"
          onClick={handleBackward}
        >
          <Right className="text-slate-100 text-sm md:text-xl rotate-180" />
        </div>
        <p className="text-slate-100 text-xl md:text-2xl">{page}</p>
        <div
          className="w-fit h-fit p-2 border-2 border-slate-100 rounded-lg md:rounded-xl"
          onClick={handleForward}
        >
          <Right className="text-slate-100 text-sm md:text-xl" />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-y-4 gap-x-10 lg:gap-x-12 mt-12">
        {anime.map((item, i) => (
          <Card
            key={item._id}
            open={open}
            setOpen={setOpen}
            item={item}
            i={i}
          />
        ))}
      </div>
    </div>
  );
}
