import Image from 'next/image'
import Link from 'next/link'

function About() {
  return (
    <div className=' justify-center items-center md:mx-15 min-h-screen'>        
        <h1 className='font-bold text-3xl md:text-4xl text-center '>Sobre mi</h1>

        <div className='grid grid-cols-1 md:grid-cols-3 m-8 gap-4 '>
            <Image src={"/Eli.jpeg"} alt='Foto de Eliana Tangarife' width={300} height={300} className='rounded-2xl ml-2 md:ml-0'/>
            <div className='text-justify border  px-4 py-4 md:py-13 rounded-2xl col-span-2 shadow-2xl leading-relaxed bg-gray-100'>
                <p > Soy <span className='italic font-semibold '>Desarrolladora Frontend y Administradora Financiera de profesión</span>. 
                Me apasiona crear experiencias digitales limpias, eficientes y centradas en el usuario.
                    <br />
                    <br />
                Trabajo principalmente con  <span className='italic font-semibold '>React, Next.js y Tailwind CSS</span>, cuidando cada detalle de rendimiento, coherencia visual y escalabilidad.
                    <br />
                    <br />
                Mi formación financiera me aporta una visión analítica y estratégica, que aplico al desarrollo de productos digitales.
                    <br />
                    <br />
                Disfruto transformar ideas en interfaces intuitivas y seguir aprendiendo nuevas tecnologías para construir soluciones modernas y funcionales.</p>   
            </div>

        </div>
            
    </div>
  )
}

export default About
