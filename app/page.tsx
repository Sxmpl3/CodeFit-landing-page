"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function LandingPage() {
  const faqData = [
    {
      question: "¿Realmente solo necesito 30 minutos al día?",
      answer:
        "Sí, nuestro programa está diseñado para ser eficiente. 30 minutos de ejercicios focalizados son más efectivos que horas de actividad sin propósito. Cada rutina está optimizada para maximizar resultados en el menor tiempo posible.",
    },
    {
      question: "¿Qué pasa si no tengo experiencia haciendo ejercicio?",
      answer:
        "CodeFit está diseñado específicamente para principiantes. Comenzamos con ejercicios básicos y progresamos gradualmente. Incluimos videos explicativos y modificaciones para todos los niveles de condición física.",
    },
    {
      question: "¿Necesito algún equipamiento especial?",
      answer:
        "No necesitas nada más que tu cuerpo y un espacio de 2x2 metros. Todos los ejercicios utilizan el peso corporal. Opcionalmente, una esterilla puede hacer los ejercicios de suelo más cómodos.",
    },
    {
      question: "¿Qué pasa si me pierdo un día?",
      answer:
        "La vida pasa, lo entendemos. Si te pierdes un día, simplemente continúa al siguiente. El objetivo es crear un hábito sostenible, no la perfección. La app te ayudará a retomar donde lo dejaste.",
    },
    {
      question: "¿Cuándo veré resultados?",
      answer:
        "Los primeros cambios en energía y postura los notarás en la primera semana. Cambios físicos visibles generalmente aparecen entre las semanas 2-3. Los resultados más significativos se ven al completar los 30 días.",
    },
    {
      question: "¿Es realmente gratis?",
      answer:
        "El reto básico de 30 días es completamente gratis. Incluye todas las rutinas, tracking básico y acceso a la comunidad. Tenemos planes premium opcionales con características adicionales como nutrición personalizada y coaching 1:1.",
    },
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-6 backdrop-blur-md bg-black/20 border-b border-green-500/20">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Image
              src="/logo.png"
              alt="CodeFit Logo"
              width={128}
              height={48}
            />
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="#about"
            className="text-gray-300 hover:text-green-400 transition-all duration-300 hover:scale-105"
          >
            ¿Qué es CodeFit?
          </Link>
          <Link
            href="#features"
            className="text-gray-300 hover:text-green-400 transition-all duration-300 hover:scale-105"
          >
            Características
          </Link>
          <Link href="#faq" className="text-gray-300 hover:text-green-400 transition-all duration-300 hover:scale-105">
            FAQ
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className="border-green-500/10 bg-black text text-green-400 hover:bg-green-500/30 hover:text-white transition-all duration-300 hover:scale-105"
          >
            Iniciar Sesión
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-green-500/5 to-transparent rounded-full"></div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-green-400 rotate-45 animate-bounce delay-300"></div>
          <div className="absolute top-3/4 right-1/4 w-6 h-6 border-2 border-green-400 rotate-12 animate-spin-slow"></div>
          <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-emerald-400 rounded-full animate-ping delay-700"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            {/* Badge with glow effect */}
            <div className="inline-block mb-8">
              <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border border-green-500/30 px-6 py-2 text-sm font-medium backdrop-blur-sm shadow-lg shadow-green-500/10">
                🏃‍♂️ Reto Fitness para developers
              </Badge>
            </div>

            {/* Main Headline with gradient */}
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Transforma tu
              </span>
              <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-green-300 bg-clip-text text-transparent animate-gradient">
                cuerpo en 30 días
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
              El primer reto de fitness diseñado específicamente para{" "}
              <span className="text-green-400 font-semibold">developers</span>
            </p>
            <p className="text-lg text-gray-400 mb-16 max-w-2xl mx-auto">
              30 minutos al día. Sin gimnasio. Sin excusas. Solo tú y tu determinación.
            </p>

            {/* Newsletter */}
            <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
              <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-green-500/20 shadow-2xl shadow-green-500/10 max-w-md w-full">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-4 shadow-lg shadow-green-500/25">
                      <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Únete al reto</h3>
                    <p className="text-gray-400 text-sm">Recibe tu plan personalizado y actualizaciones</p>
                  </div>

                  <form className="space-y-4">
                    <Input
                      type="email"
                      placeholder="tu@email.com"
                      className="bg-black/50 border-gray-700 text-white placeholder-gray-500 focus:border-green-500 focus:ring-green-500/20 transition-all duration-300"
                    />
                    <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black font-bold py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
                      Comenzar mi transformación
                    </Button>
                  </form>

                  <p className="text-xs text-gray-500 mt-4 text-center">
                    100% gratis • Sin spam • Cancela cuando quieras
                  </p>
                </CardContent>
              </Card>

              {/* Estadísticas */}
              <div className="grid grid-cols-2 gap-6 lg:gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">30</div>
                  <div className="text-gray-400 text-sm">Días de reto</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">30</div>
                  <div className="text-gray-400 text-sm">Min por día</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">0</div>
                  <div className="text-gray-400 text-sm">Equipamiento</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
                  <div className="text-gray-400 text-sm">En casa</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ¿Qué es CodeFit? */}
      <section id="about" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5"></div>
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              ¿Qué es{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                CodeFit
              </span>
              ?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                CodeFit es más que un reto de fitness. Es un{" "}
                <span className="text-green-400 font-semibold">programa científicamente diseñado</span> para
                developers y personas sedentarias que quieren mejorar su salud física sin complicaciones.
              </p>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-green-400">🎯 Enfoque específico</h3>
                  <p className="text-gray-400">
                    Ejercicios adaptados para contrarrestar los efectos de estar sentado todo el día. Fortalecemos
                    espalda, cuello, y mejoramos la postura.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-green-400">⏰ Tiempo realista</h3>
                  <p className="text-gray-400">
                    Solo 30 minutos al día. Sabemos que tu tiempo es valioso, por eso cada minuto cuenta con ejercicios
                    de alta efectividad.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-green-400">🏠 Sin barreras</h3>
                  <p className="text-gray-400">
                    Cero equipamiento, cero gimnasio, cero excusas. Solo necesitas un espacio de 2x2 metros y ganas de
                    cambiar.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-green-400">📱 Tech-friendly</h3>
                  <p className="text-gray-400">
                    App intuitiva, tracking automático, y recordatorios inteligentes que se adaptan a tu horario de
                    trabajo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Características */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Diseñado para <span className="text-green-400">developers</span>
            </h2>
            <p className="text-xl text-gray-400">Porque entendemos tu estilo de vida</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/25">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Rutinas Adaptativas</h3>
                <p className="text-gray-400 leading-relaxed">
                  Ejercicios que se ajustan automáticamente a tu progreso y nivel de condición física actual.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/25">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Horarios Flexibles</h3>
                <p className="text-gray-400 leading-relaxed">
                  Entrena cuando quieras: antes del trabajo, en el descanso, o después del código. Tú decides.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/25">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Progreso Medible</h3>
                <p className="text-gray-400 leading-relaxed">
                  Métricas claras y visualización de datos para trackear tu evolución como un verdadero dev.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/3 to-emerald-500/3"></div>
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Preguntas <span className="text-green-400">Frecuentes</span>
            </h2>
            <p className="text-xl text-gray-400">Resolvemos tus dudas sobre CodeFit</p>
          </div>  

          <div className="space-y-2">
            {faqData.map((faq, index) => {
              const [openIndex, setOpenIndex] = React.useState<number | null>(null)
              const isOpen = openIndex === index

              return (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
                >
                  <CardContent className="p-0">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-green-500/5 transition-all duration-300"
                    >
                      <h3 className="text-lg md:text-xl font-semibold text-white pr-4">{faq.question}</h3>
                      <div
                        className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      >
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      } overflow-hidden`}
                    >
                      <div className="px-6 pb-4 pt-0 overflow-hidden">
                        <div className="border-t border-green-500/10 pt-4">
                          <p className="text-gray-400 leading-relaxed text-sm md:text-base">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-500/20 py-12 px-6 bg-gradient-to-r from-gray-950 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                  CodeFit
                </span>
                <p className="text-xs text-gray-500">Transforma tu cuerpo, mejora tu código</p>
              </div>
            </div>
            <div className="flex space-x-8 text-sm text-gray-400">
              <Link href="#" className="hover:text-green-400 transition-colors">
                Términos
              </Link>
              <Link href="#" className="hover:text-green-400 transition-colors">
                Privacidad
              </Link>
              <Link href="#" className="hover:text-green-400 transition-colors">
                Contacto
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© 2025 CodeFit. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  )
}
