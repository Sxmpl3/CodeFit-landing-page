import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white overflow-hidden">

      <nav className="relative z-50 flex items-center justify-between px-6 py-6 backdrop-blur-md bg-black/20 border-b border-green-500/20">
        {/* Logo (izquierda) */}
        <div className="flex items-center">
          <div className="relative">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="CodeFit Logo"
                width={160}
                height={90}
              />
            </Link>
          </div>
        </div>

        {/* Menú centrado */}
        <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2 space-x-8">
          <Link
            href="/"
            className="text-gray-300 hover:text-green-400 transition-all duration-300 hover:scale-105"
          >
            Inicio
          </Link>
          <Link
            href="/terminos"
            className="text-gray-300 hover:text-green-400 transition-all duration-300 hover:scale-105"
          >
            Términos
          </Link>
          <Link 
            href="/privacidad" 
            className="text-gray-300 hover:text-green-400 transition-all duration-300 hover:scale-105"
          >
            Privacidad
          </Link>
        </div>

        {/* Espaciador derecho (para alinear logo) */}
        <div className="invisible">
          <div className="relative">
            <Image
              src="/logo.png"
              alt="CodeFit Logo"
              width={128}
              height={48}
            />
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto p-6 text-white">
        <h1 className="text-4xl font-bold mb-4 text-green-400">Términos y Condiciones de Uso – CodeFit</h1>
        <p className="text-sm text-gray-300 mb-8">Última actualización: 04/06/2025</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-300">1. Aceptación de los Términos</h2>
        <p className="text-gray-300 leading-relaxed">
          Al acceder y utilizar la plataforma CodeFit (en adelante, &ldquo;la Plataforma&rdquo;), aceptas cumplir con estos Términos y Condiciones de Uso. Si no estás de acuerdo con alguna parte, no deberías utilizar nuestros servicios.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-300">2. Descripción del Servicio</h2>
        <p className="text-gray-300 leading-relaxed">
          CodeFit es una plataforma que combina fitness y desarrollo de software para ofrecer rutinas personalizadas, retos y contenido enfocado a mejorar tanto la salud física como la productividad de los desarrolladores.
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
          <li>Generación de rutinas de entrenamiento</li>
          <li>Seguimiento de hábitos</li>
          <li>Retos semanales</li>
          <li>Consejos y recursos para combinar programación y salud</li>
          <li>Recomendaciones generadas por IA (en fases avanzadas)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-300">3. Elegibilidad</h2>
        <p className="text-gray-300 leading-relaxed">
          Debes tener al menos 16 años para usar la Plataforma. Al usarla, confirmas que cumples con este requisito.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-300">4. Uso Aceptable</h2>
        <p className="text-gray-300 leading-relaxed">Te comprometes a utilizar la Plataforma solo para fines lícitos y de acuerdo con estos Términos. Está prohibido:</p>
        <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
          <li>Usar la Plataforma para actividades fraudulentas o ilegales</li>
          <li>Compartir contenido ofensivo o inapropiado</li>
          <li>Intentar vulnerar la seguridad del sistema</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-300">5. Propiedad Intelectual</h2>
        <p className="text-gray-300 leading-relaxed">
          Todo el contenido de CodeFit, incluyendo el software, diseño, textos, gráficos y logotipos, es propiedad de [Tu Nombre o Tu Empresa] y está protegido por las leyes de propiedad intelectual. No se permite su reproducción sin permiso.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-300">6. Limitación de Responsabilidad</h2>
        <p className="text-gray-300 leading-relaxed">
          CodeFit no es un servicio médico. Las rutinas y sugerencias ofrecidas son de carácter general y no sustituyen el consejo de profesionales de la salud. Usas la plataforma bajo tu propio riesgo.
        </p>
        <p className="text-gray-300 leading-relaxed">
          No nos hacemos responsables de daños derivados del uso de la Plataforma, incluyendo lesiones físicas, pérdida de datos o interrupciones del servicio.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-300">7. Modificaciones</h2>
        <p className="text-gray-300 leading-relaxed">
          Nos reservamos el derecho de actualizar estos Términos en cualquier momento. Te notificaremos los cambios relevantes, y el uso continuado del servicio se considerará aceptación de los mismos.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-300">8. Cancelación de la Cuenta</h2>
        <p className="text-gray-300 leading-relaxed">
          Puedes dejar de usar la Plataforma en cualquier momento. Nos reservamos el derecho de suspender cuentas que violen estos Términos sin previo aviso.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-300">9. Protección de Datos</h2>
        <p className="text-gray-300 leading-relaxed">
          Respetamos tu privacidad. Consulta nuestra <Link href="/privacidad" className="text-blue-600 underline">Política de Privacidad</Link> para saber cómo manejamos tus datos personales.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
