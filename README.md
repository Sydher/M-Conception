# M Conception

Site vitrine de [M Conception](#TODO)

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
