import { IconCheckCircle, IconLeaf } from "./icons";

const MENU_ITEMS = [
  { name: "Veg Thali", price: "₹70" },
  { name: "Masala Dosa", price: "₹45" },
  { name: "Chicken Roll", price: "₹60" },
];

export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[260px] sm:w-[290px]">
      <div className="relative rounded-[2.5rem] border-8 border-ink bg-ink p-2 shadow-2xl">
        <div className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" />

        <div className="overflow-hidden rounded-[2rem] bg-paper">
          <div className="flex items-center justify-between px-5 pb-2 pt-6 text-[10px] font-medium text-stone-500">
            <span>9:41</span>
            <span>●●●●</span>
          </div>

          <div className="flex items-center justify-between px-5 py-3">
            <div>
              <p className="text-xs text-stone-500">Good morning</p>
              <p className="font-display text-base font-bold text-ink">Main Canteen</p>
            </div>
            <span className="flex items-center gap-1.5 rounded-full bg-moss-100 px-2.5 py-1 text-[10px] font-semibold text-moss-700">
              <span className="h-1.5 w-1.5 rounded-full bg-moss-500 animate-pulse" />
              Live
            </span>
          </div>

          <div className="flex flex-col gap-2.5 px-5 py-2">
            {MENU_ITEMS.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-2xl border border-stone-200 bg-white px-3 py-2.5"
              >
                <div>
                  <p className="text-sm font-semibold text-ink">{item.name}</p>
                  <p className="text-xs text-stone-500">{item.price}</p>
                </div>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-500 text-sm font-bold leading-none text-white">
                  +
                </span>
              </div>
            ))}
          </div>

          <div className="mx-4 mb-5 mt-3 rounded-2xl bg-ink px-4 py-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] text-white/60">Pickup slot</p>
                <p className="text-sm font-semibold text-white">11:20 · Recess</p>
              </div>
              <span className="rounded-full bg-brand-500 px-3.5 py-2 text-xs font-bold text-white">
                Confirm
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-6 top-16 hidden -rotate-3 items-center gap-1.5 rounded-2xl border border-stone-200 bg-white px-3 py-2 text-xs font-semibold text-ink shadow-lg animate-float-slow sm:flex">
        <IconLeaf className="h-4 w-4 text-moss-500" />
        0% guesswork
      </div>
      <div
        className="absolute -left-8 bottom-24 hidden rotate-2 items-center gap-1.5 rounded-2xl border border-stone-200 bg-white px-3 py-2 text-xs font-semibold text-ink shadow-lg animate-float-slow sm:flex"
        style={{ animationDelay: "1.5s" }}
      >
        <IconCheckCircle className="h-4 w-4 text-brand-500" />
        Order #128 ready
      </div>
    </div>
  );
}
