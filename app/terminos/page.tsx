import Link from 'next/link';

export default function Terminos() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <Link 
          href="/register" 
          className="text-indigo-600 hover:text-indigo-800 mb-6 inline-block"
        >
          ← Volver al registro
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Términos y Condiciones de Servicio
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Aceptación de los Términos Absurdos
            </h2>
            <p>
              Al registrarte en esta plataforma, automáticamente aceptas que los miércoles 
              son oficialmente el día más gracioso de la semana. También reconoces que los 
              gatos son superiores a los perros (lo sentimos, amantes de los perros, pero 
              son las reglas).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. Uso de Datos Personales
            </h2>
            <p>
              Tu información personal será guardada en nuestro servidor ultra secreto 
              ubicado en una cueva en las montañas de Narnia. Prometemos no venderla a 
              aliens espaciales, aunque nos hagan ofertas muy tentadoras. Tu correo 
              electrónico solo recibirá spam de alta calidad sobre ofertas de unicornios 
              y recetas de pizza de piña (sí, somos esa clase de monstruos).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. Contraseñas y Seguridad
            </h2>
            <p>
              Tu contraseña debe ser lo suficientemente fuerte como para resistir un ataque 
              de zombies cibernéticos. Recomendamos usar al menos 6 caracteres que incluyan 
              emojis, números primos y referencias a películas de los 80. No compartas tu 
              contraseña con nadie, ni siquiera con tu gato (especialmente con tu gato, 
              son notoriamente indiscretos).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. Comportamiento del Usuario
            </h2>
            <p>
              Como usuario de esta plataforma, te comprometes a: ser amable con los 
              demás usuarios, no alimentar a los trolls después de medianoche, y 
              siempre usar correctamente los memes (el mal uso de memes es un crimen 
              contra la humanidad). También debes prometer que nunca revelarás spoilers 
              de series sin previo aviso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. Propiedad Intelectual
            </h2>
            <p>
              Todo el contenido de esta plataforma es propiedad de... bueno, de alguien. 
              Probablemente nosotros, pero honestamente perdimos los papeles. De todas 
              formas, no copies nuestras cosas o enviaremos a nuestro abogado (que 
              actualmente es un periquito llamado Sr. Plumas, pero es muy persuasivo).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. Limitación de Responsabilidad
            </h2>
            <p>
              No nos hacemos responsables por: ataques de risa incontrolable, adicción 
              a procrastinar en nuestra plataforma, pérdida de noción del tiempo mientras 
              navegas, o el hecho de que ahora tengas antojo de tacos a las 3 AM. 
              Tampoco nos responsabilizamos si tu productividad cae en picada después 
              de usar nuestro servicio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              7. Modificaciones de los Términos
            </h2>
            <p>
              Nos reservamos el derecho de cambiar estos términos cuando se nos dé la 
              gana, generalmente los martes después de nuestro café de la mañana. Te 
              notificaremos de cualquier cambio mediante señales de humo, telepatía, 
              o más probablemente, un email que ignorarás completamente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              8. Terminación del Servicio
            </h2>
            <p>
              Podemos cancelar tu cuenta si: usas Comic Sans de manera no irónica, 
              pones la leche antes del cereal, o cometes cualquier otra atrocidad 
              contra el buen gusto. La decisión es final e inapelable (a menos que 
              nos sobornes con galletas, somos débiles ante las galletas).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              9. Ley Aplicable
            </h2>
            <p>
              Estos términos se rigen por las leyes del sentido común y las reglas no 
              escritas de Internet. Cualquier disputa será resuelta mediante una batalla 
              de piedra, papel o tijera. En caso de empate, se procederá a un duelo de 
              memes. La decisión del tribunal de Internet es definitiva.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              10. Cláusula de "Lo Leíste Todo"
            </h2>
            <p>
              Si realmente leíste hasta aquí, felicidades, eres parte del 0.001% de 
              usuarios que lee los términos y condiciones. Como recompensa, te otorgamos 
              el título honorífico de "Humano Responsable con Demasiado Tiempo Libre". 
              Puedes imprimir este certificado imaginario y colgarlo en tu pared invisible.
            </p>
          </section>

          <div className="mt-12 p-6 bg-gray-100 rounded-lg border-l-4 border-indigo-600">
            <p className="text-sm text-gray-600 italic">
              Última actualización: 32 de Octiembre de 2024 (sí, esa fecha existe en 
              nuestro calendario alternativo). Al aceptar estos términos, reconoces que 
              fueron escritos con una sonrisa y una taza de café demasiado fuerte.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}