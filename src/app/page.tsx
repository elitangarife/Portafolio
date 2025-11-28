"use client";

import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <main className="relative w-full h-screen flex flex-col items-center justify-center text-center bg-[#f5f5f7] overflow-hidden px-6">

      {/* BLOBS */}
      <div className="absolute top-[-10%] left-[-10%] w-[350px] h-[350px] bg-linear-to-br from-pink-300 via-purple-300 to-blue-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>

      <div className="absolute top-[5%] right-[-10%] w-[300px] h-[300px] bg-linear-to-br from-green-300 via-teal-200 to-yellow-200 rounded-full blur-3xl opacity-40 animate-[float_6s_ease-in-out_infinite]"></div>

      <div className="absolute bottom-[-15%] left-[10%] w-[450px] h-[450px] bg-linear-to-br from-blue-300 via-cyan-200 to-purple-200 rounded-full blur-3xl opacity-35 animate-[float_7s_ease-in-out_infinite]"></div>

      <div className="relative z-10 max-w-3xl animate-[fadeInUp_1s_ease]">

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide text-neutral-700 leading-tight"> HOLA, SOY <span className="text-neutral-800">ELIANA TANGARIFE</span></h1>

        <h2 className="text-2xl md:text-4xl font-extrabold tracking-wide mt-2 text-neutral-600"> PERO PUEDES LLAMARME <span className="text-neutral-800 italic">ELI</span></h2>

        <p className="mt-6 text-lg md:text-xl text-neutral-700"> Desarrolladora Frontend <span className="estrella">✦</span></p>

        <div className="mt-10 flex items-center justify-center gap-6">
          <Link  href="/projects" className="text-neutral-800 font-semibold hover:underline underline-offset-4"> → ver mis proyectos</Link>
          <Link href="/about"  className="text-neutral-800 font-semibold hover:underline underline-offset-4"> → saber más</Link>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <Link href="https://www.linkedin.com/in/elianatangarifeblandon" target="_blank" className="flex items-center gap-2 text-neutral-700 hover:text-blue-700 transition"> <Linkedin size={22} /> LinkedIn</Link>

          <Link href="https://github.com/elitangarife" target="_blank" className="flex items-center gap-2 text-neutral-700 hover:text-black transition"> <Github size={22} /> GitHub</Link>
        </div>

      </div>
            <style jsx>{`
              
              @keyframes float {
                  0% { transform: translateY(0px); }
                  50% { transform: translateY(-25px); }
                  100% { transform: translateY(0px); }
                }
                @keyframes fadeInUp {
                  from { opacity: 0; transform: translateY(20px); }
                  to { opacity: 1; transform: translateY(0px); }
                }
            `}</style>

    </main>
  );
}
