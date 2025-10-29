import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Inicializar Resend solo si hay API key
const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: Request) {
  try {
    // Verificar que Resend esté configurado
    if (!resend) {
      console.error('⚠️ RESEND_API_KEY no está configurada');
      return NextResponse.json(
        { error: 'Servicio de correo no configurado' },
        { status: 503 }
      );
    }

    const { email } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Este es el dominio gratis de Resend
      to: email,
      subject: '¡Bienvenido a nuestra App Absurda! 🎉',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #6366f1;">¡Bienvenido a bordo! 🚀</h1>
          
          <p>Hola,</p>
          
          <p>¡Gracias por registrarte en nuestra plataforma totalmente seria y nada ridícula!</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #4b5563; margin-top: 0;">Recordatorio Importante:</h2>
            <ul style="color: #6b7280;">
              <li>Los miércoles son oficialmente el día más gracioso de la semana</li>
              <li>Has aceptado que los gatos son superiores (lo sentimos, perros)</li>
              <li>Tu contraseña está protegida por... bueno, está ahí</li>
              <li>Nuestro servidor está en una cueva en Narnia</li>
            </ul>
          </div>
          
          <p>Si no solicitaste este registro, probablemente fue tu gato caminando sobre el teclado.</p>
          
          <p style="margin-top: 30px;">
            Saludos cósmicos,<br>
            <strong>El Equipo de Desarrollo (y el Sr. Plumas, nuestro abogado periquito)</strong>
          </p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          
          <p style="font-size: 12px; color: #9ca3af;">
            Este correo fue enviado porque aceptaste nuestros términos y condiciones absurdos. 
            Si quieres dejar de recibir estos correos, simplemente olvida tu contraseña (es muy efectivo).
          </p>
        </div>
      `
    });

    if (error) {
      console.error('Error enviando email:', error);
      return NextResponse.json(
        { error: 'Error al enviar el correo' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Correo enviado exitosamente', data },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error en la API:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}