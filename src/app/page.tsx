import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center ">
      <h1>Eliana Tangarife Blandon</h1>
      <span>Desarrolladora web Frontend</span>
      <div className="mt-4">
        <Link href="/contact" className="font-semibold p-4 hover:text-blue-700" >Contactame</Link>
        <Link href="/projects" className="font-semibold p-4 hover:text-blue-700">Proyectos</Link>
        <Link href="/about" className="font-semibold p-4 hover:text-blue-700">Saber más</Link>
      </div>
    </div>
  );
}
