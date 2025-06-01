"use client"

import React, { useState } from "react"
import Header from "@/components/general/header"
import Footer from "@/components/general/footer"
import NewsletterCard from '@/components/landing/newsletter'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function LandingPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)

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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const handleSubscribe = () => {
    if (!email) return
    // Aquí podrías agregar la lógica de suscripción real
    setSuccess(true)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white overflow-hidden">
      {/* Navigation */}
      <Header />

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

            <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">               
              <NewsletterCard />
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
              const isOpen = openIndex === index

              return (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
                >
                  <CardContent className="p-0">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between transition-all duration-300"
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
      <Footer />

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
