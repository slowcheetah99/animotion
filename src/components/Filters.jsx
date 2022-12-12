//formerly Sidebar
export default function Filters() {
  const genres = [
    "Award Winning",
    "Action",
    "Horror",
    "Suspense",
    "Ecchi",
    "Avante Garde",
    "Sports",
  ];
  return (
    <div className="flex gap-x-4 gap-y-4 flex-wrap w-full lg:justify-between text-slate-100 pb-4">
      {genres.map((genre, i) => (
        <p key={i} className="whitespace-nowrap">
          {genre}
        </p>
      ))}
    </div>
  );
}
