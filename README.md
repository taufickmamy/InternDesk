# InternDesk

Vos stages, organisés.

## ⚙️ Installation

### 1. Cloner le repository

```bash
git clone <URL_DU_REPOSITORY>
```

### 2. Accéder au dossier backend

```bash
cd backend
```

### 3. Installer les dépendances

```bash
npm install
```

### 4. Configurer les variables d'environnement

```bash
cp .env.exemple .env
```

Puis renseigner les valeurs dans le fichier `.env` (connexion PostgreSQL, secret JWT, etc.).

### 5. Créer la base de données

Importer le script SQL fourni dans `database/plateforme_emploi.sql` (création des tables + données de test) sur une base PostgreSQL vide qui correspond au `DB_NAME` du `.env` :

```bash
psql -U <USER> -d <DB_NAME> -f database/plateforme_emploi.sql
```

### 6. Démarrer le serveur

```bash
npm run dev
```

Le serveur est alors accessible sur `http://localhost:3000`.

## 📦 Dépendances principales

```bash
npm install express pg bcrypt jsonwebtoken dotenv cors helmet express-rate-limit
```

## 🔐 Endpoints d'authentification

| Méthode | Route                               | Accès            | Description                                  |
| ------- | ----------------------------------- | ---------------- | -------------------------------------------- |
| POST    | `/api/auth/register/candidat`       | public           | Inscription d'un candidat                     |
| POST    | `/api/auth/register/entreprise`     | public           | Inscription d'une entreprise                  |
| POST    | `/api/auth/login`                   | public           | Connexion (email, motDePasse, role)           |
| GET     | `/api/auth/profile`                 | protégé (token)  | Accès au profil de l'utilisateur connecté     |

## 🗂️ Endpoints offres

| Méthode | Route                        | Accès                           | Description                         |
| ------- | ---------------------------- | ------------------------------- | ----------------------------------- |
| POST    | `/api/offres`                | protégé (entreprise)            | Publication d'une offre             |
| POST    | `/api/offres/:id/postuler`   | protégé (candidat)              | Candidature à une offre             |
| PATCH   | `/api/offres/:id/moderer`    | protégé (admin)                 | Modération d'une offre              |