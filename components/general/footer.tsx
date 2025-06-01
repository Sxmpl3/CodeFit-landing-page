import Link from "next/link";

export default function Footer() {
    return (
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
    )
}