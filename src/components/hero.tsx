import Image from "next/image"

export default function Hero() {
  return (
    <section
  id="inicio"
  className="hero-bg min-h-[600px] md:min-h-screen min-w-[320px] bg-[#F9F6EE] text-[#0F1E2C] flex flex-col justify-between pt-[80px]"
>
      {/* Contenido principal: texto + imagen */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 flex-grow">
        {/* Columna izquierda */}
        <div className="md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-10">
          <h1 className="text-sm text-neutral-500 font-medium mb-2">
            Más de 200 clientes contentos
          </h1>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 max-w-xl">
            Transformamos espacios con{" "}
            <span className="text-[#2563eb] font-extrabold">calidad</span>
          </h1>

          <p className="text-lg mb-6 max-w-md">
            Especialistas en instalación de Drywall, pintura profesional y servicios eléctricos. Calidad garantizada para tu hogar o negocio.
          </p>

          <div className="flex gap-4 flex-wrap text-lg">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-2xl shadow transition">
              Solicitar presupuesto
            </button>
            <button className="border border-[#0F1E2C] hover:border-[#2563eb] hover:bg-[#2563eb] hover:text-white px-7 py-2 rounded-2xl text-[#0F1E2C] transition">
              Ver Proyectos
            </button>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="hidden md:block md:w-1/2 h-[500px] relative rounded-lg shadow-md overflow-hidden md:rounded-tl-[108px]">
          <Image
            src="/hero.jpeg"
            alt="Trabajador drywall"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Métricas debajo */}
      <div className="bg-[#ffc878] py-10 px-6 grid grid-cols-1 sm:grid-cols-3 text-center text-[#0F1E2C] gap-8 sm:gap-0 shadow-md">
  <div className="flex flex-col items-center gap-1">
    <p className="text-3xl font-bold">+12 años</p>
    <p className="text-base">de experiencia</p>
  </div>
  <div className="flex flex-col items-center gap-1">
    <p className="text-3xl font-bold">+500</p>
    <p className="text-base">Proyectos Realizados</p>
  </div>
  <div className="flex flex-col items-center gap-1">
    <p className="text-3xl font-bold">100%</p>
    <p className="text-base">Clientes Satisfechos</p>
  </div>
</div>

    </section>
  )
}
