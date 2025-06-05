import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="relative z-50 flex items-center justify-between px-6 py-6 backdrop-blur-md bg-black/20 border-b border-green-500/20">
      {/* Logo (izquierda) */}
      <div className="flex items-center">
        <div className="relative">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="CodeFit Logo"
              width={100}
              height={100}
            />
          </Link>
        </div>
      </div>

      {/* Menú centrado */}
      <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2 space-x-8">
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
        <Link 
          href="#faq" 
          className="text-gray-300 hover:text-green-400 transition-all duration-300 hover:scale-105"
        >
          FAQ
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
  )
}