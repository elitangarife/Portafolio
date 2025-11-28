"use client";

import ProjectGrid from "@/components/ui/ProjectGrid";

export default function Projects() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-24 bg-[#f5f5f7] overflow-hidden">

      <div className="absolute top-[-12%] left-[-10%] w-[350px] h-[350px] bg-linear-to-br from-pink-300 via-purple-300 to-blue-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>

      <div className="absolute top-[10%] right-[-10%] w-[300px] h-[300px] bg-linear-to-br from-green-300 via-teal-200 to-yellow-200 rounded-full blur-3xl opacity-40 animate-[float_6s_ease-in-out_infinite]"></div>

      <div className="absolute bottom-[-15%] left-[10%] w-[450px] h-[450px] bg-linear-to-br from-blue-300 via-cyan-200 to-purple-200 rounded-full blur-3xl opacity-35 animate-[float_7s_ease-in-out_infinite]"></div>

      <div className="absolute inset-0 bg-linear-to-br from-transparent via-[#c6e2ff40] to-[#e8d5f540] opacity-60 pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl text-center animate-[fadeInUp_1s_ease]">

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide text-neutral-700 leading-tight">MIS <span className="text-neutral-800">PROYECTOS</span></h1>

        <div className="h-0.5 w-64 md:w-80 mx-auto bg-neutral-400 my-4"></div>

        <p className="text-neutral-700 text-[17px] max-w-xl mx-auto mt-2"> Una colección de aplicaciones y experiencias digitales que he construido con enfoque en diseño limpio, excelencia visual y código escalable.</p>
        <div className="mt-10">
          <ProjectGrid />
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
    </section>
  );
}
