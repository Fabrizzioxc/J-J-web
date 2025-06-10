// components/Proyectos.tsx
import Image from "next/image"

const proyectos = [
  { id: 1, img: "/proyecto1.jpg", alt: "Proyecto 1" },
  { id: 2, img: "", alt: "Proyecto 2" },
  { id: 3, img: "", alt: "Proyecto 3" },
  { id: 4, img: "", alt: "Proyecto 4" },
]

export default function Proyectos() {
  return (
    <section id="proyectos" className="scroll-mt-20 bg-[#f9f6ee] py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-2">Proyectos</h2>
        <p className="text-sm mb-12 max-w-xl mx-auto">
          Conoce nuestros proyectos más recientes y cómo ayudamos a transformar cada espacio con soluciones eficientes y profesionales.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {proyectos.map((p) => (
            <div key={p.id} className="relative bg-black aspect-[4/3] rounded-lg overflow-hidden">
              {p.img && (
                <Image src={p.img} alt={p.alt} fill className="object-cover" />
              )}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white text-black text-sm px-5 py-2 rounded-full shadow hover:scale-105 transition">
                  Ver Proyecto
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <button className="bg-[#f59e40] hover:bg-[#e38a25] text-white font-medium px-6 py-2 rounded-full shadow-md">
            Ver Más Proyectos
          </button>
        </div>
      </div>
    </section>
  )
}
