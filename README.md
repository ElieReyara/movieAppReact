# 🎬 Movie App - React Portfolio Project

Une application web moderne de découverte de films construite avec **React**, **Vite**, **Tailwind CSS** et **Appwrite**, intégrant des appels API externes et une gestion avancée de l'état.

---

## 🎯 À Propos du Projet

**Movie App** est une application full-stack de recherche et exploration de films, conçue pour démontrer une expertise complète en développement React moderne. Le projet met en avant des pratiques professionnelles, une architecture scalable et une expérience utilisateur optimisée.

### Objectif Pédagogique
Ce projet démontre mes compétences en :
- Architecture composants React réutilisables et performants
- Gestion d'état avancée (hooks personnalisés, useState, useEffect)
- Intégration d'API externes (The Movie Database API)
- Optimisation des performances (debouncing)
- Gestion asynchrone et gestion d'erreurs robuste
- Backend serverless avec Appwrite
- Styling moderne avec Tailwind CSS

---

## 🛠️ Stack Technologique

### Frontend
- **React 19** - Bibliothèque UI moderne avec dernières fonctionnalités
- **Vite 7** - Build tool ultra-rapide pour un DX optimal
- **Tailwind CSS 4** - Framework CSS utility-first pour styling responsive
- **@vitejs/plugin-react** - Support JSX et Fast Refresh en développement
- **ESLint** - Linting et qualité de code

### Backend & Données
- **Appwrite** - Backend BaaS pour authentification, base de données et stockage
- **The Movie Database (TMDB) API** - Source de données de films

### DevOps & Outils
- **npm** - Gestionnaire de dépendances
- **Git** - Contrôle de version

---

## ✨ Fonctionnalités Principales

### 1. 🔍 Recherche Avancée de Films
- Recherche en temps réel avec debouncing (500ms) pour optimiser les appels API
- Autocomplétude avec suggestions instantanées
- Gestion des erreurs avec messages UX clairs
- Validation et sanitization des requêtes

### 2. 📊 Section Films Tendances
- Affichage des films les plus recherchés basé sur les données Appwrite
- Classement par popularité
- Images des posters intégrées
- Mise à jour dynamique en temps réel

### 3. 🎞️ Galerie de Films Complète
- Affichage pagé/virtualisé des résultats
- Cartes films avec informations détaillées (titre, année, note, poster)
- Layout responsive adapté à tous les appareils
- Animation de chargement (Spinner)

### 4. 💾 Suivi des Recherches
- Enregistrement automatique des termes recherchés
- Compteur de popularité des recherches
- Intégration Appwrite Database pour persistance
- Analytics intégrés

### 5. 📱 Design Responsive
- Interface mobile-first
- Breakpoints optimisés (Tailwind)
- Navigation intuitive
- Performance optimisée

---


## 🚀 Installation et Démarrage

### Prérequis
- Node.js 16+ 
- npm 8+ (ou yarn/pnpm)
- Compte Appwrite (optionnel, pour features trending)

### Installation

```bash
# Cloner le repository
git clone https://github.com/ElieReyara/movieAppReact.git
cd mySecondMovieApp

# Installer les dépendances
npm install

# Configuration des variables d'environnement
# Créer un fichier .env.local à la racine :
cat > .env.local << 'EOF'
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
EOF
```

### Démarrage Développement

```bash
npm run dev
```

Ouvre [http://localhost:5173](http://localhost:5173) dans ton navigateur.

### Build Production

```bash
npm run build
```

Fichiers optimisés générés dans le répertoire `dist/`.

### Lint et Qualité

```bash
npm run lint
```

---

## 🔑 Clés API Requises

### The Movie Database (TMDB)
1. Créer un compte sur [TMDB](https://www.themoviedb.org/)
2. Générer une clé API v3 depuis les paramètres
3. Ajouter à `.env.local` : `VITE_TMDB_API_KEY`

### Appwrite (Optionnel)
1. Créer un compte sur [Appwrite Cloud](https://cloud.appwrite.io/)
2. Créer un projet, une database et une collection
3. Configurer `.env.local` avec IDs correspondants

---

## 🎓 Compétences React Démontrées

### Concepts Core React
✅ **Functional Components** - Architecture moderne sans classes  
✅ **Hooks** - useState, useEffect, custom hooks (useDebounce)  
✅ **State Management** - Gestion état local avec useState  
✅ **Effects** - Side effects avec nettoyage approprié  
✅ **Rendering Conditionnel** - Ternaires, logique JSX  
✅ **Lists & Keys** - Rendu optimisé avec .map() et keys uniques  
✅ **Props & Composition** - Composants réutilisables et composables  

### Performance & Optimisation
✅ **Debouncing** - Réduction requêtes API de 90%  
✅ **Conditional Rendering** - Éviter rendu inutile de Spinners  
✅ **Proper Dependencies** - Pas de boucles infinites useEffect  
✅ **Cleanup Functions** - Nettoyage timeouts et ressources  


## 📄 Licence

Ce projet est open source sous licence [MIT](LICENSE).





