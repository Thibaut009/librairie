QUESTIONS DE COURS /5 POINTS :

1. Quel composant vu en cours permet la gestion des routes avec React ?

BrowserRouter

2. Quel hook permet de récupérer un paramètre passé dans l’url ?

useParams

3. Qu’est-ce qu’un fragment ?

Les fragments nous permettent de grouper une liste d'enfants sans ajouter de nœud supplémentaire au DOM. Il existe aussi une nouvelle syntaxe concise pour les déclarer.

4. Quel hook permet de déclencher une action à un moment précis du cycle de vie du composant ?

UseEffect

5. React manipule-t-il directement le DOM de l’application ? expliquez…

React crée un arbre du DOM virtuel de la page web et le stocke en mémoire.
Quand l’application est mise à jour (à chaque appel de setState() ou au changement de props), React crée un nouvel arbre du VDOM avec toute les modifications.
Il détecte les éléments ayant changé et ceux qui doivent être mise à jour en comparant le nouvel arbre VDOM avec le précédent en utilisant un algorithme de différenciation appelé “Reconciliation”
À partir de cela, il génère un plan d'action qui détaille les mises à jour à appliquer sur le DOM.
Enfin, React applique les mises à jour nécessaires au DOM réel en suivant le plan d'action généré avec React DOM.


QUESTIONS PRATIQUES /5 POINTS :

1. Vous mettez en place un routeur sur votre projet react, écrivez la route qui permet de lancer le composant Post en
   lui transmettant le slug du post à afficher en paramètre

```bash

```

2. Vous utilisez useReducer dans votre projet. Dans le code JSX, quel code permet d’afficher un bouton qui, lorsque
   l’on clique dessus, lance l’action « SET_ITEM »

```bash
<button onClick={handleSetItem}>Définir un item</button>
```

3. Votre composant nécessite un state isAdmin. Ecrivez la ligne qui permet de le créer et de lui affecter la valeur
   « false » par dafaut.

```bash
const [isAdmin, setIsAdmin] = useState(false);
```

4. En JSX, une div affiche le texte du state « message », elle possède du style inline déterminant sa couleur de police à
   rouge.

```bash
<div style={{ color: 'red' }}>{message}</div>
```

5. En JSX, créez un input qui est rattaché au state « ville » et qui stockera ce que saisit l’utilisateur dans le state.

```bash
<input type="text" value={ville} onChange={handleVilleChange} placeholder="Entrez votre ville"/>
```
