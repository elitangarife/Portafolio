"use client"

import { ProjectCardProps } from "@/helpers/types/interfaces";
import Image from "next/image"

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <div 
  className="bg-white/90 backdrop-blur-sm w-full rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 transition cursor-pointer p-4"
      onClick={() => onOpen(project)}
    >
      <div className="absolute inset-0 blur-3xl bg-blue-200 opacity-40 rounded-full"></div>
      <div className="relative w-full  h-40">
        <Image 
          src={project.image} 
          alt={project.name} 
          fill 
          className="rounded-2xl object-cover p-2"
        />
      </div>

      <h2 className="text-lg font-semibold mt-4 text-neutral-800">{project.name}</h2>

      <div className="flex flex-wrap gap-1 mt-3">
        {project.tags.slice(0, 3).map(tag => (
          <span key={tag} className="px-2 py-1 bg-neutral-200 text-neutral-600 text-xs rounded-full hover:bg-neutral-300 transition">{tag}</span>
        ))}

        {project.tags.length > 3 && (
          <span className="text-xs text-neutral-500">+{project.tags.length - 3}</span>
        )}
      </div>
    </div>
  );
}
