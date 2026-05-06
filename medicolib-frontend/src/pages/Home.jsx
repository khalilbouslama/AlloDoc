import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <p className="text-xl text-gray-600 mb-8">Trouvez votre médecin et prenez rendez-vous en ligne.</p>
      <Link to="/login" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
        Se connecter
      </Link>
    </div>
  );
}