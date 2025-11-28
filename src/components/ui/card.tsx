import { Projects } from "@/helpers/projects"
import { ExternalLink, Github, Tag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto justify-items-center animate-fadeInUp animate-duration-[1.2s]">
      {Projects.map((project) => {
        return (
          <div
            key={project.id}
            className=" bg-white/90 backdrop-blur-sm w-80 min-h-[420px] rounded-3xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform p-5 border border-gray-100 flex flex-col justify-between">
            <div className="relative w-full h-40 flex justify-center">
              <Image src={project.image} alt={project.name} width={220} height={220} className="rounded-xl object-cover" />
            </div>

            <h2 className="text-xl font-semibold mt-4 italic text-center">{project.name}</h2>
            <p className="text-justify text-sm mt-2">{project.description}</p>
             <div className="flex flex-wrap gap-3 mt-6">
                {project.tags.map((tag) =>(
                <span key={tag}className="px-1.5 py-1.5 bg-neutral-200 text-neutral-700 text-sm rounded-full shadow-sm hover:bg-neutral-300 transition" >{tag}</span>
                ))}
            </div>
            <div className="flex items-center justify-between mt-5 ">
              <Link  href={project.link}  className="flex items-center gap-2 text-blue-600 hover:underline"><ExternalLink size={20} /> Web</Link>
              <Link href={project.gitHub} className="flex items-center gap-2 text-gray-700 hover:underline"> <Github size={20} /> GitHub</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
