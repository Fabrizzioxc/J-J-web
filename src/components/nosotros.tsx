// components/Nosotros.tsx
import Image from "next/image"
import { CheckCircle, Clock, Shield } from "lucide-react"

export default function Nosotros() {
  return (
    <section className="scroll-mt-20 bg-[url('/fondo-textura.png')] bg-cover py-52 px-4" id="nosotros">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div>
          <div className="relative">
            <span className="absolute -top-4 -left-4 w-12 h-12 bg-[#f9f6ee] rounded-full -z-10" />
            <h2 className="text-6xl font-extrabold mb-4">Nosotros</h2>
          </div>
          <p className="text-base text-gray-700 leading-relaxed mb-6 max-w-md">
            En J&J Servicios Generales ofrecemos soluciones integrales en construcción con más de 12 años de experiencia en el rubro. Nos especializamos en instalación de drywall, pintura profesional y servicios eléctricos, brindando resultados duraderos, seguros y adaptados a cada cliente.
          </p>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition">
            Leer Más
          </button>

          <div className="flex gap-6 mt-10">
            <div className="text-center">
              <CheckCircle className="mx-auto mb-2" />
              <p className="text-sm font-medium">Calidad</p>
            </div>
            <div className="text-center">
              <Clock className="mx-auto mb-2" />
              <p className="text-sm font-medium">Puntualidad</p>
            </div>
            <div className="text-center">
              <Shield className="mx-auto mb-2" />
              <p className="text-sm font-medium">Seguridad</p>
            </div>
          </div>
        </div>

        {/* Imagen */}
        <div className="relative shadow-xl rounded-lg overflow-hidden w-full h-64 md:h-96">
          <Image
            src="/nosotros.jpg"
            alt="Aplicando masilla en pared"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-2 right-2 w-full h-full border-4 border-black -z-10 translate-x-2 translate-y-2" />
        </div>
      </div>
    </section>
  )
}
