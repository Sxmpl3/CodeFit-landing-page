import TermsAndConditions from '@/components/general/terminos'; // Ajusta si está en otra ruta
import Footer from '@/components/general/footer'

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <TermsAndConditions />
      <Footer />
    </main>
  );
}
