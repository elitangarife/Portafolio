"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  const linkClasses = (path: any) =>
    `transition duration-300 font-medium ${
      pathname === path
        ? "text-blue-600" 
        : "text-neutral-700 hover:text-neutral-900"
    }`;

  return (    <nav className="w-full px-4 md:px-16 py-4 flex items-center justify-between bg-[#f5f5f7]/60 backdrop-blur-md shadow-xl

     top-0 z-50">
      
      <Link href="/" className="text-2xl font-extrabold text-neutral-800 hover:text-neutral-900 transition duration-300"> Eli</Link>

      <div className="flex items-center gap-4 md:gap-6">
        <Link href="/about" className={linkClasses("/about")}>Sobre mí</Link>

        <Link href="/projects" className={linkClasses("/projects")}>Proyectos</Link>

        <a href="https://mail.google.com/mail/?view=cm&to=elianatangarifeblandon@gmail.com" target="_blank" rel="noopener noreferrer"
          className="px-3 md:px-5 py-2  bg-purple-300 hover:bg-cyan-300 rounded-lg text-neutral-800 font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5  transition-all duration-300"
        >
          Contáctame
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
