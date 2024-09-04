import { LucideMenu } from "lucide-react";
import { LucideX } from "lucide-react";
import { CameraIcon } from "lucide-react";
import Link from "next/link";

export function Header() {
    return (<header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4 dark:bg-neutral-800">
        <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
            <div className="flex items-center justify-between">
            <Link className="inline-flex items-center gap-x-2 text-lg font-semibold dark:text-white" href="/">
                <CameraIcon />
                <p className="w-64">Syft Movies</p>
            </Link>
            <div className="sm:hidden">
                <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10" data-hs-collapse="#navbar-image-and-text-1" aria-controls="navbar-image-and-text-1" aria-label="Toggle navigation">
                <LucideMenu className="hs-collapse-open:hidden flex-shrink-0 size-4" />
                <LucideX className="hs-collapse-open:block hidden flex-shrink-0 size-4" />
                </button>
            </div>
            </div>
            <div id="navbar-image-and-text-1" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500" href="/movies" aria-current="page">Top Movies</a>
                <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500" href="/tv">TV</a>
                <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500" href="/genres">Genres</a>
                <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500" href="/account">Account</a>
            </div>
            </div>
        </nav>
    </header>);
}