import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../config";


const navItems = {
  "/blog": { name: "Blog" },
  "/projects": { name: "Projects" },

};

export function Navbar() {
  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-3xl p-1 underline hover:underline-offset-8 font-semibold tracking-tight">
          {/*     className=" bg-blue-100 hover:grayscale" */}
            {metaData.webPageTitle}
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all p-1 underline  hover:underline-offset-8 hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
            >
              {name}
            </Link>
          ))}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
