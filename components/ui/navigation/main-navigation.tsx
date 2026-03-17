import Link from "next/link";

export default function MainNavigation() {
  return (
    <nav className="flex justify-between items-center py-4 px-2 sm:px-4 bg-gray-700">
      <div className="relative w-10 h-10">
        <img
          className="rounded-full cursor-pointer"
          src="https://i.pravatar.cc/40"
          alt=""
        />
        <span className="absolute top-0 right-0 bg-green-400 size-2.5 rounded-full border border-gray-700"></span>
      </div>
      <Link
        className="sm:text-3xl md:text-4xl text-2xl hover:opacity-80"
        href={"#"}
      >
        Job Tracker
      </Link>
      <Link className="hover:opacity-80" href={"#"}>
        Min sida
      </Link>
    </nav>
  );
}
