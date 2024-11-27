import Route from "./Route.js";
//Définir ici vos routes
export const allRoutes = [
 new Route("/", "Accueil", "/pages/home.html"),
 new Route("/Galerie", "La galerie", "/pages/galerie.html"),
 new Route("signin", "Connexion", "/pages/signin.html"),
 new Route("singup", "Inscription", "/pages/singup.html"),
];
 
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";