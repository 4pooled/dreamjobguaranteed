"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const setParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <section className="w-full flex justify-center">
      <div className="flex flex-col">
        <label htmlFor="search-input" className="text-center">
          Search
        </label>

        <input
          type="text"
          id="search-input"
          placeholder="Search posts..."
          className="rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
          onChange={(e) => {
            setParam("q", e.target.value);
          }}
        />
      </div>
    </section>
  );
}
