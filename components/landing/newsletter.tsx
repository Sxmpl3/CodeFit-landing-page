'use client'

import { useState } from 'react'
import { addEmail } from '@/src/supabase/newsletter'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function NewsletterCard() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    setError('')

    // Insertar email en Supabase
    const resultEmail = await addEmail(email, setError);

    if (resultEmail) {
      alert('¡Correo añadido con éxito!');
      setEmail('');
    }


    // Enviar correo usando API route
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: email,
        subject: 'Gracias por suscribirte',
        message: '¡Gracias por unirte a nuestra newsletter! Estarás al día con las novedades.'
      })
    })

    const result = await res.json()
    if (!res.ok) {
      throw new Error(result.error || 'Error al enviar el correo')
    }
  }

  return (
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
          <p className="text-gray-400 text-sm">Recibe actualizaciones y novedades sobre el desarrollo de CodeFit</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            placeholder="tu@email.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-black/50 border-gray-700 text-white placeholder-gray-500 focus:border-green-500 focus:ring-green-500/20 transition-all duration-300"
          />
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black font-bold py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
          >
            {loading ? 'Registrando...' : 'Comenzar mi transformación'}
          </Button>
        </form>

        {success && (
          <p className="text-green-400 text-sm mt-4 text-center">
            ¡Te has registrado correctamente!
          </p>
        )}
      </CardContent>
    </Card>
  )
}
