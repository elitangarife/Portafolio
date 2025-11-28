"use client"
import { ProjectModalProps } from "@/helpers/types/interfaces";
import { ExternalLink, Github, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
      <div className="relative bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl w-[90%] md:w-[700px] rounded-3xl p-6 animate-fadeInUp">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-700 hover:text-black"
        >
          <X size={26} />
        </button>

        {/* BLOBS */}
        <div className="absolute inset-0 blur-3xl bg-blue-200 opacity-30 rounded-full"></div>

        {/* IMAGE */}
        <div className="relative w-full h-56 mt-4 z-10">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="rounded-2xl object-cover"
          />
        </div>

        {/* TITLE */}
        <h2 className="text-3xl font-semibold mt-5 text-neutral-800 z-10">
          {project.name}
        </h2>

        {/* DESCRIPTION */}
        <p className="text-neutral-700 mt-3 text-justify z-10">
          {project.description}
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mt-4 z-10">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-1 bg-neutral-100 border border-neutral-300 text-neutral-600 text-xs rounded-full shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* LINKS */}
        <div className="flex items-center justify-between mt-8 z-10">

          <Link href={project.link} target="_blank" className="flex items-center gap-2 text-blue-600 hover:underline">
            <ExternalLink size={22} /> Web
          </Link>

          <Link href={project.gitHub} target="_blank" className="flex items-center gap-2 text-neutral-700 hover:underline">
            <Github size={22} /> GitHub
          </Link>

        </div>
      </div>
    </div>
  );
}
