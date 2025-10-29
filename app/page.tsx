'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (!user) {
      router.push('/login');
    } else {
      setCurrentUser(user);
      setLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-xl text-gray-600">Cargando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Mi App</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Cerrar Sesión
          </button>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            ¡Bienvenido! 🎉
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Has iniciado sesión como: <span className="font-semibold text-indigo-600">{currentUser}</span>
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              ✅ Autenticación exitosa
            </h3>
            <p className="text-green-700">
              Has aceptado nuestros términos y condiciones absurdos. Ahora eres 
              oficialmente parte de nuestra comunidad de usuarios que realmente 
              leyeron los términos (o al menos hicieron click en el checkbox).
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">📧 Tu cuenta</h4>
              <p className="text-gray-600">
                Tu información está guardada de forma segura en localStorage (nada 
                más seguro que el navegador de tu usuario, ¿verdad?).
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">🔐 Seguridad</h4>
              <p className="text-gray-600">
                Tu contraseña está protegida con la última tecnología del 2010: 
                ¡guardada en texto plano! (Nota: esto es solo un ejemplo, NUNCA 
                hagas esto en producción).
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">📋 Recordatorio</h4>
              <p className="text-gray-600">
                No olvides que aceptaste que los gatos son superiores a los perros. 
                Esto es jurídicamente vinculante en 0 países.
              </p>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <Link
              href="/terminos"
              className="text-indigo-600 hover:text-indigo-800 underline"
            >
              Releer los términos hilarantes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}