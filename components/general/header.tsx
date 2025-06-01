import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
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
            className="border-green-500/10 bg-black text-green-400 hover:bg-green-500/30 hover:text-white transition-all duration-300 hover:scale-105"
          >
            Iniciar Sesión
          </Button>
        </div>
      </nav>
  )
}