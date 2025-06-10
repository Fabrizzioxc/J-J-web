// components/Metricas.tsx
export default function Metricas() {
    return (
      <section className="bg-orange-300 py-8" id="nosotros">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 text-center text-[#0F1E2C] font-bold text-lg gap-6">
          <div>
            <p className="text-3xl">+12 años</p>
            <p className="text-sm font-normal">de experiencia</p>
          </div>
          <div>
            <p className="text-3xl">+ 500</p>
            <p className="text-sm font-normal">Proyectos Realizados</p>
          </div>
          <div>
            <p className="text-3xl">100%</p>
            <p className="text-sm font-normal">Clientes Satisfechos</p>
          </div>
        </div>
      </section>
    )
  }
  