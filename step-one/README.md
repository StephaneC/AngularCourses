# StepOne
Dans cet exercice nous mettons en place:
1. Le découpage en module
2. le système d'alias permettant d'avoir des _imports_ propres.

## Les modules
1. Core : En charge de l'ensemble des services singleton à partager dans l'application.
’ng generate module core’
2. shared : Composants utilitaires, pipes, ... Ils ne doivent pas injecter de service du module core. Les composants doivent être l eplus simple possible et prendre en paramètres les éléments nécessaires. 
’ng generate module shared’
3. features : Vos composants métiers. Chaque composant ne doit dépendre que de ses propres services ou des services core. S'il a besoin d'un service d'une autre feature, ce service doit être déplacé dans Core.
’ng generate module features’

Pour illustrer le fonctionnement global
## Les alias
1: dans [tsconfig.app.json](./tsconfig.json), nous déclarons des alias par package dans le _paths_.
’
"baseUrl": "./src",
"paths": {
      "@app/*": ["app/*"]
    }
’
2. Nous modifions maintenant nos _imports_. 

Il faudra évidemment créer de nouveaux alias lors de nos prochains steps pour continuer à utiliser ce tips.
Dans le cas d'import local (./XXX) il faut continuer à utiliser le relative path.