export default function BottomNav({ open }) {
  return (
    <div
      className={`xs:block md:hidden fixed ${
        open ? " bottom-0 " : " -bottom-full "
      } left-0 w-full h-fit bg-[#1e1e1e] flex flex-col justify-between items-center gap-y-8 z-50 px-8 py-8 rounded-t-3xl border-t-2 border-slate-100 transition-all`}
    >
      <div className="w-full h-fit px-4 py-4 bg-[#545454] rounded-lg">
        <p className="text-slate-100">Most Popular</p>
      </div>

      <div className="w-full h-fit px-4 py-4 bg-[#545454] rounded-lg">
        <p className="text-slate-100">Upcoming</p>
      </div>

      <div className="w-full h-fit px-4 py-4 bg-[#545454] rounded-lg">
        <p className="text-slate-100">Airing</p>
      </div>
    </div>
  );
}
