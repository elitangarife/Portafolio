"use client";

import { Eye, Sparkles, CircleCheck, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center md:items-start justify-center gap-10 px-6 md:px-16 py-24 bg-[#f5f5f7] overflow-hidden">

      <div className="absolute top-[-10%] left-[-10%] w-[350px] h-[350px] bg-linear-to-br from-pink-500 via-purple-500 to-blue-500 rounded-full blur-3xl opacity-40 animate-pulse"></div>

      <div className="absolute top-[5%] right-[-10%] w-[300px] h-[300px] bg-linear-to-br from-green-500 via-teal-400 to-yellow-400 rounded-full blur-2xl opacity-40 animate-[float_6s_ease-in-out_infinite]"></div>

      <div className="absolute bottom-[35%] md:bottom-[5%] left-[10%] w-[450px] h-[450px] bg-linear-to-br from-blue-500 via-cyan-400 to-purple-400 rounded-full blur-3xl opacity-35 animate-[float_7s_ease-in-out_infinite]"></div>
      
      <div className="absolute bottom-[-5%] md:bottom-[-10%] right-[5%]  w-[350px] h-[350px] bg-linear-to-br from-pink-500 via-purple-500 to-blue-500 rounded-full blur-3xl opacity-40 animate-pulse"></div>


      <div className="relative z-10 max-w-2xl animate-[fadeInUp_0.9s_ease]">
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide text-neutral-700 leading-tight">
          SOBRE <span className="text-neutral-800">MÍ</span>
        </h1>

        <div className="h-0.5 w-64 bg-neutral-400 my-4"></div>

        <Link
          href="https://drive.google.com/file/d/1B55cW7eu-0QvQfWsJ3rs7-jbF2UPRso4/view?usp=sharing"
          target="_blank"
          className="inline-flex items-center gap-2 px-5 py-2 border border-neutral-300 rounded-md text-neutral-800 text-sm font-medium hover:bg-neutral-100 hover:border-neutral-400 transition"
        >
          <Eye size={18} /> Ver CV
        </Link>

        <p className="mt-6 text-[17px] leading-relaxed text-neutral-700">
          Hola, soy <span className="italic font-semibold">Eliana Tangarife</span>, Desarrolladora Frontend y Administradora Financiera.
          Me apasiona crear experiencias digitales limpias, eficientes y centradas en el usuario.
          <br /><br />
          Trabajo principalmente con{" "}
          <span className="italic font-semibold">React, Next.js y Tailwind CSS</span>, enfocándome en el rendimiento, la coherencia visual y la escalabilidad.
          <br /><br />
          Mi formación financiera me brinda una visión analítica y estratégica, valiosa para construir productos digitales funcionales, claros y sostenibles.
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
          {["React", "Next.js", "Tailwind CSS", "TypeScript", "React Hook Form", "Zod"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 bg-neutral-200 text-neutral-700 text-sm rounded-full shadow-sm hover:bg-neutral-300 transition"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <div>
            <span className="font-semibold text-neutral-700 text-lg">
              Lo que me define:
            </span>
            <ul className="text-neutral-700 space-y-2 mt-3">
              <li className="flex items-center gap-2"><CircleCheck size={18}/> Diseño limpio y UX clara</li>
              <li className="flex items-center gap-2"><CircleCheck size={18}/> Atención al detalle y orden</li>
              <li className="flex items-center gap-2"><CircleCheck size={18}/> Código escalable y mantenible</li>
              <li className="flex items-center gap-2"><CircleCheck size={18}/> Curiosidad constante por aprender</li>
            </ul>
          </div>

          <div>
            <span className="font-semibold text-neutral-700 text-lg">
              Hobbies:
            </span>
            <div className="flex flex-col gap-3 mt-3 text-neutral-700">
              <span className="flex items-center gap-2"><Sparkles size={16}/> Cocinar</span>
              <span className="flex items-center gap-2"><Heart size={16}/> Viajar</span>
              <span className="flex items-center gap-2"><Sparkles size={16}/> Escuchar música</span>
            </div>
          </div>

        </div>
      </div>

      <div className="relative mt-12 md:mt-0 animate-[fadeIn_1.4s_ease]">
        <div className="absolute inset-0 blur-3xl bg-blue-200 opacity-40 rounded-full"></div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl w-[280px] md:w-[350px]">
          <Image
            src="/Eli.jpeg"
            alt="Foto de Eliana Tangarife"
            width={400}
            height={400}
            className="object-cover"
          />
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
