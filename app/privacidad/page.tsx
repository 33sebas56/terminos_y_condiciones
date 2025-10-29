import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="border-b border-gray-200 p-8">
          <Link 
            href="/register" 
            className="text-indigo-600 hover:text-indigo-800 mb-4 inline-block text-sm"
          >
            ← Volver al registro
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mt-2">
            AVISO DE PRIVACIDAD
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            Última actualización: Octubre 28, 2025
          </p>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              Este Aviso de Privacidad para el sexto semestre de ingeniería de software 
              ('nosotros', 'nos' o 'nuestro'), describe cómo y por qué podríamos acceder, 
              recopilar, almacenar, usar y/o compartir ('procesar') su información personal 
              cuando usa nuestros servicios ('Servicios'), incluyendo cuando usted:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>
                Visita nuestro sitio web en{' '}
                <a href="https://terminos-y-condiciones-mocha.vercel.app/register" 
                   className="text-indigo-600 hover:underline">
                  https://terminos-y-condiciones-mocha.vercel.app/register
                </a>{' '}
                o cualquier sitio web nuestro que enlace a este Aviso de Privacidad
              </li>
              <li>
                Se involucra con nosotros de otras formas relacionadas, incluyendo ventas, 
                marketing o eventos
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>¿Preguntas o inquietudes?</strong> Leer este Aviso de Privacidad le 
              ayudará a comprender sus derechos y opciones de privacidad. Somos responsables 
              de tomar decisiones sobre cómo se procesa su información personal. Si no está 
              de acuerdo con nuestras políticas y prácticas, por favor no use nuestros Servicios.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              TABLA DE CONTENIDOS
            </h2>
            <ol className="space-y-2 text-sm">
              <li>
                <a href="#section1" className="text-indigo-600 hover:underline">
                  1. ¿QUÉ INFORMACIÓN RECOPILAMOS?
                </a>
              </li>
              <li>
                <a href="#section2" className="text-indigo-600 hover:underline">
                  2. ¿CÓMO PROCESAMOS SU INFORMACIÓN?
                </a>
              </li>
              <li>
                <a href="#section3" className="text-indigo-600 hover:underline">
                  3. ¿CUÁNDO Y CON QUIÉN COMPARTIMOS SU INFORMACIÓN PERSONAL?
                </a>
              </li>
              <li>
                <a href="#section4" className="text-indigo-600 hover:underline">
                  4. ¿CUÁNTO TIEMPO CONSERVAMOS SU INFORMACIÓN?
                </a>
              </li>
              <li>
                <a href="#section5" className="text-indigo-600 hover:underline">
                  5. ¿CUÁLES SON SUS DERECHOS DE PRIVACIDAD?
                </a>
              </li>
              <li>
                <a href="#section6" className="text-indigo-600 hover:underline">
                  6. CONTROLES PARA FUNCIONES DE NO RASTREO
                </a>
              </li>
              <li>
                <a href="#section7" className="text-indigo-600 hover:underline">
                  7. ¿OTRAS REGIONES TIENEN DERECHOS DE PRIVACIDAD ESPECÍFICOS?
                </a>
              </li>
              <li>
                <a href="#section8" className="text-indigo-600 hover:underline">
                  8. TENDRÁ UNA DEUDA CREACIÓN CUENTA.
                </a>
              </li>
              <li>
                <a href="#section9" className="text-indigo-600 hover:underline">
                  9. ¿HACEMOS ACTUALIZACIONES A ESTE AVISO?
                </a>
              </li>
              <li>
                <a href="#section10" className="text-indigo-600 hover:underline">
                  10. ¿CÓMO PUEDE CONTACTARNOS SOBRE ESTE AVISO?
                </a>
              </li>
              <li>
                <a href="#section11" className="text-indigo-600 hover:underline">
                  11. ¿CÓMO PUEDE REVISAR, ACTUALIZAR O ELIMINAR LOS DATOS QUE RECOPILAMOS?
                </a>
              </li>
            </ol>
          </div>

          {/* Section 1 */}
          <section id="section1" className="mb-10 scroll-mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. ¿QUÉ INFORMACIÓN RECOPILAMOS?
            </h2>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Información personal que usted nos divulga
            </h3>
            
            <p className="text-sm italic text-gray-600 mb-4">
              <strong>En resumen:</strong> Recopilamos información personal que usted nos proporciona.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Recopilamos información personal que usted voluntariamente nos proporciona cuando 
              se registra en los Servicios, expresa interés en obtener información sobre nosotros 
              o nuestros productos y Servicios, cuando participa en actividades en los Servicios, 
              o de otra manera cuando nos contacta.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-3">
              <strong>Información Personal Proporcionada por Usted.</strong> La información personal 
              que recopilamos depende del contexto de sus interacciones con nosotros y los Servicios, 
              las elecciones que hace, y los productos y características que usa. La información 
              personal que recopilamos puede incluir lo siguiente:
            </p>
            
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
              <li>direcciones de correo electrónico</li>
              <li>contraseñas (almacenadas de forma extremadamente segura en texto plano... 
                  esperamos que nadie mire el código fuente)</li>
            </ul>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Información Sensible.</strong> No procesamos información sensible. 
              Aunque si considera sensible el hecho de que su contraseña esté visible para 
              cualquier desarrollador con acceso al localStorage, entonces tal vez deberíamos reconsiderar.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Toda la información personal que nos proporcione debe ser verdadera, completa y 
              precisa, y debe notificarnos cualquier cambio a dicha información personal. 
              (Especialmente si cambió su correo y olvidó su contraseña, porque no tenemos 
              recuperación de contraseña implementada todavía).
            </p>
          </section>

          {/* Section 2 */}
          <section id="section2" className="mb-10 scroll-mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. ¿CÓMO PROCESAMOS SU INFORMACIÓN?
            </h2>
            
            <p className="text-sm italic text-gray-600 mb-4">
              <strong>En resumen:</strong> Procesamos su información para proporcionar, mejorar 
              y administrar nuestros Servicios, comunicarnos con usted, para seguridad y prevención 
              de fraude, y para cumplir con la ley. También podemos procesar su información para 
              otros propósitos con su consentimiento.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Procesamos su información personal para una variedad de razones, dependiendo 
              de cómo interactúe con nuestros Servicios, incluyendo:</strong>
            </p>
            
            <ul className="list-disc ml-6 text-gray-700 space-y-3">
              <li>
                <strong>Para facilitar la creación y autenticación de cuentas y administrar 
                de otra manera las cuentas de usuario.</strong> Podemos procesar su información 
                para que pueda crear e iniciar sesión en su cuenta, así como mantener su cuenta 
                en funcionamiento. Prometemos no leer sus correos... principalmente porque no 
                tenemos acceso a su buzón de correo real.
              </li>
              <li>
                <strong>Para cumplir con nuestras obligaciones legales.</strong> Podemos procesar 
                su información para cumplir con nuestras obligaciones legales, responder a 
                solicitudes legales y ejercer, establecer o defender nuestros derechos legales. 
                Nuestro abogado (un periquito muy competente) nos asesora en estos asuntos.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="section3" className="mb-10 scroll-mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. ¿CUÁNDO Y CON QUIÉN COMPARTIMOS SU INFORMACIÓN PERSONAL?
            </h2>
            
            <p className="text-sm italic text-gray-600 mb-4">
              <strong>En resumen:</strong> Podemos compartir información en situaciones específicas 
              descritas en esta sección y/o con los siguientes terceros.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Podemos necesitar compartir su información personal en las siguientes situaciones:
            </p>
            
            <ul className="list-disc ml-6 text-gray-700 space-y-3">
              <li>
                <strong>Transferencias de Negocio.</strong> Podemos compartir o transferir su 
                información en conexión con, o durante negociaciones de, cualquier fusión, venta 
                de activos de la compañía, financiamiento, o adquisición de todo o una porción de 
                nuestro negocio a otra compañía. En ese caso, el nuevo propietario probablemente 
                se preguntará por qué guardamos las contraseñas en texto plano.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="section4" className="mb-10 scroll-mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. ¿CUÁNTO TIEMPO CONSERVAMOS SU INFORMACIÓN?
            </h2>
            
            <p className="text-sm italic text-gray-600 mb-4">
              <strong>En resumen:</strong> Conservamos su información durante el tiempo necesario 
              para cumplir con los propósitos descritos en este Aviso de Privacidad a menos que 
              la ley requiera lo contrario.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Solo conservaremos su información personal durante el tiempo necesario para los 
              propósitos establecidos en este Aviso de Privacidad, a menos que se requiera o 
              permita un período de retención más largo por ley (como impuestos, contabilidad u 
              otros requisitos legales). Ningún propósito en este aviso requerirá que mantengamos 
              su información personal durante más tiempo del período de tiempo en el que los 
              usuarios tienen una cuenta con nosotros.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Cuando no tengamos ninguna necesidad comercial legítima en curso para procesar su 
              información personal, eliminaremos o anonimizaremos dicha información, o, si esto no 
              es posible (por ejemplo, porque su información personal se ha almacenado en archivos 
              de respaldo), entonces almacenaremos de forma segura su información personal y la 
              aislaremos de cualquier procesamiento adicional hasta que sea posible la eliminación. 
              O hasta que alguien borre su navegador y pierda todos los datos del localStorage, 
              lo que probablemente ocurrirá primero.
            </p>
          </section>

          {/* Section 5 */}
          <section id="section5" className="mb-10 scroll-mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. ¿CUÁLES SON SUS DERECHOS DE PRIVACIDAD?
            </h2>
            
            <p className="text-sm italic text-gray-600 mb-4">
              <strong>En resumen:</strong> Puede revisar, cambiar o terminar su cuenta en cualquier 
              momento, dependiendo de su país, provincia o estado de residencia.
            </p>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-3 mt-6">
              Retiro de su consentimiento:
            </h3>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Si estamos confiando en su consentimiento para procesar su información personal, que 
              puede ser consentimiento expreso y/o implícito dependiendo de la ley aplicable, tiene 
              el derecho de retirar su consentimiento en cualquier momento. Puede retirar su 
              consentimiento en cualquier momento contactándonos usando los detalles de contacto 
              proporcionados en la sección{' '}
              <a href="#section10" className="text-indigo-600 hover:underline">
                '¿CÓMO PUEDE CONTACTARNOS SOBRE ESTE AVISO?'
              </a>{' '}
              a continuación.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Sin embargo, tenga en cuenta que esto no afectará la legalidad del procesamiento antes 
              de su retiro ni, cuando la ley aplicable lo permita, afectará el procesamiento de su 
              información personal realizado basándose en bases de procesamiento legal distintas al 
              consentimiento.
            </p>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-3 mt-6">
              Optar por no recibir comunicaciones de marketing y promocionales:
            </h3>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Puede darse de baja de nuestras comunicaciones de marketing y promocionales en cualquier 
              momento respondiendo 'STOP' o 'UNSUBSCRIBE' a los mensajes SMS que enviamos, o 
              contactándonos usando los detalles proporcionados en la sección{' '}
              <a href="#section10" className="text-indigo-600 hover:underline">
                '¿CÓMO PUEDE CONTACTARNOS SOBRE ESTE AVISO?'
              </a>{' '}
              a continuación. Luego será eliminado de las listas de marketing. Sin embargo, aún 
              podemos comunicarnos con usted —por ejemplo, para enviarle mensajes relacionados con el 
              servicio que sean necesarios para la administración y uso de su cuenta, para responder a 
              solicitudes de servicio, o para otros propósitos no relacionados con marketing.
            </p>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-3 mt-6">
              Información de la Cuenta
            </h3>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Si en algún momento desea revisar o cambiar la información en su cuenta o terminar su 
              cuenta, puede:
            </p>
            
            <ul className="list-disc ml-6 text-gray-700 mb-4">
              <li>Contactarnos usando la información de contacto proporcionada.</li>
            </ul>
            
            <p className="text-gray-700 leading-relaxed">
              Ante su solicitud de terminar su cuenta, desactivaremos o eliminaremos su cuenta e 
              información de nuestras bases de datos activas. Sin embargo, podemos retener alguna 
              información en nuestros archivos para prevenir fraude, solucionar problemas, ayudar con 
              cualquier investigación, hacer cumplir nuestros términos legales y/o cumplir con los 
              requisitos legales aplicables. También podría simplemente borrar las cookies de su 
              navegador, eso funciona igual de bien.
            </p>
          </section>

          {/* Section 6 */}
          <section id="section6" className="mb-10 scroll-mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. CONTROLES PARA FUNCIONES DE NO RASTREO
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              La mayoría de los navegadores web y algunos sistemas operativos móviles y aplicaciones 
              móviles incluyen una función de No Rastrear ('DNT') o configuración que puede activar 
              para señalar su preferencia de privacidad de no tener datos sobre sus actividades de 
              navegación en línea monitoreados y recopilados. En esta etapa, no se ha finalizado 
              ningún estándar tecnológico uniforme para reconocer e implementar señales DNT. Como 
              tal, actualmente no respondemos a señales de navegador DNT ni a ningún otro mecanismo 
              que comunique automáticamente su elección de no ser rastreado en línea. Si se adopta 
              un estándar para el rastreo en línea que debamos seguir en el futuro, le informaremos 
              sobre esa práctica en una versión revisada de este Aviso de Privacidad.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Además, como usamos localStorage para todo, técnicamente usted tiene control total. 
              Puede abrir DevTools y eliminar todo manualmente. Es como ser su propio administrador 
              de base de datos.
            </p>
          </section>

          {/* Section 7 */}
          <section id="section7" className="mb-10 scroll-mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. ¿OTRAS REGIONES TIENEN DERECHOS DE PRIVACIDAD ESPECÍFICOS?
            </h2>
            
            <p className="text-sm italic text-gray-600 mb-4">
              <strong>En resumen:</strong> Puede tener derechos adicionales basados en el país 
              en el que reside.
            </p>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-3 mt-6">
              Nueva Zelanda
            </h3>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Recopilamos y procesamos su información personal bajo las obligaciones y condiciones 
              establecidas por la Ley de Privacidad de 2020 de Nueva Zelanda ('Ley de Privacidad').
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Este Aviso de Privacidad satisface los requisitos de aviso definidos en la Ley de 
              Privacidad, en particular: qué información personal recopilamos de usted, de qué 
              fuentes, con qué propósitos y otros destinatarios de su información personal.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Si no desea proporcionar la información personal necesaria para cumplir con su propósito 
              aplicable, puede afectar nuestra capacidad de proporcionar nuestros servicios, en particular:
            </p>
            
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
              <li>ofrecerle los productos o servicios que desea</li>
              <li>responder o ayudar con sus solicitudes</li>
              <li>administrar su cuenta con nosotros</li>
              <li>confirmar su identidad y proteger su cuenta</li>
            </ul>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              En cualquier momento, tiene derecho a solicitar acceso o corrección de su información 
              personal. Puede hacer tal solicitud contactándonos usando los detalles de contacto 
              proporcionados en la sección{' '}
              <a href="#section11" className="text-indigo-600 hover:underline">
                '¿CÓMO PUEDE REVISAR, ACTUALIZAR O ELIMINAR LOS DATOS QUE RECOPILAMOS?'
              </a>
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Si cree que estamos procesando ilegalmente su información personal, tiene derecho a 
              presentar una queja sobre una violación de los Principios de Privacidad de Nueva Zelanda 
              ante la{' '}
              <a 
                href="https://www.privacy.org.nz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                Oficina del Comisionado de Privacidad de Nueva Zelanda
              </a>.
            </p>
          </section>

          {/* Section 8 - La sátira sutil */}
          <section id="section8" className="mb-10 scroll-mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. TENDRÁ UNA DEUDA CREACIÓN CUENTA.
            </h2>
            
            <p className="text-gray-700 leading-relaxed">
              La deuda es de diez mil pesos colombianos por la creación de la cuenta.
            </p>
            
            <p className="text-xs text-gray-500 italic mt-2">
              (Nota: Esta sección es claramente una broma y no tiene ninguna validez legal. 
              No cobramos nada por crear una cuenta. Pero si insiste en pagar, aceptamos café.)
            </p>
          </section>

          {/* Section 9 */}
          <section id="section9" className="mb-10 scroll-mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. ¿HACEMOS ACTUALIZACIONES A ESTE AVISO?
            </h2>
            
            <p className="text-sm italic text-gray-600 mb-4">
              <strong>En resumen:</strong> Sí, actualizaremos este aviso según sea necesario para 
              mantenernos conformes con las leyes relevantes.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Podemos actualizar este Aviso de Privacidad de vez en cuando. La versión actualizada 
              será indicada por una fecha 'Revisada' actualizada al principio de este Aviso de 
              Privacidad. Si hacemos cambios materiales a este Aviso de Privacidad, podemos 
              notificarle publicando prominentemente un aviso de tales cambios o enviándole 
              directamente una notificación. Le animamos a revisar este Aviso de Privacidad 
              frecuentemente para estar informado de cómo estamos protegiendo su información.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Las actualizaciones típicamente ocurrirán después de nuestro café del martes por la 
              mañana, cuando tenemos las mejores ideas.
            </p>
          </section>

          {/* Section 10 */}
          <section id="section10" className="mb-10 scroll-mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. ¿CÓMO PUEDE CONTACTARNOS SOBRE ESTE AVISO?
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Si tiene preguntas o comentarios sobre este aviso, puede contactarnos por correo en:
            </p>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="text-gray-800 font-mono">
                sexto semestre de ingeniería de software
              </p>
              <p className="text-gray-600 text-sm mt-2">
                __________
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section id="section11" className="mb-10 scroll-mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. ¿CÓMO PUEDE REVISAR, ACTUALIZAR O ELIMINAR LOS DATOS QUE RECOPILAMOS?
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Basándose en las leyes aplicables de su país, puede tener el derecho de solicitar 
              acceso a la información personal que recopilamos de usted, cambiar esa información o 
              eliminarla. Para solicitar revisar, actualizar o eliminar su información personal, 
              por favor visite:{' '}
              <a 
                href="https://terminos-y-condiciones-mocha.vercel.app/register"
                className="text-indigo-600 hover:underline break-all"
              >
                https://terminos-y-condiciones-mocha.vercel.app/register
              </a>.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              O simplemente puede abrir la consola del navegador, escribir{' '}
              <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                localStorage.clear()
              </code>
              {' '}y presionar Enter. Efecto inmediato garantizado.
            </p>
          </section>

          {/* Footer note */}
          <div className="mt-12 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Nota Educativa:</strong> Este documento ha sido creado con fines educativos 
              para estudiantes de ingeniería de software. Combina elementos de políticas de privacidad 
              reales con toques de humor para hacer el aprendizaje más entretenido. En un entorno de 
              producción real, todas las políticas de privacidad deben ser revisadas por profesionales 
              legales y cumplir estrictamente con las regulaciones aplicables (GDPR, CCPA, etc.).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}