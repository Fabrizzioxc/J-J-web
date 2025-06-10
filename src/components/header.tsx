"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Nosotros", href: "#nosotros" },
    { label: "Servicios", href: "#servicios" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
  ]

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0F1E2C] shadow-lg" : "bg-transparent"
      }`}
    >
      <div
  className={`container max-w-screen-xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center ${
    scrolled ? "text-white" : "text-black"
  }`}
>

        {/* Logo */}
        
        <Link href="#inicio" className="block w-[90px] h-[50px] relative">
  <Image
    src={scrolled ? "/logolight.png" : "/logodark.png"}
    alt="Logo"
    fill
    className="object-contain"
  />
</Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8 text-base">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:text-orange-400 ${
                scrolled ? "text-white" : "text-black"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* WhatsApp button */}
        <a
  href="https://wa.me/+51992198415"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden md:inline-block bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base px-4 py-2 rounded-2xl"
>
  WhatsApp
</a>


        {/* Mobile menu toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile nav dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white text-black px-6 py-4 space-y-2 shadow-lg">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-orange-500"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://wa.me/51992198415"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded"
          >
            WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}
