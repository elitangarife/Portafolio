"use client"
import { useState } from "react"
import { Projects } from "@/helpers/projects"
import ProjectCard from "./ProjectCard"
import ProjectModal from "./ProjectModal"
import { Project } from "@/helpers/types/interfaces"

export default function ProjectGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-6xl mx-auto px-4">
        
        {Projects.map(project => (
          <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />
        ))}
      </div>

      <ProjectModal  project={selectedProject} onClose={() => setSelectedProject(null)}/>
    </div>
  );
}
