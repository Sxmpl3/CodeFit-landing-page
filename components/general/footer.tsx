import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-green-500/20 py-12 px-4 sm:px-6 bg-gradient-to-r from-gray-950 to-black">
      <div className="max-w-6xl mx-auto">
        {/* Contenido principal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo y eslogan */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                CodeFit
              </span>
              <p className="text-xs text-gray-500 mt-1">
                Transforma tu cuerpo, mejora tu código
              </p>
            </div>
          </div>

          {/* Enlaces */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm text-gray-400">
            <Link
              href="/terminos"
              className="hover:text-green-400 transition-colors duration-200"
            >
              Términos
            </Link>
            <Link
              href="/privacidad"
              className="hover:text-green-400 transition-colors duration-200"
            >
              Privacidad
            </Link>
            {/* Link a Instagram con icono */}
            <Link
              href="https://www.instagram.com/codefit.es"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-green-400 transition-colors duration-200"
            >
              <FaInstagram /> 
              Instagram
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} CodeFit. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
