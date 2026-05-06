import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient'; // Importe notre connexion à Supabase

export default function Login() {
  // On crée des "boîtes" pour stocker l'email, le mot de passe et les messages d'erreur
  const navigate = useNavigate(); // <-- Ajoute cette ligne ici
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Fonction pour S'INSCRIRE
// Fonction pour S'INSCRIRE
  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    // On affiche la vraie réponse de Supabase dans la console (F12)
    console.log("Réponse brute Supabase :", { data, error });

    if (error) {
      setMessage(`❌ Erreur : ${error.message}`);
    } else if (data.user === null) {
      setMessage(`❌ Le compte n'a pas été créé (Faux succès de sécurité).`);
    } else {
      setMessage('✅ Inscription 100% réussie !');
    }
    setLoading(false);
  };




  // Fonction pour SE CONNECTER
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setMessage(`❌ Erreur : ${error.message}`);
    } else {
      setMessage('✅ Connexion réussie ! Redirection...');
      
      // On attend 1 petite seconde pour que l'utilisateur voie le message vert
      setTimeout(() => {
        navigate('/'); // Téléportation vers l'accueil !
      }, 1000);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Espace Client</h2>
        
        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input 
              type="email" 
              placeholder="votre@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Mot de passe</label>
            <input 
              type="password" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Affichage des messages de succès ou d'erreur */}
          {message && <p className="text-center font-medium mt-2">{message}</p>}

          <div className="flex flex-col gap-3 mt-4">
            <button 
              onClick={handleLogin}
              disabled={loading}
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              {loading ? 'Chargement...' : 'Se connecter'}
            </button>
            
            <button 
              onClick={handleSignUp}
              disabled={loading}
              className="w-full py-3 bg-gray-100 text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
            >
              Créer un compte
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <Link to="/" className="text-gray-500 hover:underline">
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}