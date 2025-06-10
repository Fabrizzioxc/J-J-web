// components/Footer.tsx
import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0f1d2c] text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Image src="/logo.png" alt="Logo J&J" width={100} height={40} />
          </div>
          <p className="text-gray-300 leading-relaxed">
            Especialistas en instalación de Drywall, pintura profesional y servicios eléctricos. Calidad garantizada para tu hogar o negocio.
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="#"><Facebook className="w-5 h-5 hover:text-gray-200" /></Link>
            <Link href="#"><Twitter className="w-5 h-5 hover:text-gray-200" /></Link>
            <Link href="#"><Instagram className="w-5 h-5 hover:text-gray-200" /></Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Horario de atención</h4>
          <p className="text-gray-300">Lunes – viernes<br />8 am - 6pm</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Navegación</h4>
          <ul className="space-y-1 text-gray-300">
            <li><Link href="#nosotros">Nosotros</Link></li>
            <li><Link href="#servicios">Servicios</Link></li>
            <li><Link href="#proyectos">Proyectos</Link></li>
            <li><Link href="#contacto">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Redes Sociales</h4>
          <ul className="space-y-1 text-gray-300">
            <li><Link href="#">WhatsApp</Link></li>
            <li><Link href="#">Instagram</Link></li>
            <li><Link href="#">LinkedIn</Link></li>
            <li><Link href="#">Facebook</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6 px-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>©2025 Desarrollado por Fabrizzio Zambrano</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white">Privacy & Policy</Link>
          <Link href="#" className="hover:text-white">Terms & Condition</Link>
        </div>
      </div>
    </footer>
  )
}
