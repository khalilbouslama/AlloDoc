import { useEffect } from 'react';
import { supabase } from './supabaseClient'; // Ton fichier de connexion créé tout à l'heure !

function App() {
  
  // Petit test pour vérifier que Supabase est bien connecté
  useEffect(() => {
    const testerConnexion = async () => {
      const { data, error } = await supabase.from('utilisateurs').select('*');
      if (error) console.error("Erreur Supabase :", error);
      else console.log("Connexion Supabase réussie ! Voici les données :", data);
    };
    
    testerConnexion();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>🩺 Bienvenue sur MedicoLib</h1>
      <p>Le frontend React est prêt. Ouvre la console de ton navigateur (F12) pour vérifier la connexion à Supabase !</p>
    </div>
  );
}

export default App;