📄 Cahier des Charges - MedicoLib (Phase MVP)
1. Vision du Projet
MedicoLib est une plateforme web de mise en relation médicale permettant aux patients de trouver un praticien et de prendre rendez-vous facilement, et aux médecins de gérer leur agenda et le suivi de leurs consultations.

Objectif du MVP : Prouver la viabilité technique et fonctionnelle du parcours de prise de rendez-vous avec un système robuste et rapide.

2. Utilisateurs Cibles (Les Rôles)
🧑‍⚕️ Le Médecin : Doit pouvoir configurer ses disponibilités, consulter son planning du jour, et ajouter des notes/documents liés à une consultation.

🤒 Le Patient : Doit pouvoir rechercher un médecin (par spécialité/ville), voir ses créneaux libres, réserver, et consulter son historique.

3. Périmètre Fonctionnel (Ce qu'on code maintenant)
Authentification :

Création de compte et connexion sécurisée (Email / Mot de passe).

Redirection automatique vers le bon tableau de bord selon le rôle (Patient ou Médecin).

Côté Patient :

Page de recherche de médecins (avec filtres simples).

Affichage du profil d'un médecin avec son calendrier de disponibilités.

Prise de rendez-vous (et annulation si besoin).

Côté Médecin :

Tableau de bord de l'agenda (vue jour/semaine).

Création de créneaux de disponibilité horaires.

Possibilité de modifier le statut d'un RDV (Terminé, Annulé) et de rédiger une note privée.

4. Stack Technique et Architecture
Frontend : React (via Vite) pour une interface ultra-rapide.

Design System : Tailwind CSS + composants UI (ex: React-Calendar, Lucide Icons).

Backend / Base de données : Supabase (PostgreSQL).

Gestion d'état (State) : React Context API (pour la gestion de l'utilisateur connecté).

Hébergement prévu : Vercel ou Netlify (Frontend) / Supabase Cloud (Backend).

5. Hors Périmètre MVP (Reporté à la V2) 🛑
(Ces éléments sont gardés en tête pour l'architecture future, mais ne bloqueront pas la sortie de la première version).

Architecture Cloud Enterprise : API Gateway (Kong/AWS), WAF dédié, HashiCorp Vault.

Paiement en ligne des consultations (Stripe).

Téléconsultation vidéo.

Chiffrement de bout-en-bout strict côté client pour obtenir la certification HDS (Hébergeur de Données de Santé).