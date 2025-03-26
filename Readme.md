# DeckLink

Projet en groupe lors de ma formation DWWM, d'un réseau social pour collectionneurs de cartes.

# 🏢 Architecture
```
📂 decklink/
├── 📂 backend (Express.js)
│ ├── 📂 src
│ │ ├── 📂 config
│ │ ├── 📂 controllers
│ │ ├── 📂 models
│ │ ├── 📂 repositories
│ │ ├── 📂 routes
│ │ ├── 📂 services
│ │ ├── 📜 server.js
│ ├── 📂 tests
│ ├── 📜 package.json
│ ├── 📜 .env
│ ├── 📜 README.md
```

# 📌 Fonctionnalités Principales  

## 🔹 Gestion des utilisateurs  
- Inscription et connexion sécurisées avec authentification (email + mot de passe ou via OAuth).  
- Profil utilisateur avec avatar, historique des duels et statistiques.  
- Système de rôles : utilisateur, modérateur et administrateur.  

## 🔄 Échanges de cartes  
- 🔁 **Propositions d’échange** avec validation des deux parties.  
- 📊 **Système d’équilibrage** : Comparaison automatique de la valeur des cartes.  
- 🛡️ **Mode sécurisé avec modérateur garant** pour éviter les arnaques.  

## 💬 Discussion & Communauté  
- 📌 **Forum structuré** : Catégories dédiées (stratégies, événements, duels, etc.).  
- 🚫 **Système anti-spam** avec filtrage des messages inappropriés.  
- 👍 **Système de réactions et votes** pour mettre en avant les meilleures discussions.  

## ⚔ Combats & Tournois  
- 🆚 **Mode duel** : Combats entre joueurs avec respect des règles officielles.  
- 🎲 **Mise en jeu de cartes (optionnel)** pour des matchs à enjeu.  
- 🏆 **Classement des joueurs** avec récompenses pour les meilleurs duellistes.  
- ⚖️ **Arbitrage par modérateur** en cas de litige.  

## 🎉 Événements & Tournois  
- 📅 **Gestion des événements** : Inscription, notifications et suivi des participants.  
- 🏅 **Tournois organisés** avec récompenses (cartes, monnaie virtuelle, bonus).  
- 🔥 **Événements spéciaux** : Échanges groupés, conférences sur les stratégies, challenges exclusifs.  

## 🛠️ Outils et Sécurité  
- 🔍 **Recherche avancée** : Filtres pour trouver des cartes spécifiques.  
- 🛡️ **Système de modération** : Signalement des abus, sanctions automatiques et gestion des litiges.