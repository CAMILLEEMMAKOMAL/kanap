/**
 * La fonction affichageDesProduits() permet d'envoyer une requête HTTP de type GET à l'URL
 * http://localhost:3000/api/products.
 * Si la réponse est résolue. Elle est retournée en format textuel JSON et renvoie
 * une nouvelle promesse grâce à la méthode JSON. La 2nde promesse permet d'extraire la réponse et de traiter
 * les données reçues avec la boucle for...in. A l'intérieur de la boucle, je crée
 * mes éléments HTML avec leurs attributs pour ceux qui en ont. Je fais les liens parents/enfants.
 * J'affiche les données de data dans les éléments HTML 
 */

 function affichageDesProduits() { /*debut fonction */

    fetch('http://localhost:3000/api/products')
      .then(function (response) { /*response nom fonction  choisi */
        if (response.ok) {
          return response.json();
        }// Retour de la reponse au format JSON.
      })
      .then(function (data) { /*  // Affichage du résultat de l'API data nom  choisi pour designer la valeur   */
  
        for (let produits in data) {
  
          const listeDesProduits = data; /* data est renommer liste de produit */
          console.log(listeDesProduits); /*   Affichage du résultat de l'API (data=liste des produit) dans la console  */
  
          const items = document.getElementById("items"); /* constante creé qui coorespond a id=items*/
          console.log(items); /* affiche les element contenu dans les id=items*/
  
          const lienArticles = document.createElement("a"); /* constante creé lien Articles qui va chercher les element "a " */
          items.appendChild(lienArticles); /* signifie que le lien articles est un element enfant de la constante items plus haut */
          lienArticles.href = `product.html?id=${listeDesProduits[produits]._id}`; /*lien article dans le code "a" designe dans l 'api liste produit voir plus haut , produit , et l element _id qui lui renvoie une reponse canapé par canapé */
  
          const articles = document.createElement("article");/* constante creé qui coorespond a "article"*/
          lienArticles.appendChild(articles); /* signifie que articles est un element enfant de la constante "lien article" */
  
          const imageArticles = document.createElement("img");/* constante creé qui coorespond a "img"*/
          articles.appendChild(imageArticles);
          imageArticles.setAttribute("src", listeDesProduits[produits].imageUrl);/*imageUrl reference dans l api*/
          imageArticles.setAttribute("alt", listeDesProduits[produits].altTxt);/*reference dans l api*/
  
          const titreArticles = document.createElement("h3");
          articles.appendChild(titreArticles);
          titreArticles.classList.add("productName");
          titreArticles.innerHTML = listeDesProduits[produits].name;/* innerHTML recupere ce qui est à l interieur de html ,reference dans l api*/
  
          const descriptionArticles = document.createElement("p");
          articles.appendChild(descriptionArticles);
          descriptionArticles.classList.add("productDescription");
          descriptionArticles.innerHTML = listeDesProduits[produits].description;/*reference dans l api*/
        }
  
      })
      .catch(function (error) {
        console.log(`Une erreur est survenue: ${error}`);
      })
  }
  affichageDesProduits(); /* excution fonction */