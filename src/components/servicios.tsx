// components/Servicios.tsx
import { Paintbrush, Hammer, Lightbulb } from "lucide-react"

export default function Servicios() {
  return (
    <section className="scroll-mt-20 bg-[#2f3a4d] bg-[url('/texture.png')] bg-cover bg-center py-70 text-white" id="servicios">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-2">Servicios</h2>
        <p className="text-sm mb-12">Profesionales en renovar, construir y cuidar tu espacio.</p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white text-black rounded-xl shadow-md p-6 flex flex-col items-center">
            <Paintbrush className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-bold mb-2">Pintura</h3>
            <p className="text-sm text-center">
              Embellece tus espacios con acabados profesionales. Usamos materiales de alta calidad y asesoramos en la selección de colores para lograr ambientes duraderos y armoniosos.
            </p>
          </div>

          <div className="bg-white text-black rounded-xl shadow-md p-6 flex flex-col items-center">
            <Hammer className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-bold mb-2">Drywall</h3>
            <p className="text-sm text-center">
              Construcción rápida, limpia y funcional. Creamos divisiones, techos y estructuras con drywall resistentes, perfectas para remodelaciones modernas.
            </p>
          </div>

          <div className="bg-white text-black rounded-xl shadow-md p-6 flex flex-col items-center">
            <Lightbulb className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-bold mb-2">Electricidad</h3>
            <p className="text-sm text-center">
              Instalaciones seguras y mantenimiento eléctrico confiable. Cumplimos con normas técnicas y ofrecemos soluciones eficientes para hogares y negocios.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
