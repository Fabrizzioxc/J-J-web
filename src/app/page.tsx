import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  MessageCircle,
  Hammer,
  Paintbrush,
  Zap,
  Wrench,
  Building,
  CheckCircle,
  Star,
  Clock,
  Award,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function InvegarWebsite() {
  return (
    <div className="min-h-screen bg-background">
      {/* Topbar */}
      <div className="bg-gray-100 text-sm py-2 px-45 border-b border-gray-200 flex justify-between items-center">
        <div className="flex items-center space-x-4 text-gray-600">
          <div className="flex items-center space-x-1">
            <Phone className="w-4 h-4 text-blue-600" />
            <span>123-456-7890</span>
          </div>
          <div className="flex items-center space-x-1">
            <Mail className="w-4 h-4 text-blue-600" />
            <span>info@lorem.com</span>
          </div>
        </div>
        <div className="flex items-center space-x-1 text-gray-600">
          <span>Atención:</span>
          <Clock className="w-4 h-4" />
          <span>Lunes - Viernes 8am - 10pm</span>
        </div>
      </div>

      {/* Header principal */}
      <nav className="w-full bg-black text-white py-8 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            
            <div>
              <h1 className="text-lg font-bold leading-none">J&J</h1>
              <span className="text-xs tracking-wide text-gray-300">Servicios Generales</span>
            </div>
          </div>

          {/* Menú principal */}
          <div className="hidden md:flex flex-1 justify-center space-x-6 items-center text-lg">
            <Link href="#inicio" className=" hover:text-yellow-400 transition-colors border-b-2 border-yellow-400 pb-1">
              Inicio
            </Link>
            <Link href="#servicios" className=" hover:text-yellow-400 transition-colors">
              Servicios
            </Link>
            <Link href="#proyectos" className=" hover:text-yellow-400 transition-colors">
              Proyectos
            </Link>
            <Link href="#contacto" className="hover:text-yellow-400 transition-colors">
              Contacto
            </Link>
          </div>
          {/* WhatsApp */}
          <div className="hidden md:flex items-center">
            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
              WhatsApp
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative h-screen flex items-center justify-center text-white"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/heroinvegar.png"
            alt="Imagen de construcción"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            ESPECIALISTAS EN REMODELACIÓN Y ACABADOS DE CONSTRUCCIÓN
          </h1>
          <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-4 text-lg">
            Pide tu presupuesto ahora
          </Button>
        </div>
      </section>

      {/* About Us */}
{/* About Us */}
    <section className="bg-[#F0EBD8] py-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center relative">
        
        {/* Imagen izquierda */}
        <div className="w-full lg:w-1/2 mr-auto relative ml-20">
          <Image
            src="/trabajadores.jpg"
            alt="Obreros trabajando"
            width={800}
            height={500}
            className="rounded shadow-md w-full h-[500px] object-cover"
          />
        </div>

        {/* Tarjeta flotante */}
        <div className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full 
                    lg:absolute lg:right-65 lg:top-1/2 lg:-translate-y-1/2 mt-8 lg:mt-0">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
          Sobre nosotros
          </h2>
          <p className="text-gray-600 text-sm mb-6">
          En J&J Soluciones y Servicios Generales nos especializamos en brindar servicios de drywall, reparaciones, pintura, electricidad y cielo rasos
          con altos estándares de calidad.Contamos con un equipo técnico capacitado y comprometido en ofrecer soluciones eficientes, seguras y 
          duraderas, adaptadas a las necesidades de cada cliente. Más de 10 años de experiencia respaldan nuestro trabajo, posicionándonos 
          como una empresa confiable para proyectos residenciales, comerciales e industriales.
          </p>
        </div>
      </div>
    </section>




{/* Métricas destacadas */}
<section className="bg-yellow-400 py-10">
  <div className="container mx-auto px-4 flex flex-wrap justify-around text-center font-bold text-lg text-black">
    {[1, 2, 3, 4, 5].map((i) => (
      <div key={i} className="px-4 py-2 border-l border-black first:border-none">
        <p className="text-2xl">12,000+</p>
        <p className="text-sm font-medium mt-1">Lorem Ipsum</p>
      </div>
    ))}
  </div>
</section>

{/* Servicios */}
<section className="bg-[#f7f5ef] py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12">SERVICIOS</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[1, 2, 3, 4].map((card) => (
        <div key={card} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="h-40 bg-gray-300" />
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">Lorem Ipsum</h3>
            <p className="text-sm text-gray-600 mb-4">
              There are many variations of passages of Lorem Ipsum available...
            </p>
            <Link href="#" className="text-sm font-medium text-blue-600 hover:underline inline-flex items-center">
              Lorem Ipsum <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
      ))}
    </div>

    {/* Indicadores tipo carrusel */}
    <div className="flex justify-center mt-8 space-x-2">
      <span className="h-3 w-3 bg-black rounded-full" />
      <span className="h-3 w-3 bg-black/30 rounded-full" />
      <span className="h-3 w-3 bg-black/30 rounded-full" />
    </div>
  </div>
</section>


      {/* Galería de Proyectos */}
      <section id="proyectos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Trabajos recientes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="relative group overflow-hidden rounded-lg">
                <Image
                  src={`/placeholder.svg?height=300&width=400`}
                  alt={`Proyecto ${item}`}
                  width={400}
                  height={300}
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Badge variant="secondary">Ver proyecto</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Formulario de Contacto */}
      <section className="bg-[#f7f5ef] py-20">
  <div className="container mx-auto px-4">
    {/* Título principal */}
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
      Leading Way In Building & Civil Construction
    </h2>

    {/* Etiquetas de confianza */}
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {["Professional Staff", "100% Satisfaction", "Accurate Testing", "Transparent Pricing"].map((label) => (
        <span
          key={label}
          className="bg-black text-white text-sm px-4 py-2 rounded-full font-medium"
        >
          {label}
        </span>
      ))}
    </div>

    {/* Formulario y contacto */}
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {/* Formulario */}
      <div className="bg-[#3f6ea5] p-8 rounded-xl shadow-lg text-white">
        <h3 className="text-xl font-semibold mb-2">Request A Quote</h3>
        <p className="text-sm mb-6">
          Complete control over products allow us to offer the best quality prices and services.
        </p>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Name" className="bg-white text-black" />
            <Input placeholder="Email" type="email" className="bg-white text-black" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Phone" className="bg-white text-black" />
            <select className="bg-white text-black px-4 py-2 rounded-md border border-gray-300">
              <option>Select Your Service</option>
              <option>Drywall</option>
              <option>Pintura</option>
              <option>Electricidad</option>
            </select>
          </div>
          <Textarea placeholder="Additional Details" rows={4} className="bg-white text-black" />
          <Button className="w-full bg-black text-white hover:bg-gray-800">Submit Request</Button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="bg-[#3f6ea5] p-8 rounded-xl shadow-lg text-white space-y-6">
        <h3 className="text-xl font-semibold">Contact Info</h3>
        <div className="text-sm space-y-2">
          <p className="font-medium">Our Location</p>
          <p>18 Office Park, Building 20th Floor Unit A, Jakarta</p>

          <p className="font-medium mt-4">Quick Contact</p>
          <p>Email: contact@jhontarkotr.co</p>
          <p>Call: (+62) 877-2469-7946</p>

          <p className="font-medium mt-4">Opening Hours</p>
          <p>Monday – Friday<br />08:00 AM – 05:00 PM</p>
        </div>
        <Button variant="secondary" className="w-full bg-black text-white hover:bg-gray-800">Contact Us</Button>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">Invegar</span>
              </div>
              <p className="text-gray-400 mb-4">
                Soluciones profesionales en construcción y reparación para tu hogar y negocio.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageCircle className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Enlaces</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#inicio" className="hover:text-white transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="#servicios" className="hover:text-white transition-colors">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="#proyectos" className="hover:text-white transition-colors">
                    Proyectos
                  </Link>
                </li>
                <li>
                  <Link href="#contacto" className="hover:text-white transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Drywall</li>
                <li>Pintura</li>
                <li>Electricidad</li>
                <li>Reparaciones</li>
                <li>Cielo Rasos</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+57 300 123 4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@invegar.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Bogotá, Colombia</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Invegar. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
