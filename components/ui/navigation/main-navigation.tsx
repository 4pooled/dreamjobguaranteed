import Link from "next/link";

export default function MainNavigation() {
  return (
    <>
      <nav className="flex justify-between py-2 px-4 bg-gray-700">
        <div>
          <img className="rounded-4xl mb-2" src="https://i.pravatar.cc/40" alt="" />
          <span>Exempel Användare</span>
        </div>
        <span>Job Tracker</span>
        <Link href={"#"}>Min sida</Link>
      </nav>
    </>
  );
}
