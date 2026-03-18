import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-12 border-t border-gray-200 bg-gray-50 px-6 py-8 text-sm text-gray-600">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <nav>
          <h3 className="mb-2 font-medium text-gray-900">Navigation</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/" className="transition hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link href="/profile" className="transition hover:text-gray-900">
                Profile
              </Link>
            </li>
            <li>
              <Link href="/settings" className="transition hover:text-gray-900">
                Settings
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition hover:text-gray-900">
                About
              </Link>
            </li>
          </ul>
        </nav>

        <div className="max-w-sm space-y-2">
          <h2 className="text-base font-semibold text-gray-900">GetMeHired</h2>
          <p>
            A student project that helps job seekers discover relevant job posts based on their
            profile and interests.
          </p>
          <p className="text-xs text-gray-500">
            Built for learning purposes. Job suggestions may not always be accurate.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium text-gray-900">Project Info</h3>
          <p>Group project · School assignment</p>
          <p>Frontend built with Next.js and Tailwind CSS</p>
          <p className="text-xs text-gray-500">© 2026 GetMeHired Team</p>
        </div>
      </div>
    </footer>
  );
}
