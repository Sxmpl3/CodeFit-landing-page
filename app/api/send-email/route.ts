import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { to, subject, message } = await request.json()
    console.log(to, subject, message)

    if (!to || !subject || !message) {
      return NextResponse.json({ error: 'Faltan datos requeridos' }, { status: 400 })
    }

    // Configura el transporter SMTP con variables de entorno
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

  
    console.log(await transporter.sendMail({
      from: `"CodeFit" <${process.env.SMTP_USER}>`,
      to,
      subject,
      text: message,
    }))

    return NextResponse.json({ message: 'Correo enviado con éxito' }, { status: 200 })
  } catch (error: any) {
    console.error('Error enviando correo:', error)

    const errorMessage = process.env.NODE_ENV === 'development' ? error.message || 'Error desconocido' : 'Error interno al enviar correo'
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}

