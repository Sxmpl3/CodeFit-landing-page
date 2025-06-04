import PoliticaPrivacidad from '@/components/general/privacidad'; // Ajusta si está en otra ruta
import Footer from '@/components/general/footer'

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <PoliticaPrivacidad />
      <Footer />
    </main>
  );
}
