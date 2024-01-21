# M Conception

Site vitrine de [M Conception](https://m-conception.netlify.app/)  
[![Netlify Status](https://api.netlify.com/api/v1/badges/9c209ccd-6bc7-4479-a4ad-53bd9f6ba031/deploy-status)](https://app.netlify.com/sites/m-conception/deploys)

## Documentation technique

### Développement en local

- Installer [NodeJS LTS](https://nodejs.org/)
- Installer Angular CLI : `npm install -g @angular/cli`
- Lancer la commande suivante : `ng serve`
- Avec le navigateur se rendre sur : `http://localhost:4200/`

### Créer une nouvelle page

- Lancer la commande suivante : `ng g c pages/nom-page`
- Ajouter le lien dans la barre de navigation :
  - Modifier `src/app/shared/navbar/navbar.component.html`
  - Ajouter un nouveau `<li>`
- Ajouter le chemin au routing :
  - Modifier `src/app/app.routes.ts`
  - Ajouter une nouvelle ligne

### Générer le code pour la mise en production

- Lancer la commande suivante : `ng build`
- Copier le contenu du dossier `dist/m_conception/browser` sur le serveur

> Ceci représente les commandes manuelles, un push/merge sur main suffit pour déployer automatiquement sur Netlify
