import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PrivacyPolicy = () => {
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
        <h1 className="text-4xl font-bold mb-4 text-green-400">Política de Privacidad – CodeFit</h1>
        <p className="text-sm text-gray-300 mb-8">Última actualización: 04/06/2025</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-300">1. Información que Recopilamos</h2>
        <p className="text-gray-300 leading-relaxed">
          Recopilamos información que nos proporcionas directamente cuando:
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
          <li>Creas una cuenta</li>
          <li>Completas tu perfil</li>
          <li>Registras tu progreso de entrenamiento</li>
          <li>Nos contactas para soporte</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-300">2. Uso de la Información</h2>
        <p className="text-gray-300 leading-relaxed">
          Utilizamos tu información para:
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
          <li>Proporcionar y mejorar nuestros servicios</li>
          <li>Personalizar tu experiencia de entrenamiento</li>
          <li>Enviar actualizaciones y notificaciones importantes</li>
          <li>Responder a tus consultas y solicitudes</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-300">3. Protección de Datos</h2>
        <p className="text-gray-300 leading-relaxed">
          Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos personales contra acceso no autorizado, pérdida o alteración.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-300">4. Compartir Información</h2>
        <p className="text-gray-300 leading-relaxed">
          No vendemos ni alquilamos tus datos personales. Solo compartimos información cuando:
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
          <li>Es necesario para proporcionar nuestros servicios</li>
          <li>Lo exige la ley</li>
          <li>Nos das tu consentimiento explícito</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-300">5. Tus Derechos</h2>
        <p className="text-gray-300 leading-relaxed">
          Tienes derecho a:
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
          <li>Acceder a tus datos personales</li>
          <li>Corregir información inexacta</li>
          <li>Solicitar la eliminación de tus datos</li>
          <li>Retirar tu consentimiento en cualquier momento</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-300">6. Cookies y Tecnologías Similares</h2>
        <p className="text-gray-300 leading-relaxed">
          Utilizamos cookies y tecnologías similares para mejorar tu experiencia en la plataforma. Puedes controlar el uso de cookies a través de la configuración de tu navegador.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-300">7. Cambios en la Política</h2>
        <p className="text-gray-300 leading-relaxed">
          Nos reservamos el derecho de actualizar esta política de privacidad. Te notificaremos sobre cambios significativos a través de la plataforma o por correo electrónico.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-300">8. Contacto</h2>
        <p className="text-gray-300 leading-relaxed">
          Si tienes preguntas sobre esta política de privacidad, puedes contactarnos a través de nuestro <a href="/contacto" className="text-green-400 hover:text-green-300 underline">formulario de contacto</a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
  