import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo à gauche */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-3xl">🩺</span>
            <span className="text-2xl font-bold text-blue-600">AlloDoc</span>
          </Link>

          {/* Boutons à droite */}
          <div className="flex items-center gap-4">
            <Link 
              to="/login" 
              className="px-4 py-2 text-blue-600 font-medium hover:bg-blue-50 rounded-lg transition"
            >
              Se connecter
            </Link>
            <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition shadow-sm">
              Vous êtes professionnel ?
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}