import Header from "@/components/header"
import Hero from "@/components/hero"
import Metricas from "@/components/metricas"
import Nosotros from "@/components/nosotros"
import Servicios from "@/components/servicios"
import Proyectos from "@/components/proyectos"
import Contacto from "@/components/contacto"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />  
      <Nosotros />
      <Servicios />
      <Proyectos />
      <Contacto />
      <Footer />
    </>
  )
}
