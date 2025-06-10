// components/Contacto.tsx
import Image from "next/image"
import { Mail, Phone } from "lucide-react"

export default function Contacto() {
  return (
    <section id="contacto" className="min-h-screen flex items-center bg-[#ff0000] py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-0 bg-white shadow-xl rounded-xl overflow-hidden">
          <div className="relative h-[500px] md:h-auto">
            <Image src="/contacto.jpeg" alt="Trabajador en obra" fill className="object-cover" />
          </div>

          <div className="bg-[#0f1d2c] text-white p-8 flex flex-col justify-center space-y-6">
            <div>
              <h2 className="text-3xl font-bold">Agenda tu proyecto<br />con nosotros</h2>
              <p className="text-sm mt-2">
                ¿Tienes un proyecto en mente? Solicita tu cotización sin compromiso.
              </p>
            </div>

            <form className="space-y-4">
              <input type="text" placeholder="Nombre completo" className="w-full rounded-lg px-4 py-2 text-gray-800 bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400" />
              <input type="tel" placeholder="Número" className="w-full rounded-lg px-4 py-2 text-gray-800 bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400" />
              <textarea rows={4} placeholder="Mensaje" className="w-full rounded-lg px-4 py-2 text-gray-800 bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400" />
              <button type="submit" className="w-full bg-[#f59e40] hover:bg-[#e58c2f] text-white font-semibold py-2 rounded-lg">
                Enviar Mensaje
              </button>
            </form>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 mt-4 sm:mt-0">
                <Mail className="w-4 h-4" />
                <span>contacto@jyjservicios.pe</span>
              </div>
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <Phone className="w-4 h-4" />
                <span>+51 992 198 415</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
